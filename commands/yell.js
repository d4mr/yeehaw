module.exports = {
    name: 'yell',
    description: 'Yells? What else do you expect?',
    args: 'false',
    execute(message, args) {
        message.channel.send('Yeeeehaww!' + (args?' ':'') +args.join(" "));
    }
}