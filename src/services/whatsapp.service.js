// @ts-check

const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const chalk = require('chalk');

/**
 * Manages the connection and message sending via Baileys.
 */
class WhatsAppService {
  /** @type {import('@whiskeysockets/baileys').WASocket | null} */
  sock = null;

  /**
   * Initializes the connection with WhatsApp.
   * @returns {Promise<void>}
   */
  async connect() {
    const { state, saveCreds } = await useMultiFileAuthState('auth');

    this.sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      logger: require('pino')({ level: 'silent' })
    });

    this.sock.ev.on('creds.update', saveCreds);

    return new Promise((resolve, reject) => {
      this.sock?.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'open') {
          console.log(chalk.green('[WHATSAPP] Successfully connected!'));
          resolve();
        } else if (connection === 'close') {
          const shouldReconnect = lastDisconnect?.error instanceof Boom && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut;
          console.log(chalk.red(`[WHATSAPP] Connection closed. Reconnecting: ${shouldReconnect}`));
          if (shouldReconnect) {
            this.connect();
          } else {
            reject(new Error('Permanently disconnected from WhatsApp.'));
          }
        }
      });
    });
  }

  /**
   * Sends a text message to a specific JID.
   * @param {string} jid 
   * @param {string} text 
   * @returns {Promise<void>}
   */
  async sendMessage(jid, text) {
    if (!this.sock) {
      throw new Error('WhatsApp is not connected.');
    }
    try {
      await this.sock.sendMessage(jid, { text });
      console.log(chalk.blue(`[MESSAGE] Message sent to ${jid}`));
    } catch (error) {
      console.error(chalk.red(`[MESSAGE ERROR] Failed to send to ${jid}:`), error);
    }
  }
}

module.exports = { WhatsAppService };