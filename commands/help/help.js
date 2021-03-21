const Discord = require('discord.js')
const serveurConfigue = require('../../serveur.json')

module.exports = {
    run: async (message, args) => {
        const prefix = serveurConfigue[message.guild.id].prefixe
        if (!args[0]) { message.channel.send(new Discord.MessageEmbed() 
            .setTitle('Voici la liste des commandes')
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <catégorie>\` pour voir la liste des commandes d'une catégorie.\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`)
            .addField(`> 🛠️  configuration`, `Les commandes pour configurer le bot`)
            .addField(`> ⚔️  aventure`, `Les commandes d'aventure`)
            .addField(`> 🎈  fun`, `Les commandes faites pour s'ammuser`)
            .addField(`> 🎉  giveaway`, `Les commandes de giveaway`)
            .addField(`> 💡  sondage`, `Les commandes de suggestion`)
            .addField(`> 🏹  staff`, `Les commandes pour le staff`)
            .addField(`> 🎟️  tickets`, `Les commandes de ticket`)
            .addField(`> 🔍  utiles`, `Les commandes utiles`))
        }

        // help configuration
        if (args[0] == 'configuration') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie configuration`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`)
            .addField(`> set-prefix`, `Changer le préfixe du bot`)
            .addField(`> set-logs`, `Mettre des logs dans votre serveur`)
            .addField(`> remove-logs`, `Retirer les logs que vous avez ajouter avec le bot`)
            .addField(`> set-suggestion`, `Mettre un système de suggestion dans votre serveur`)
            .addField(`> set-ticket`, `Mettre un système de ticket dans votre serveur`))
        }

        // help aventure
        if (args[0] == 'aventure') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie aventure`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`))
        }

        // help fun
        if (args[0] == 'fun') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie fun`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`)
            .addField(`> 8ball`, `Posez des questions qui se répondent par oui ou par non.`)
            .addField(`> server-icon`, `Fait apparaître l'icon du serveur`)
            .addField(`> avatar`, `Fait apparaître votre avatar ou celui de la personne mentionnée`)
            .addField(`> cry`, `Pleurez seul`)
            .addField(`> feed`, `Donnez à manger à Showku ou à l'utilisateur mentionné`)
            .addField(`> hug`, `Donnez un câlin à Showku ou à l'utilisateur mentionné`)
            .addField(`> kiss`, `Embrassez Showku ou l'utilisateur mentionné`)
            .addField(`> slap`, `Donnez une claque à Showku ou à l'utilisateur mentionné`)
            .addField(`> say`, `Faire parler Showku`))
        }

        // help giveaway
        if (args[0] == 'giveaway') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie giveaway`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`))
        }

        // help sondage
        if (args[0] == 'sondage') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie sondage`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`))
        }

        // help staff
        if (args[0] == 'staff') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie staff`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`)
            .addField(``, ``)
            .addField(``, ``)
            .addField(``, ``)
            .addField(``, ``)
            .addField(``, ``)
            .addField(``, ``))
        }

        // help ticket
        if (args[0] == 'ticket') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie ticket`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`))
        }

        // help utile
        if (args[0] == 'utiles') {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Liste des commandes de la catégorie utiles`)
            .setDescription(`**Les symboles <> ne doivent pas être utilisés lorsque que vous faites une commande.**\n\n\`${prefix}help <commande>\` pour plus d'informations  sur une commande.`))
        }
    },
    name: 'help'
}