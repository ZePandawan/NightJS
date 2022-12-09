exports.run = async (client, interaction) => {
    await interaction.reply(`Hello World ${interaction.options.getString('input')}`);
};