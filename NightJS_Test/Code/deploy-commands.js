const { SlashCommandBuilder , Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientId,  guildId, token } = require('../Config/config_test.json');

const commands = [
    new SlashCommandBuilder().setName('day')
                            .setDescription('Pour le test'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: "10"}).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body : commands})
    .then((data) => console.log(`Succesfully registered ${data.length} application commands. `))
    .catch(console.error);