const Discord = require('discord.js')
const fs = require('fs')
const serveurConfigue = require('../../serveur.json')

module.exports = {
    run: async (message, args) => {

        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer les logs que vous voulez retirer.')

        // REMOVE LOGS MESSAGE DELETE
        if (args[0] == 'deletemsg') {
            if (!serveurConfigue[message.guild.id].LogsMessageDelete) return message.channel.send('Vous n\'avez pas configuré les logs des messages supprimés.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
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
            message.channel.send('Les logs des messages supprimés ont été retirés.')
        }

        // REMOVE LOGS MESSAGE EDIT
        if (args[0] == 'editmsg') {
            if (!serveurConfigue[message.guild.id].LogsMessageEdit) return message.channel.send('Vous n\'avez pas configuré les logs des messages modifiés.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsSanctions: serveurConfigue[message.guild.id].LogsSanctions,
                LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
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
            message.channel.send('Les logs des messages modifiés ont été retirés.')
        }

        // REMOVE LOGS SANCTIONS
        if (args[0] == 'sanctions') {
            if (!serveurConfigue[message.guild.id].LogsSanctions) return message.channel.send('Vous n\'avez pas configuré les logs des sanctions.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
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
            message.channel.send('Les logs des sanctions ont été retirés.')
        }

        //  REMOVE LOGS NEW ROLE
        if (args[0] == 'newrole') {
            if (!serveurConfigue[message.guild.id].LogsSanctions) return message.channel.send('Vous n\'avez pas configuré les logs des nouveaux rôles.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
                LogsMessageEdit: serveurConfigue[message.guild.id].LogsMessageEdit,
                LogsRoleDelete: serveurConfigue[message.guild.id].LogsRoleDelete,
                ChannelTicket: serveurConfigue[message.guild.id].ChannelTicket,
                TicketPerm: serveurConfigue[message.guild.id].TicketPerm,
                SuggestionChannel: serveurConfigue[message.guild.id].SuggestionChannel
            }
            fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
                if (err) console.log(err)
            })
            message.delete()
            message.channel.send('Les logs des nouveaux rôles ont été retirés.')
        }

        // REMOVE LOGS ROLE DELETE
        if (args[0] == 'deleterole') {
            if (!serveurConfigue[message.guild.id].LogsSanctions) return message.channel.send('Vous n\'avez pas configuré les logs des rôles supprimés.')
            serveurConfigue[message.guild.id] = {
                prefixe: serveurConfigue[message.guild.id].prefixe,
                LogsMessageDelete: serveurConfigue[message.guild.id].LogsMessageDelete,
                LogsMessageEdit: serveurConfigue[message.guild.id].LogsMessageEdit,
                LogsRoleCreate: serveurConfigue[message.guild.id].LogsRoleCreate,
                ChannelTicket: serveurConfigue[message.guild.id].ChannelTicket,
                TicketPerm: serveurConfigue[message.guild.id].TicketPerm,
                SuggestionChannel: serveurConfigue[message.guild.id].SuggestionChannel
            }
            fs.writeFile("./serveur.json", JSON.stringify(serveurConfigue), function (err) {
                if (err) console.log(err)
            })
            message.delete()
            message.channel.send('Les logs des rôles supprimés ont été retirés.')
        }
    },
    name: 'remove-logs'
}