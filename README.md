<div align="center">
  <strong>🇺🇸 English</strong> | <a href="README.pt-BR.md">🇧🇷 Português (Brasil)</a>
</div>
<br>

# WhatsApp Message Scheduler ✨

A flexible and easy-to-configure bot to schedule and automate WhatsApp messages using Node.js. Built with Baileys and `node-schedule`, and type-checked with JSDoc for better reliability.

---

### 🚀 Features

- **Cron-based Scheduling**: Schedule messages with the full power of cron expressions.
- **Easy Configuration**: Manage all your schedules from a single `schedules.json` file.
- **Toggle Tasks**: Easily enable or disable scheduled tasks without deleting them.
- **Reliable Connection**: Uses `baileys` for a stable WhatsApp Web connection.
- **Type-Checked JS**: Modern JavaScript code with JSDoc annotations for improved code quality and autocompletion.

---

### 🔧 Technologies Used

- [Node.js](https://nodejs.org/)
- [baileys](https://github.com/WhiskeySockets/Baileys)
- [node-schedule](https://github.com/node-schedule/node-schedule)
- [chalk](https://github.com/chalk/chalk) (for colorful logs)

---

### ⚙️ Installation & Setup

Follow these steps to get your instance of the bot up and running.

**1. Prerequisites**
- Make sure you have [Node.js](https://nodejs.org/en/download/) (v16 or higher) installed.

**2. Clone the Repository**
```bash
git clone https://github.com/fxliperibeiro/whatsapp-message-scheduler.git
cd whatsapp-message-scheduler
````

**3. Install Dependencies**

```bash
npm install
```

**4. Configure Your Schedules**
Create a `schedules.json` file in the root of the project and add your tasks.

**`schedules.json` example:**

```json
[
  {
    "id": "good-morning-team",
    "recipientJid": "120363043992591965@g.us",
    "message": "Good morning, team! Let's have a great day! ☀️",
    "cronTime": "0 9 * * 1-5",
    "enabled": true
  },
  {
    "id": "personal-reminder",
    "recipientJid": "15551234567@s.whatsapp.net",
    "message": "⚠️ Don't forget to check your emails!",
    "cronTime": "0 14 * * *",
    "enabled": true
  }
]
```

**Field Explanation:**

  - `id`: A unique name for your task.
  - `recipientJid`: The recipient's ID.
      - For personal contacts: `COUNTRY_CODE` + `PHONE_NUMBER` + `@s.whatsapp.net` (e.g., `15551234567@s.whatsapp.net`)
      - For groups: The group ID, which you can get by logging a group message event. It ends with `@g.us`.
  - `message`: The text message to be sent.
  - `cronTime`: The schedule in cron format (`minute hour day-of-month month day-of-week`).
  - `enabled`: Set to `true` to activate the task or `false` to disable it.

-----

### ▶️ Running the Bot

**For development (with auto-restart on file changes):**

```bash
npm run dev
```

**For production:**

```bash
npm start
```

**First Run: QR Code Scan**
On the first run, a QR code will appear in your terminal. Scan it using the WhatsApp app on your phone (in `Linked Devices`) to connect your account. A session file will be created in the `auth/` folder, so you won't need to scan it again unless you log out.

-----

### 📜 License

Distributed under the MIT License.enhance the README file
