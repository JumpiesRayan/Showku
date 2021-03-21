const Discord = require('discord.js')
const config = require('../../config.json')
const parseDuration = require('parse-duration')
const humanizeDuration = require('humanize-duration')
 
module.exports = { 
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.').then(sent => sent.delete({timeout: 5e3}))
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à bannir.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.').then(sent => sent.delete({timeout: 5e3}))
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir ce membre.').then(sent => sent.delete({timeout: 5e3}))
        if (!member.bannable) return message.channel.send('Le bot ne peut pas bannir ce membre.').then(sent => sent.delete({timeout: 5e3}))
        const duration = parseDuration(args[1])
        await member.ban({reason})
        message.delete()

        // EMBED BAN PERM

        if (!duration) { 
            const raison = args.slice(1).join(' ') || 'Aucune raison fournie'
            message.channel.send(new Discord.MessageEmbed()
        .addField(`${member.user.tag} a été ban`, `Durée: indéterminée\nRaison: ${raison}`)
        .setColor('#277ecd'))
        }

        // EMBED TEMP BAN

        if (duration) { 
            const reason = args.slice(2).join(' ') || 'Aucune raison fournie'
            message.channel.send(new Discord.MessageEmbed()
        .addField(`${member.user.tag} a été ban`, `Durée: ${humanizeDuration(duration, {language: 'fr'})}\nRaison: ${reason}`)
        .setColor('#277ecd'))
        setTimeout(() => {
            message.guild.members.unban(member)
        }, duration)
    }

    },
    name: 'ban'
}