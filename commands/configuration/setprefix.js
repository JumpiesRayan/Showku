const Discord = require('discord.js')
const config = require('../../config.json')
const fs = require('fs')
const serveurConfigue = require('../../serveur.json')

module.exports = { 
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.').then(sent => sent.delete({timeout: 5e3}))
        if (!args[0]) return message.channel.send('Veuillez indiquer le nouveau préfixe du bot.').then(sent => sent.delete({timeout: 5e3}))

        serveurConfigue[message.guild.id] = {
            prefixe: args[0],
            LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
            LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
            LogsMessageEdit: serveurConfigue[message.guild.id].LogsMessageEdit,
            LogsRoleCreate: serveurConfigue[message.guild.id].LogsRoleCreate,
            LogsRoleDelete: serveurConfigue[message.guild.id].LogsRoleDelete,
            ChannelTicket: serveurConfigue[message.guild.id].ChannelTicket,
            TicketPerm: serveurConfigue[message.guild.id].TicketPerm,
            SuggestionChannel: serveurConfigue[message.guild.id].SuggestionChannel
        }
        fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
            if (err) console.log(err)
        })
        message.delete()
        message.channel.send(`Le préfixe à bien été changé pour ${args[0]}`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'set-prefix'
}