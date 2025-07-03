// @ts-check

const { loadSchedules } = require('./config/loader');
const { initializeSchedules } = require('./scheduler/task.scheduler');
const { WhatsAppService } = require('./services/whatsapp.service');
const chalk = require('chalk');

async function main() {
  console.log(chalk.bold.magenta('--- Starting WhatsApp Message Scheduler (JS Version) ---'));

  const schedules = await loadSchedules();
  if (schedules.length === 0) {
    console.log(chalk.yellow('No schedules found. Exiting.'));
    return;
  }

  const whatsappService = new WhatsAppService();
  await whatsappService.connect();

  initializeSchedules(schedules, whatsappService);
}

main().catch(error => {
  console.error(chalk.redBright.bold('\n[FATAL ERROR] The application encountered an error:'), error);
  process.exit(1);
});