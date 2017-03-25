const commando = require('discord.js-commando');

class InviteCommand extends commando.Command{
    constructor(client)   {
        super(client, {
                name: 'invite',
                group: 'misc',
                memberName: 'invite',
                description: 'Sends An Invite To You To Share!',
                examples: [ 'invite'  ]
        })
    }

async run(message, args) {
    

    }
}

module.exports = InviteCommand;
