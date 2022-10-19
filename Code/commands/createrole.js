const {PermissionsBitField} = require("discord.js");
exports.run = async (client, interaction) => {
    let new_role = interaction.options.getString('role');
    let admin = interaction.options.getBoolean('admin');

    const guild = interaction.guild;
/*
    let muteRole = guild.roles.cache.find(role => role.name === new_role);

    if (!muteRole) muteRole = await guild.roles.create({
        name: `${new_role}`,
        data: {
            name: `${new_role}`,
            reason: 'Creating role with /createrole'
        }
    });

    if (admin === true) {
        await muteRole.setPermissions([PermissionsBitField.Flags.Administrator]);
        console.log("heheheeeee");
    }
*/

    guild.roles.create({
        name:`${new_role}`,
        permissions : ["ADMINISTRATOR" = `${admin}`]
        }
    )

    console.log(admin);
    await interaction.reply(`${new_role} role have been created !`);
}