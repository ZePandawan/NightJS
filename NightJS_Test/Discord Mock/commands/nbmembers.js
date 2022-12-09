exports.run = async (client, interaction) => {
    let guild_info = interaction.guild.members.cache.filter(e => !e.user.bot).map(e => e.user.username);
	console.log(guild_info);

    await interaction.reply(guild_info.length === 1 ? `There is ${guild_info.length} member on this server` :
                                                     `There are ${guild_info.length} members on this server`);
};