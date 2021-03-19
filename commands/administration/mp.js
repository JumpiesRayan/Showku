/*const Discord = require('discord.js')
const serveurConfigue = require('../../serveur.json')

module.exports = {
    run: async (message, args, client) => {
        const prefix = serveurConfigue[message.guild.id].prefixe
        const admin = '692592271794634792'
        if (!admin) return
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.channel.send('Veuillez mentionner ou indiquer l\'ID du joueur que vous voulez mp.')
        if (!args[1]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        member.createDM().then(channel => {
            message.channel.send(message.content.trim().slice(`${prefix}mp ${member}`.length))
        })
    },
    name: 'mp'
}*/