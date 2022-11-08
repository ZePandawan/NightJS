// FR : Ajout de la classe discord.js dans mon répertoire + de mon token dans mon fichier config.json
// EN : Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection, MessageMentions, GuildMemberManager, EmbedBuilder } = require('discord.js');
const { token } = require("../Config/config.json");
const fs = require("fs");


// FR : Créer une nouvelle instance de client
// EN : Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, 
	GatewayIntentBits.GuildMembers, 
	GatewayIntentBits.GuildVoiceStates,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildPresences] });


client.commands = new Collection();
const commandFiles = fs.readdirSync('./Code/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  let commandConfig = require(`./commands/${file}`);
  client.commands.set(file.replace('.js', ''), commandConfig);
}

// FR : Une fois que le client est prêt, le code ci-dessous va être exécuté (une seule fois)
// EN : When the client is ready, run this code (only once)
client.once('ready',() => {
	//const Guilds = client.guilds.cache.map(guild => guild.id);
	const Guilds = client.guilds.cache;
    console.log(Guilds);
	console.log("Je suis prêt !");
});

// FR : C'est ici que l'on va avoir le code des différentes commandes qui sont utilisées par le bot
// EN : It's the place where we can find the code of differents commands which are used by the botw
client.on('interactionCreate', async interaction => {


	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
	
	//console.log(interaction);
	console.log(interaction.guild.members.fetch());


	if(client.commands.has(commandName)){
		client.commands.get(commandName).run(client, interaction).catch(console.error);
	}
});

// FR : Connexion à Discord grâce au token de notre client
// EN : Login to Discord with your client's token
client.login(token);