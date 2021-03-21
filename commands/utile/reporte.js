const Discord = require('discord.js')
const serveurConfigue = require('../../serveur.json')

module.exports = {
    run: async (message, args) => {
        const reporteChannel = '820937233237409822'
        const prefix = serveurConfigue[message.guild.id].prefixe
        const bugReporte = (message.content.trim().slice(`${prefix}reporte`.length))
        if (!args[0]) return message.channel.send('Veuillez indiquer le bug que vous voulez reporte.').then(sent => sent.delete({timeout: 5e3}))
        message.delete()
        message.channel.send('Votre bug à bien été reporte. Le staff vous remercie de votre aide et de votre honnêteté.').then(sent => sent.delete({timeout: 5e3}))
        message.guild.channels.cache.get(reporteChannel).send(new Discord.MessageEmbed()
        .setTitle('Nouveau bug reporte')
        .setDescription(`> Bug reporte par : ${message.author.tag} (\`${message.author.id}\`)\n> ──────────────────────────\n> Bug reporte : ${bugReporte}`)
        .setColor('#843da4'))
    },
    name: 'reporte'
}