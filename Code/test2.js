module.exports = {
    test2_again: async function(interaction){
        await interaction.reply(`Hello World ${interaction.options.getString('input')}`);
    }
};