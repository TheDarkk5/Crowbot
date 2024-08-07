const Discord = require('discord.js')
const db = require('quick.db')
const { MessageActionRow, MessageButton, MessageMenuOption, MessageMenu } = require('discord-buttons');

module.exports = {
    name: 'balance',
    description: 'Check your balance',
    run : async (client, message, args, prefix, color) => {
        let balance = db.get(`balance_${message.author.id}`) || 0;
        message.channel.send(`${message.author.username}, you have ${balance} coins.`);
    }
};

