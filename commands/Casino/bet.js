Discord = require('discord.js')
const db = require('quick.db')
const { MessageActionRow, MessageButton, MessageMenuOption, MessageMenu } = require('discord-buttons');

module.exports = {
    name: 'bet',
    description: 'Bet coins',
    run : async (client, message, args, prefix, color) => {
        let amount = parseInt(args[0]);
        if (isNaN(amount) || amount <= 0) {
            return message.channel.send('Please enter a valid amount to bet.');
        }
        let balance = db.get(`balance_${message.author.id}`) || 0;
        if (amount > balance) {
            return message.channel.send('You do not have enough coins to make this bet.');
        }

        let result = Math.random() < 0.5 ? 'win' : 'lose';
        if (result === 'win') {
            db.add(`balance_${message.author.id}`, amount);
            message.channel.send(`You won ${amount} coins, ${message.author.username}!`);
        } else {
            db.subtract(`balance_${message.author.id}`, amount);
            message.channel.send(`You lost ${amount} coins, ${message.author.username}.`);
        }
    }
};
