// ---------- | CONFIGURATION | ------------

const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs')
const profileFile = require('./profile.json')
const serveurConfigue = require('./serveur.json')
const client = new Discord.Client({fetchAllMembers: true, partials: ['MESSAGE', 'REACTION']})


client.login(config.token)
client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()
const commandFolders = fs.readdirSync('./commands')


for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`)
		client.commands.set(command.name, command)
	}
}

// --------------- | CONFIGUE DE BASE | ------------------

client.on("message", async (message) => {
    if (message.channel.type === "dm") return client.emit("directMessage", message)
    if (!serveurConfigue[message.guild.id]) {
        serveurConfigue[message.guild.id] = {
            prefixe: config.prefix
        }
        fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
            if (err) console.log(err)
        })
    } 

// ---------- | EXECUTION DES COMMANDES | ------------

    const prefix = serveurConfigue[message.guild.id].prefixe
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(prefix)) return
    const command = client.commands.get(commandName.slice(prefix.length))
    if (!command) return

    // ============ COOLDOWNS ==============
     
    const { cooldowns } = client

    if (!cooldowns.has(command.name)) {
	    cooldowns.set(command.name, new Discord.Collection())
    }

    const now = Date.now()
    const timestamps = cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 3) * 1000

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.channel.send(`${message.author.username}, merci de patienter ${timeLeft.toFixed(1)} secondes avant d'utiliser cette commande.`)
        }
    }
    timestamps.set(message.author.id, now)
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

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

// ---------- | SUIVI DES SERVEURS | ------------

  // ======== | NOUVEAU SERVEUR | =======
    client.on('guildCreate', (guild) => {
        const logsChannel = '820936220325969920'
        const owneruser = guild.owner
        client.channels.cache.get(logsChannel).send(new Discord.MessageEmbed()
        .setTitle('Nouveau serveur')
        .setDescription(`Nom du serveur : ${guild.name}\nID du serveur : ${guild.id}\n\n**Statistiques du serveur**\nNombre d'utilisateurs : ${guild.memberCount}\nNombre de salons : ${guild.channels.cache.size}\nNombre de rôles : ${guild.roles.cache.size}\n\n**Info sur le créateur du serveur**\nPseudo du créateur : ${owneruser.user.username}\nID du créateur : ${owneruser.id}`))
    })

  // ======== |  ANCIEN SERVEUR | =======
  client.on('guildDelete', (guild) => {
      const logsChannel = '820936220325969920'
      const owneruser = guild.owner
      client.channels.cache.get(logsChannel).send(new Discord.MessageEmbed()
      .setTitle('Ancien serveur')
      .setDescription(`Nom du serveur : ${guild.name}\nID du serveur : ${guild.id}\n\n**Info sur le créateur du serveur**\nPseudo du créateur : ${owneruser.user.username}\nID du créateur : ${owneruser.id}`))
  })
    
 // ---------- | LOGS MULTI-SERVEUR | ------------

 // MessageDelete
 /*client.on('messageDelete', async (message, guild) => {
     const LogsMsgDelete = serveurConfigue[message.guild.id].LogsMessageDelete
     message.guild.channels.cache.get(LogsMsgDelete).send(new Discord.MessageEmbed()
        .addField(`Message supprimer`, `> Message envoyer par: ${message.author}\n> Salon: ${guild.channel}\n> Message supprimer: ${guild.message.content}`))
 })*/
 // MessageEdit
 // Sanctions
