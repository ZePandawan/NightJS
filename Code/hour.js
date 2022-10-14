module.exports = {
    get_hour: async function(interaction){
        let result = Date.now();
        const timestamp = new Date(result);
        let hours = timestamp.getHours().toString().length === 1 ? `0${timestamp.getHours()}` : timestamp.getHours();
        let minutes = timestamp.getMinutes().toString().length === 1 ? `0${timestamp.getMinutes()}` : timestamp.getMinutes();
        let seconds = timestamp.getSeconds().toString().length === 1 ? `0${timestamp.getSeconds()}` : timestamp.getSeconds();
        const hour = `${hours}:${minutes}:${seconds}`;
        await interaction.reply(`It is ${hour}`);
    }
};