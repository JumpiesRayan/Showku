const Discord = require('discord.js')
const serveurConfigue = require('../../serveur.json')

module.exports = {
    run: async (message, args, client) => {
        const prefix = serveurConfigue[message.guild.id].prefixe
        const suggestChannel = serveurConfigue[message.guild.id].SuggestionChannel
        const suggest = message.content.trim().slice(`${prefix}suggest`.length)
        const serveurIcon = message.guild.iconURL()

        if (!suggestChannel) return message.channel.send(`La commande \`suggest\` est désactivée sur ce serveur.`)
        if (!args[0]) return message.channel.send('Veuillez indiquer votre suggestion.').then(sent => sent.delete({timeout: 5e3}))
        message.delete()
        message.channel.send('Votre suggestion a bien été envoyé.').then(sent => sent.delete({timeout: 5e3}))
        const sent = await client.channels.cache.get(suggestChannel).send(new Discord.MessageEmbed()
        .setAuthor(`Suggestion de ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(suggest)
        .setColor('#843da4')
        .setTimestamp()
        .setFooter(`${message.guild.name}`, serveurIcon))
        await sent.react('✅')
        await sent.react('➖')
        await sent.react('❌')
    },
    name: 'suggest'
}