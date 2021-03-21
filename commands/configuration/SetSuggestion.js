const Discord = require('discord.js')
const serveurConfigue = require('../../serveur.json')
const fs = require('fs')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.').then(sent => sent.delete({timeout: 5e3}))
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if (!channel) return message.channel.send('Veuillez indiquer l\'ID du channel pour les suggestions.').then(sent => sent.delete({timeout: 5e3}))

        serveurConfigue[message.guild.id] = {
            prefixe: serveurConfigue[message.guild.id].prefixe,
            LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
            LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
            LogsMessageEdit: serveurConfigue[message.guild.id].LogsMessageEdit,
            LogsRoleCreate: serveurConfigue[message.guild.id].LogsRoleCreate,
            LogsRoleDelete: serveurConfigue[message.guild.id].LogsRoleDelete,
            ChannelTicket: serveurConfigue[message.guild.id].ChannelTicket,
            TicketPerm: serveurConfigue[message.guild.id].TicketPerm,
            SuggestionChannel: channel.id
        }
        fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
            if (err) console.log(err)
        })
        message.channel.send(`Le salon de suggestions à bien été configuré dans le salon ${channel}`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'set-suggestion'
}