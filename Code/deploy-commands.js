const { SlashCommandBuilder , Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientId,  guildId, token } = require('../Config/config.json');

const commands = [
    new SlashCommandBuilder().setName('test')
                            .setDescription('Print "Hello World !"'),
                            
    new SlashCommandBuilder().setName('test2')
                            .setDescription('Print "Hello World !" + your message')
                            .addStringOption(option => option.setName('input')
                                                            .setDescription('the message that will follow "Hello World!"')
                                                            .setRequired(true)),

    new SlashCommandBuilder().setName('hour')
                            .setDescription('Return actual hour:min:sec'),
    new SlashCommandBuilder().setName('day')
                            .setDescription('Return the actual day/month/year'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: "10"}).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body : commands})
    .then((data) => console.log(`Succesfully registered ${data.length} application commands. `))
    .catch(console.error);