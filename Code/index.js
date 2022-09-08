// Ajout des de la classe discord.js dans mon répertoire + de mon token dans mon fichier config.json
const { Client, GatewayIntentBits } = require('../Discord/node_modules/discord.js');
const { token } = require("../Config/config.json");

// Créer une nouvelle instance de client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Une fois que le client est prêt, le code ci-dessous va être exécuté (une seule fois)
client.once('ready',() => {
    console.log("Je suis prêt !");
});

// Connexion à Discord grâce au token de notre client
client.login(token);