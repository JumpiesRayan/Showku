// ---------- | CONFIGURATION | ------------

const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs')
const profileFile = require('./profile.json')
const client = new Discord.Client({fetchAllMembers: true, partials: ['MESSAGE', 'REACTION']})


client.login(config.token)
client.commands = new Discord.Collection()
const commandFolders = fs.readdirSync('./commands')

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// ---------- | EXECUTION DES COMMANDES | ------------

client.on('message', message => {
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

// ---------- | STATUT DU BOT + CONSOLE.LOG BOT ON | ------------

client.on('ready', () => {
    const statuses = [
        () => `En développement`,
        () => `Développé par JumpiesRayan#7454`,
        () => `Beta`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {
            type: 'PLAYING'
        })
        i = ++i % statuses.length
    }, 1e3)
    console.log(`${client.user.tag} est ON !`)
})

 // ---------- | MUTE ROLE | ------------

 client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: true,
        ADD_REACTIONS: false
    })
})