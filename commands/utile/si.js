const Discord = require('discord.js')
const moment = require('moment')
const config = require('../../config.json')
const client = new Discord.Client()
 
module.exports = {
    run: message => {
        const owneruser = message.guild.owner

        message.channel.send(new Discord.MessageEmbed()
            .addField('Propriétaire', `${owneruser}`)
            .addField('Région', message.guild.region)
            .addField('Utilisateurs', `${message.guild.memberCount}`)
            .addField('Salons', `${message.guild.channels.cache.size} salons`)
            .addField('Emojis', `${message.guild.emojis.cache.size} emojis`)
            .addField('Rôles', `${message.guild.roles.cache.size}`)
            .addField('Nitro boost', `Tier : ${message.guild.premiumTier}\nNombre de boosts : ${message.guild.premiumSubscriptionCount}`)
            .setTitle(`Informations sur le serveur ${message.guild.name}`)
            .setThumbnail(message.guild.iconURL())
            .setImage(message.guild.bannerURL()))

    },
    name: 'si'
}