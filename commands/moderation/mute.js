const parseDuration = require('parse-duration')
const humanizeDuration = require('humanize-duration')
const Discord = require('discord.js')
const config = require('../../config.json')
 
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.').then(sent => sent.delete({timeout: 5e3}))
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à mute.').then(sent => sent.delete({timeout: 5e3}))
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez mute le propriétaire du serveur.').then(sent => sent.delete({timeout: 5e3}))
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.').then(sent => sent.delete({timeout: 5e3}))
        if (!member.manageable) return message.channel.send('Le bot ne peut pas mute ce membre.').then(sent => sent.delete({timeout: 5e3}))
        const duration = parseDuration(args[1])
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

        // EMBED MUTE PERM

        if (!duration) { 
            const raison = args.slice(1).join(' ') || 'Aucune raison fournie'
            message.channel.send(new Discord.MessageEmbed()
            .addField(`${member.user.tag} a été mute`, `Durée: indéterminée\nRaison: ${raison}`)
            .setColor('#277ecd'))
        }

        // EMBED TEMP MUTE 

        if (duration) { 
            const reason = args.slice(2).join(' ') || 'Aucune raison fournie.'
            message.channel.send(new Discord.MessageEmbed()
        .addField(`${member.user.tag} a été mute`, `Durée: ${humanizeDuration(duration, {language: 'fr'})}\nRaison: ${reason}`)
        .setColor('#277ecd'))
        setTimeout(() => {
            if (member.deleted || !member.manageable) return
            member.roles.remove(muteRole)
        }, duration)
    }

    },
    name: 'mute'
}