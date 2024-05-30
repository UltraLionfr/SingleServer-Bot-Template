---
# Discord.js Bot Template ^v14.15.2 🎉


Welcome to the Discord Bot Template! This template is designed to help you quickly set up a Discord bot using `discord.js` version 14.15.2. 🚀 This bot is configured to operate exclusively on a single Discord server, making it perfect for community management and more! 🎈


## Features 🌟


- **Single Server Operation**: This bot is restricted to one server, ensuring focused and tailored functionality. 🛡️

- **Easy Setup**: Get your bot up and running in no time with clear instructions and modular code. ⏱️

- **Customizable Commands**: Easily add and modify commands to suit your server's needs. 🎨

- **Event Handlers**: Pre-configured event handlers for seamless integration of new features. 🔄


## Prerequisites 📋


- **Node.js**: Make sure you have Node.js installed (v16.6.0 or higher).

- **discord.js v14.15.2**: This template uses the latest version of discord.js.


## Installation 🛠️


1. **Clone the repository**:

    ```bash

    git clone https://github.com/UltraLionfr/SingleServer-Bot-Template.git

    cd SingleServer-Bot-Template

    ```


2. **Install dependencies**:

    ```bash

    npm install

    ```



3. **Configure your bot**: Edit the `.env` file to set up your settings.


## Running the Bot ▶️


To start the bot, run:

```bash

node index.js

```


## Project Structure 🗂️

```yml
├─ .env
├─ LICENSE
├─ README.md
├─ SlashCommands
│  └─ Useful
│     └─ ping.js
├─ deploy-commands.js
├─ events
│  ├─ InteractionCreate.js
│  └─ ready.js
├─ index.js
└─ package.json
```


## Example Command ✨


Here is an example of a simple ping command:


```javascript

// SlashCommands/Useful/ping.js

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};

```


## Contributing 🤝


Contributions are welcome! Feel free to submit a pull request or open an issue to improve the template.


## License 📄


This project is licensed under the MIT License. See the `LICENSE` file for details.
---
Enjoy building your bot! If you have any questions or need help, feel free to reach out. Happy coding! 🎉

---

Author: UltraLion - QuantumCraft Studios
