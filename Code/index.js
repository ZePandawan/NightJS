// FR : Ajout de la classe discord.js dans mon répertoire + de mon token dans mon fichier config.json
// EN : Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require("../Config/config.json");

// FR : Créer une nouvelle instance de client
// EN : Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// FR : Une fois que le client est prêt, le code ci-dessous va être exécuté (une seule fois)
// EN : When the client is ready, run this code (only once)
client.once('ready',() => {
    console.log("Je suis prêt !");
});

// FR : C'est ici que l'on va avoir le code des différentes commandes qui sont utilisées par le bot
// EN : It's the place where we can find the code of differents commands which are used by the botw
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'test') {
		await interaction.reply('Hello World!');
	}else if(commandName === 'test2'){
        await interaction.reply(`Hello World! ${interaction.options.getString('input')}`)
    }
});

// FR : Connexion à Discord grâce au token de notre client
// EN : Login to Discord with your client's token
client.login(token);