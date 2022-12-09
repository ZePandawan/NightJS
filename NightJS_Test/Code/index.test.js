const Todos = require('./index');
const assert = require('assert').strict;
const { Client, Intents, GatewayIntentBits, Collection, MessageMentions, GuildMemberManager, EmbedBuilder } = require('discord.js');
const { optionsBuilder, interactionBuilder } = require('discord.js-mock-interactions');
const { token } = require("../Config/config_test.json");

let todos = new Todos();
todos.initialyse();
describe("integration test", function(){
    it("should be able to add and complete TODOs", function() {
        assert.notStrictEqual(todos.list().length, 1);
    });
})

describe("day test", function(){
    it("should be able to return the date", function(){
        //todos.add("day test");
        assert.notStrictEqual(typeof todos.launchDayTest(),typeof "String");
    })
})