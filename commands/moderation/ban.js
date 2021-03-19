const Discord = require('discord.js')
const config = require('../../config.json')
const parseDuration = require('parse-duration')
const humanizeDuration = require('humanize-duration')
 
module.exports = { 
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à bannir.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas Bannir ce membre.')
        if (!member.bannable) return message.channel.send('Le bot ne peut pas bannir ce membre.')
        const duration = parseDuration(args[1])
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.delete()

        // EMBED BAN PERM

        if (!duration) { message.channel.send(new Discord.MessageEmbed()
        .addField(`${member.user.tag} a été ban`, `Durée: indéterminée\nRaison: ${reason}`)
        .setColor('#8E0B02'))
        }

        // EMBED TEMP BAN

        if (duration) { message.channel.send(new Discord.MessageEmbed()
        .addField(`${member.user.tag} a été ban`, `Durée: ${humanizeDuration(duration, {language: 'fr'})}\nRaison: ${reason}`)
        .setColor('#8E0B02'))
        setTimeout(() => {
            message.guild.members.unban(member)
        }, duration)
    }

    },
    name: 'ban'
}