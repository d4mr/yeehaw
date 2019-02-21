const treasury = require('./../utils/treasury');

module.exports = {
    name: 'wallet',
    description: 'THE BEST WALLET. PERIOD',
    args: 'false',
    execute(message, args) {
        if(!args) message.reply("currently has " + treasury.getUser(message.author.id) + " :poo:");
        else if (args.len === 3 && args[0]=='give') {
            let receiver;
            try {
                receiver = message.mentions.users.first().id;
            } catch (error) {
                return message.reply('no receiver found honey. FORMAT IT RIGHT THIS TIME!');
            }
            let amt = args[2];
            if (typeof amt != 'number') {
                return message.reply('amount has to be a number honey. FORMAT IT RIGHT THIS TIME!');
            }

            treasury.giveTo(amt, message.author.id, receiver);
            return message.reply('Sent ' + amt + ' :poo to <@' + receiver + '>.');            
        }
    }
}