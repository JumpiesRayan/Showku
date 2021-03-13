// ---------- | CONFIGURATION | ------------

const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs')
const client = new Discord.Client()


client.login(config.token)

// ---------- | EXECUTION D'UNE COMMANDE | ------------

client.commands = new Discord.Collection
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// ---------- | STATUT DU BOT | ------------

client.on('ready', () => {
    console.log(`${client.user.username} est ON`)
})