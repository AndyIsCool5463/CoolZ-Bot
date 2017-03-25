const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client)   {
        super(client, {
                name: 'roll',
                group: 'misc',
                memberName: 'roll',
                description: 'Rolls A Dick',
                examples: [ 'Roll'  ]
        })
    }

async run(message, args) {
    var roll = Math.floor(Math.random() * 6) + 1;
    message.reply("You Rolled A " + roll);

    }
}

module.exports = DiceRollCommand;
