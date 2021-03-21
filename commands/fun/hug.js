const config = require('../../config.json')
const Discord = require('discord.js')
const replies = ['https://cdn.discordapp.com/attachments/797620792694145134/812768604616392764/r9aU2xv.gif', 'https://cdn.discordapp.com/attachments/797620792694145134/812768595381714984/8572a1d1ebaa45fae290e6760b59caac.gif', 'https://cdn.discordapp.com/attachments/797620792694145134/812768582605602866/anime-hug.gif', 'https://cdn.discordapp.com/attachments/821946001295671326/821947057447239750/rkx1dJ25z.gif', 'https://cdn.discordapp.com/attachments/821946001295671326/821946642101305374/HkfgF_QvW.gif', 'https://cdn.discordapp.com/attachments/821946001295671326/821946054173392946/giphy.gif', 'https://cdn.discordapp.com/attachments/821946001295671326/821946053762875402/XEs1SWQ.gif', 'https://cdn.discordapp.com/attachments/821946001295671326/821946053321293824/giphy_1.gif', 'https://cdn.discordapp.com/attachments/821946001295671326/821946052357128202/530c52de04fa1a28a4bb173756a3b52b.gif']
const bot = new Discord.Client()

module.exports = {
    run: (message, args) => {
        const huguser = args.join(' ')
        const member = message.mentions.members.first()
        if (!huguser) return message.channel.send((new Discord.MessageEmbed)
        .setDescription(`<:hug:821950516170326046> **${message.author.username}** donne un câlin à **Showku** <:hug:821950516170326046>`)
        .setImage(replies[Math.floor(Math.random() * replies.length)])
        .setColor('#f8f8f9'))
        message.channel.send((new Discord.MessageEmbed)
        .setDescription(`<:hug:821950516170326046> **${message.author.username}** donne un câlin à **${member.user.username}** <:hug:821950516170326046>`)
        .setImage(replies[Math.floor(Math.random() * replies.length)])
        .setColor('#f8f8f9'))

    },
    name: 'hug',
    cooldown: 3
}