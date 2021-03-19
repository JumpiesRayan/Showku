const serveurConfigue = require('../../serveur.json')
const Discord = require ('discord.js')

module.exports = {
    run: (message, args) => {
        const prefix = serveurConfigue[message.guild.id].prefixe
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        message.channel.send(message.content.trim().slice(`${prefix}say`.length))

    },
    name: 'say', 
}