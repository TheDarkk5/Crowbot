const db = require('quick.db');

module.exports = {
    name: 'balance',
    description: 'Check your balance',
    async execute(client, message, args) {
        let balance = db.get(`balance_${message.author.id}`) || 0;
        message.channel.send(`${message.author.username}, you have ${balance} coins.`);
    }
};

