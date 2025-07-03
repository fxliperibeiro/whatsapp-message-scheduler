// @ts-check

const schedule = require('node-schedule');
const chalk = require('chalk');

/** @typedef {import('../types/schedule.types').TSchedule} TSchedule */
/** @typedef {import('../services/whatsapp.service').WhatsAppService} WhatsAppService */

/**
 * Initializes and schedules all active tasks from the configuration file.
 * @param {TSchedule[]} schedules - The list of tasks to schedule.
 * @param {WhatsAppService} whatsappService - The WhatsApp service instance for sending messages.
 */
function initializeSchedules(schedules, whatsappService) {
  let activeJobs = 0;
  
  schedules.forEach((task) => {
    if (!task.enabled) {
      console.log(chalk.gray(`[SCHEDULER] Task '${task.id}' is disabled.`));
      return;
    }

    console.log(chalk.yellow(`[SCHEDULER] Scheduling task '${task.id}' with cron: ${task.cronTime}`));

    schedule.scheduleJob(task.id, task.cronTime, async () => {
      console.log(chalk.cyan(`[JOB EXECUTING] Executing task '${task.id}'...`));
      
      try {
        await whatsappService.sendMessage(task.recipientJid, task.message);
      } catch (error) {
        console.error(chalk.red(`[JOB ERROR] Error executing task '${task.id}':`), error);
      }
    });

    activeJobs++;
  });

  console.log(chalk.bold.greenBright(`\n✨ ${activeJobs} active task(s) are scheduled and waiting. ✨\n`));
}

module.exports = { initializeSchedules };