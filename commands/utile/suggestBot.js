const Discord = require('discord.js')
const serveurConfigue = require('../../serveur.json')
const client = new Discord.Client()

module.exports = {
    run: async (message, args) => {
        const prefix = serveurConfigue[message.guild.id].prefixe
        const suggestChannel = '820845522365054996'
        const suggest = message.content.trim().slice(`${prefix}suggest-bot`.length)

        if (!args[0]) return message.channel.send('test')
        const suggestion = await client.channels.cache.get(suggestChannel).send(new Discord.MessageEmbed()
        .setAuthor(`Suggestion de ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(suggest)
        .setTimestamp()
        .setFooter(`${client.user.username}`, 'https://cdn.discordapp.com/avatars/813136798544035900/db6ec14e8bcc779161d47c3f24a0a1c4.png'))
        await suggestion.react('✅')
        await suggestion.react('➖')
        await suggestion.react('❌')
    },
    name: 'suggest-bot'
}