const Discord = require('discord.js')
const config = require('../../config.json')
const fs = require('fs')
const profileFile = require('../../profile.json')

module.exports = {
    run: (message) => {

        const member = message.mentions.members.first() || message.author

        if (!profileFile[member.id]) return message.channel.send('Ce joueur n\'a pas commencer d\'aventure.')

        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Voici le profile a ${member.username}`)
        .addField(`Pseudo:`, `${member.username}`)
        .addField(`Tâche sacré:`, profileFile[member.id].tacheSacrer)
        .addField(`Competence:`, `Arme principale: ${profileFile[member.id].armePrincipale}\nArme secondaire: ${profileFile[member.id].armeSecondaire}\nLevel: ${profileFile[member.id].level}\nExp: ${profileFile[member.id].exp}`)
        .addField(`Argent:`, profileFile[member.id].money)
        .addField(`Chapitre:`, profileFile[member.id].chapitre)
        .setThumbnail(member.displayAvatarURL()))
    },
    name: 'profile'
}