// @ts-check

/**
 * Describes the structure of a message schedule.
 * @typedef {object} TSchedule
 * @property {string} id - The unique identifier for the task.
 * @property {string} recipientJid - The recipient's WhatsApp JID (e.g., 15551234567@s.whatsapp.net).
 * @property {string} message - The message content to be sent.
 * @property {string} cronTime - The cron expression (e.g., "0 8 * * *").
 * @property {boolean} enabled - Defines if the task is active.
 */

// We export an empty object so Node.js recognizes this as a module.
module.exports = {};