const commando = require('discord.js-commando')
const bot = new commando.Client({
owner: '201825529333153792',
commandPrefix: '+'
});
bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  // if the message is "what is my avatar",
  if (message.content === 'what is my avatar') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

bot.on('message', message => {
  // if the message is "+invite",
  if (message.content === '+invite') {
    // send the invite link 
    message.reply(" Here it is! https://discord.gg/aDpcxd4 Share with all friends!");
  }
});


bot.registry.registerGroup('random', 'random');
bot.registry.registerGroup('misc', 'misc');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('PRIVATE');
