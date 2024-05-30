const { REST, Routes } = require('discord.js');
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

module.exports = async () => {
    const commands = [];
    const commandsPath = path.join(__dirname, 'SlashCommands');
    const commandFiles = fs.readdirSync(commandsPath).flatMap(dir => {
        const commandPath = path.join(commandsPath, dir);
        return fs.readdirSync(commandPath).map(file => path.join(commandPath, file));
    });

    for (const filePath of commandFiles) {
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        }
    }

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    try {
        console.log('Started refreshing guild (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded guild (/) commands.');
    } catch (error) {
        console.error(error);
    }
};
