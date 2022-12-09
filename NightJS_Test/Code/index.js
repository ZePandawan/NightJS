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

////////////////////////////////////////////////////////////////////////////////

class Todos {
    constructor() {
        this.todos = [];
        this.client = client;
        this.interaction;
        this.opts;
        this.checkDayReply;

    }


    async initialyse() {
        this.interaction = await interactionBuilder(
            {
                client,
                guildId: '1043069964971692072',
                channelId: '1043069965730844725',
                userId: '421999801685508107'
            });

        this.opts = await optionsBuilder({
            client,
            guildId: '1043069964971692072',
            options: [
                {id: 'string', type: 'STRING', value: 'cheeses'},
                {id: 'int', type: 'INTEGER', value: 1},
                {id: 'bool', type: 'BOOLEAN', value: true},
                {id: 'bun', type: 'USER', value: '421999801685508107'},
                {id: 'iara', type: 'USER', value: '191662700957270016'},
                {id: 'channel', type: 'CHANNEL', value: '1043069965730844725'},
                {id: 'num', type: 'NUMBER', value: 3}
            ]
        });
    };



    /*

        this.checkDayReply = async ( resp ) => console.log(JSON.stringify(resp));
        this.checkDay = this.interaction({
            type: "APPLICATION_COMMAND",
            name: "day",
            reply: this.checkDayReply,
            options: [
                await this.opts.build({id: 'string', name:'message'})
            ]
        });
    }

     */


    async launchDayTest(){
        const checkDayReply = async ( resp ) => console.log(JSON.stringify(resp));
        let checkDay = this.interaction({
            type: "APPLICATION_COMMAND",
            name: "day",
            reply: checkDayReply,
            options: [
                //await this.opts.build({id: 'string', name:'message'})
            ]
        });

        return client.emit('interactionCreate', checkDay);
    }

    list() {
        return [...this.todos];
    }

    add(title) {
        let todo = {
            title: title,
            completed: false,
        }

        this.todos.push(todo);
    }

    complete(title) {
        let todoFound = false;
        this.todos.forEach((todo) => {
            if (todo.title === title) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });

        if (!todoFound) {
            throw new Error(`No TODO was found with the title: "${title}"`);
        }
    }
}

module.exports = Todos;



////////////////////////////////////////////////////////////////////////////////

client.once("ready",async () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
    console.log("Je suis prêt !");
    let interaction = await interactionBuilder(
        {client,
            guildId: '1043069964971692072',
            channelId: '1043069965730844725',
            userId: '421999801685508107'});
});








client.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'balance') {
        const message = interaction.options.getString('message');
        console.log(message);
        interaction.reply(`Tu as choisi ${message} !`);
    }
    if (interaction.commandName === 'day') {
        //const message = interaction.options.getString('message');
        console.log(message);
        interaction.reply(`Tu as choisi ${message} !`);
        return "test";

}});

client.login(token);


