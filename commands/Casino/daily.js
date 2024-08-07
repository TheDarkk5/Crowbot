Discord = require('discord.js')
const db = require('quick.db')
const { MessageActionRow, MessageButton, MessageMenuOption, MessageMenu } = require('discord-buttons');

module.exports = {
    name: 'daily',
    description: 'Claim your daily coins',
    slashCommand: {
    enabled: true,
    },
    run : async(client, message, args, prefix, color) => {
        let cooldown = db.get(`daily_${message.author.id}`);
        if (cooldown && Date.now() - cooldown < 86400000) {
            message.channel.send('You have already collected your daily coins. Come back later!');
        } else {
            db.set(`daily_${message.author.id}`, Date.now());
            db.add(`balance_${message.author.id}`, 100);
            message.channel.send(`You received your daily 100 coins, ${message.author.username}!`);
        }
    }
};
