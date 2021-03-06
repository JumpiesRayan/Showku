const Discord = require('discord.js')
const config = require('../../config.json')
 
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.').then(sent => sent.delete({timeout: 5e3}))
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à exclure.').then(sent => sent.delete({timeout: 5e3}))
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure le propriétaire du serveur.').then(sent => sent.delete({timeout: 5e3}))
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure ce membre.').then(sent => sent.delete({timeout: 5e3}))
        if (!member.kickable) return message.channel.send('Le bot ne peut pas exclure ce membre.').then(sent => sent.delete({timeout: 5e3}))
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.delete()
        message.channel.send((new Discord.MessageEmbed)
        .addField(`${member.user.tag} a été kick`, `Raison: ${reason}`)
        .setColor('#277ecd'))

    },
    name: 'kick'
}