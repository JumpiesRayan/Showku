const Discord = require('discord.js')
const replies = ['Oui', 'Non']
const config = require('../../config.json')
    
 
module.exports = {
    run: (message, args) => {

        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(replies[Math.floor(Math.random() * replies.length)])
    
    },
    name: '8ball',
    aliases: '8b',
    cooldown: 3
}