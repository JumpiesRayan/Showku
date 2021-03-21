const config = require('../../config.json')
const Discord = require('discord.js')
const replies = ['https://cdn.discordapp.com/attachments/797620792694145134/812771226849116270/1565581043_toradora_kiaa.gif', 'https://cdn.discordapp.com/attachments/797620792694145134/812771293048340581/source.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821950050594193457/cc1d6acf759710d1f6f093788e535ebb.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821950050158510090/original.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821950049884962836/AgedWhisperedBarnacle-small.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821950049486635018/66191b81d5bf6c70bd065736f3e8662b.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821950049163935764/5c5b936f5468b607ba9c6a7e3de282b5.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821948204777734154/f6016f9ddfada1166bac14cf9a9089a2.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821948204433145917/176877107000202.gif', 'https://cdn.discordapp.com/attachments/821948154646626374/821948204161040414/tumblr_bcf221cd2b3c18ac1bb32ec93b09652a_6afceb2f_500.gif']
const bot = new Discord.Client()

module.exports = {
    run: (message, args) => {
        const kissuser = args.join(' ')
        const member = message.mentions.members.first()
        if (!kissuser) return message.channel.send((new Discord.MessageEmbed)
        .setDescription(`<:kiss:821950572667469906> **${message.author.username}** embrasse **Showku** <:kiss:821950572667469906>`)
        .setImage(replies[Math.floor(Math.random() * replies.length)])
        .setColor('#f8f8f9'))
        message.channel.send((new Discord.MessageEmbed)
        .setDescription(`<:kiss:821950572667469906> **${message.author.username}** donne un câlin à **${member.user.username}** <:kiss:821950572667469906>`)
        .setImage(replies[Math.floor(Math.random() * replies.length)])
        .setColor('#f8f8f9'))

    },
    name: 'kiss',
    cooldown: 3
}