const treasury = require('./../utils/treasury');

module.exports = {
    name: 'wallet',
    description: 'THE BEST WALLET. PERIOD',
    args: 'false',
    execute(message, args) {
        console.log(args);
        if(!args.length) message.reply("currently has " + treasury.getUser(message.author.id) + " :poo:");
        else if (args.length === 3 && args[0]=='give') {
            let receiver;
            try {
                receiver = message.mentions.users.first().id;
            } catch (error) {
                return message.reply('no receiver found honey. FORMAT IT RIGHT THIS TIME!');
            }
            let amt = parseInt(args[2]);
            if (amt != amt) {
                return message.reply('amount has to be a number honey. FORMAT IT RIGHT THIS TIME!');
            }

            treasury.giveTo(amt, message.author.id, receiver);
            return message.reply('Sent ' + amt + ' :poo: to <@' + receiver + '>.');            
        }
        else if (args.length == 1 && message.mentions.users.first()) {
            return message.channel.send('<@'+ message.mentions.users.first().id + ">'s balance is " + treasury.getUser(message.mentions.users.first().id) + ' :poo:.');                        
        }
    }
}