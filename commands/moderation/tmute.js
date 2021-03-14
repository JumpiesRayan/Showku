const parseDuration = require('parse-duration')
const humanizeDuration = require('humanize-duration')
const Discord = require('discord.js')
const config = require('../../config.json')
 
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à mute.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez mute le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')
        if (!member.manageable) return message.channel.send('Le bot ne peut pas mute ce membre.')
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send('Veuillez indiquer une durée valide.')
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie.'
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (!muteRole) {
            muteRole = await message.guild.roles.create({
                data: {
                    name: 'Muted',
                    permissions: 0
                }
            })
            message.guild.channels.cache.forEach(channel => channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false,
                CONNECT: true,
                ADD_REACTIONS: false
            }))
        }
        await member.roles.add(muteRole) 
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
        .addField(`${member.user.tag} a été mute`, `Durée: ${humanizeDuration(duration, {language: 'fr'})}\nRaison: ${reason}`))
        setTimeout(() => {
            if (member.deleted || !member.manageable) return
            member.roles.remove(muteRole)
        }, duration)

        // ---------- | LOGS EXECTIONS DE LA COMMANDES | ------------

        message.guild.channels.cache.get(config.logs_commandes).send(new Discord.MessageEmbed()
        .addField(`Commandes executer`, `> Nom de la commande: tmute\n> Utilisateur: ${message.author.tag}\n> ID de l'utilisateur: ${message.author.id}`))
    },
    name: 'tmute'
}