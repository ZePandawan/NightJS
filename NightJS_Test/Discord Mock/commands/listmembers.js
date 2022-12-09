const { EmbedBuilder } = require("discord.js");

exports.run = async (client, interaction) => {
    let guild_info = interaction.guild.members.cache.filter(e => !e.user.bot).map(e => e.user.username);
	console.log(guild_info);
    guild_info = `${guild_info}`.split(",");
    guild_info = guild_info.join('\n');

    //console.log(client.user.avatar);

    const myEmbed = new EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name: "NightJS"})
        .setDescription("List of every human member on this server")
        .addFields(
            {name: "Members :", value: guild_info},
        )
    await interaction.reply({embeds: [myEmbed]});
}