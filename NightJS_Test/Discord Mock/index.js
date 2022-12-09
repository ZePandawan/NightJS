const { Client, Intents, GatewayIntentBits, Collection, MessageMentions, GuildMemberManager, EmbedBuilder } = require('discord.js');
const { optionsBuilder, interactionBuilder } = require('discord.js-mock-interactions');
const { token } = require("../Config/config_test.json");
const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./Code/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    let commandConfig = require(`./commands/${file}`);
    client.commands.set(file.replace('.js', ''), commandConfig);
}


client.once("ready",async () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    //const Guilds = client.guilds.cache;
    console.log(Guilds);
    console.log("Je suis prêt !");
    let interaction = await interactionBuilder(
        {client,
            guildId: '1043069964971692072',
            channelId: '1043069965730844725',
            userId: '421999801685508107'});

    const opts = await optionsBuilder({
        client,
        guildId: '1043069964971692072',
        options: [
            { id: 'string', type: 'STRING', value: 'cheeses' },
            { id: 'int', type: 'INTEGER', value: 1 },
            { id: 'bool', type: 'BOOLEAN', value: true },
            { id: 'bun', type: 'USER', value: '421999801685508107' },
            { id: 'iara', type: 'USER', value: '191662700957270016' },
            { id: 'channel', type: 'CHANNEL', value: '1043069965730844725' },
            { id: 'num', type: 'NUMBER', value: 3 }
        ]
    });

    const checkBalanceReply = async ( resp ) => console.log(JSON.stringify(resp));
    const checkDayReply = async ( resp ) => console.log(JSON.stringify(resp));
    const checkHourReply = async ( resp ) => console.log(JSON.stringify(resp));
    const checkListmembersReply = async ( resp ) => console.log(JSON.stringify(resp));
    const checkNbmembersReply = async ( resp ) => console.log(JSON.stringify(resp));
    const checkSaluteReply = async ( resp ) => console.log(JSON.stringify(resp));
    const ReaddbRepley = async ( resp ) => console.log(JSON.stringify(resp));

    const checkDay = interaction({
        type: "APPLICATION_COMMAND",
        name: "day",
        reply: checkDayReply,
        options: [
            await opts.build({id: 'string', name:'message'})
        ]
    });
    client.emit('interactionCreate', checkDay);
});


client.on('interactionCreate', async interaction => {


    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    //console.log(interaction);
    console.log(interaction.guild.members.fetch());


    if(client.commands.has(commandName)){
        client.commands.get(commandName).run(client, interaction).catch(console.error);
    }
});

client.login(token);


