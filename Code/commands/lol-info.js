const {LolApi, Constants } = require('twisted');


exports.run = async (client, interaction) => {
    const api = new LolApi("RGAPI-55f3054f-9590-4c76-b7dd-559fd6ea83ca");
    let player_name = interaction.options.getString('player');
    test =  await api.Summoner.getByName(player_name, Constants.Regions.EU_WEST);
    console.log(test);
    await interaction.reply(`${test.response.summonerLevel}`);
}