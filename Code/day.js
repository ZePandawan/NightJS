module.exports = {
    get_day: async function(interaction) {
        let result = Date.now();
        const timestamp = new Date(result);
        let day = timestamp.getDate() === 1 ? `0${timestamp.getDate()}` : timestamp.getDate();
        let month = timestamp.getMonth() > 9 ? `0${timestamp.getMonth() + 1}` : timestamp.getMonth() + 1;
        let year = timestamp.getFullYear();
        const date = `${day}/${month}/${year}`;
        await interaction.reply(`We are the ${date}`);
    }
}