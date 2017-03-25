const commando = require('discord.js-commando')
const bot = new commando.Client({
owner: '201825529333153792',
commandPrefix: '+'
});


bot.registry.registerGroup('random', 'random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('PRIVATE');
