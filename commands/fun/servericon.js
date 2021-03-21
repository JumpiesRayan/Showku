const Discord = require('discord.js')

module.exports = {
    run: async (message) => {
        if (!message.guild.iconURL()) return message.channel.send(`Le serveur n'a pas d'icon.`)
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Voici l'icon du serveur **${message.guild.name}**`)
        .setColor('#f8f8f9')
        .setImage(message.guild.iconURL({size: 4096})))
    },
    name: 'server-icon'
}