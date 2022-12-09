//const discordTTS=require("discord-tts");
const { getAudioUrl } = require('google-tts-api');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');

exports.run = async (client, interaction) => {
    const message_to_read = interaction.options.getString('message');
    //const args = message_to_read.split(' ');
    //const string = args.join(' ');
    console.log(interaction.options.getString('language'));
    let language;
    if (interaction.options.getString('language') == null){
        language = 'fr';
    } else{
        language = interaction.options.getString('language');
    }


    const { channel } = interaction.member.voice;
    if (!channel) return interaction.reply('You must be in the voice room to use this command!');
    const audioURL = getAudioUrl(message_to_read, {
        lang: language,
        slow: false,
        host: 'https://translate.google.com',
        timeout: 10000,
    });
    let VoiceConnection = joinVoiceChannel({channelId: channel.id, guildId: channel.guild.id, adapterCreator: channel.guild.voiceAdapterCreator});
    const resource = createAudioResource(audioURL);
    const player = createAudioPlayer();
    VoiceConnection.subscribe(player);
    player.play(resource);


    interaction.reply(`I will told ${message_to_read}`);


}