const Discord = require('discord.js')
const fs = require('fs')
const serveurConfigue = require('../../serveur.json')

module.exports = {
    run: async (message, args) => {

        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer les logs que vous voulez ajouter.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])

        // LOGS MESSAGE SUPPRIMER
        if (args[0] == 'deletemsg') {
            if (!channel) return message.channel.send('Veuillez indiquer l\'ID du salon pour les logs des messages supprimés.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
                LogsMessageDelete: channel.id,
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
            message.channel.send(`Les logs des messages supprimés ont bien été configuré dans le salon ${channel}.`)
        }

        // LOGS MESSAGE MODIFIER
        if (args[0] == 'editmsg') {
            if (!channel) return message.channel.send('Veuillez indiquer l\'ID du salon pour les logs des messages modifiés.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
                LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
                LogsMessageEdit: channel.id,
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
            message.channel.send(`Les logs des messages modifiés ont bien été configuré dams le salon ${channel}.`)
        }

        // LOGS SANCTIONS 
        if (args[0] == 'sanctions') {
            if (!channel) return message.channel.send('Veuillez indiquer l\'ID du salon pour les logs des sanctions.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: channel.id,
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
            message.channel.send(`Les logs des sanctions ont bien été configuré dans le salon ${channel}.`)
        }
        // LOGS ROLE CREATE
        if (args[0] == 'newrole') {
            if (!channel) return message.channel.send('Veuillez indiquer l\'ID du salon pour les logs des nouveaux rôles.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
                LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
                LogsMessageEdit: serveurConfigue[message.guild.id].LogsMessageEdit,
                LogsRoleCreate: channel.id,
                LogsRoleDelete: serveurConfigue[message.guild.id].LogsRoleDelete,
                ChannelTicket: serveurConfigue[message.guild.id].ChannelTicket,
                TicketPerm: serveurConfigue[message.guild.id].TicketPerm,
                SuggestionChannel: serveurConfigue[message.guild.id].SuggestionChannel
            }
            fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
                if (err) console.log(err)
            })
            message.delete()
            message.channel.send(`Les logs des nouveaux rôles ont bien été configuré dans le salon ${channel}.`)
        }

        // LOGS ROLE DELETE
        if (args[0] == 'deleterole') {
            if (!channel) return message.channel.send('Veuillez indiquer l\'ID du salon pour les logs des rôles supprimés.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
                LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
                LogsMessageEdit: serveurConfigue[message.guild.id].LogsMessageEdit,
                LogsRoleCreate: serveurConfigue[message.guild.id].LogsRoleCreate,
                LogsRoleDelete: channel.id,
                ChannelTicket: serveurConfigue[message.guild.id].ChannelTicket,
                TicketPerm: serveurConfigue[message.guild.id].TicketPerm,
                SuggestionChannel: serveurConfigue[message.guild.id].SuggestionChannel
            }
            fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
                if (err) console.log(err)
            })
            message.delete()
            message.channel.send(`Les logs des rôles supprimés ont bien été configuré dans le salon ${channel}.`)
        }
    },
    name: 'set-logs'
}