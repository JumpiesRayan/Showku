const Discord = require('discord.js')
const moment = require('moment')
const config = require('../../config.json')
 
module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        
        message.channel.send(new Discord.MessageEmbed()
            .addField('Membre', member)
            .addField('Tag', member.user.tag)
            .addField('ID', `${member.id}`)
            .addField('Date de création du compte', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
            .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
            .setTitle(`Informations sur ${member.user.username}`)
            .setThumbnail(member.user.displayAvatarURL())
            .setColor('#f8f8f9')
            .setTimestamp()
            .setFooter(`Showku`, 'https://cdn.discordapp.com/avatars/813136798544035900/db6ec14e8bcc779161d47c3f24a0a1c4.png'))

    },
    name: 'ui'
}