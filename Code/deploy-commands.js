const { SlashCommandBuilder , Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientId,  guildId, token } = require('../Config/config.json');

const commands = [
    new SlashCommandBuilder().setName('test')
                            .setDescription('Print "Hello World !"'),
                            
    new SlashCommandBuilder().setName('test2')
                            .setDescription('Print "Hello World !" + your message')
                            .addStringOption(option =>
                                option.setName('input')
                                    .setDescription('the message that will follow "Hello World!"')
                                    .setRequired(true)),

    new SlashCommandBuilder().setName('hour')
                            .setDescription('Return actual hour:min:sec'),
    new SlashCommandBuilder().setName('day')
                            .setDescription('Return the actual day/month/year'),
    new SlashCommandBuilder().setName('salute')
                            .setDescription('Salute someone on this server'),
    new SlashCommandBuilder().setName('nbmembers')
                            .setDescription('Return the number of people actually on the server (excepting bots)'),
    new SlashCommandBuilder().setName('listmembers')
                            .setDescription('Return the list of people actually on the server (excepting bots)'),
    new SlashCommandBuilder().setName('createrole')
                            .setDescription('Allow you to create a role')
                            .addStringOption(option =>
                                option.setName('role')
                                    .setDescription('role name')
                                    .setRequired(true))
                            .addBooleanOption(option =>
                                option.setName('admin')
                                    .setDescription('Select True if the role has to be administrator')
                                    .setRequired(true)),
    new SlashCommandBuilder().setName('readdb')
                            .setDescription('Trying to read datas from db'),
    new SlashCommandBuilder().setName('lol-info')
                            .setDescription("Tell you some informations about someone profile")
                            .addStringOption(option =>
                                option.setName('player')
                                    .setDescription("test")
                                    .setRequired(true)),
]
    .map(command => command.toJSON());

const rest = new REST({ version: "10"}).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body : commands})
    .then((data) => console.log(`Succesfully registered ${data.length} application commands. `))
    .catch(console.error);