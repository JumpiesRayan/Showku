const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        let avatar = member.user.displayAvatarURL({size: 4096, dynamic: true})
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Voici la photo de profil a **${member.user.username}**`)
            .setColor('#f8f8f9')
            .setImage(avatar))

    },
    name: 'avatar',
}