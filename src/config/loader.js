// @ts-check

const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

// We import the type definition from our types file.
/** @typedef {import('../types/schedule.types').TSchedule} TSchedule */

/**
 * Loads and validates the schedules from the configuration file.
 * @returns {Promise<TSchedule[]>} A promise that resolves with the list of tasks.
 */
async function loadSchedules() {
  try {
    const filePath = path.join(process.cwd(), 'schedules.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    /** @type {any[]} */
    const jsonData = JSON.parse(fileContent);

    if (!Array.isArray(jsonData)) {
      throw new Error("The schedules.json file must be an array.");
    }

    console.log(chalk.green('[CONFIG] Schedules file loaded successfully.'));
    // In a real project, you would add more validation here for each field.
    return jsonData;

  } catch (error) {
    console.error(chalk.redBright('[CONFIG ERROR] Failed to load or validate the schedules.json file.'));
    if (error instanceof Error) {
        console.error(chalk.redBright(error.message));
    }
    process.exit(1);
  }
}

module.exports = { loadSchedules };