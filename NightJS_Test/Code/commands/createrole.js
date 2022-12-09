const {PermissionsBitField} = require("discord.js");
exports.run = async (client, interaction) => {
    let new_role = interaction.options.getString('role');
    let admin = interaction.options.getBoolean('admin');

    const guild = interaction.guild;

    let muteRole = guild.roles.cache.find(role => role.name === new_role);

    let admin_author;
    let newRole;

    let guild_info = interaction.guild.members.cache.filter(e => !e.user.bot).map(e => e);
    for (const member of guild_info){
        if(interaction.user.id === member.user.id){
            interaction.member.permissions.has('ADMINISTRATOR') ?  admin_author = true : admin_author = false;
        }
    }

    admin_author ? newRole = await guild.roles.create({name: `${new_role}`, data: {name: `${new_role}`, reason: 'Creating role with /createrole'}}) :
                    await interaction.reply("You dont have the permission to create a new role");
    if (admin === true && admin_author === true) {
        await newRole.setPermissions([PermissionsBitField.Flags.Administrator]);
        await interaction.reply(`${new_role} role have been created as an administrator !`);
    }else if(admin === false && admin_author === true){
        await interaction.reply(`${new_role} role have been created as an user !`)
    }


    //console.log(admin);
    //await interaction.reply(`${new_role} role have been created !`);
}