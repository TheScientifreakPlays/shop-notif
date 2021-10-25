const {
    Client,
    Intents,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
    MessageEmbed
  } = require('discord.js');
  const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
    partials: ["CHANNEL"],
    allowedMentions: {
      repliedUser: false
    }
  });
  
  const prefix = "!";
  const channelid = "901775793217228840";
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Your DMS, "+ prefix +" prefix", {
      type: "WATCHING"
    })
    client.user.setStatus("available")
  });
  client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type != "DM") return;
    const userid = message.author.id;
    const commandBody = message.content.slice(prefix.length);
    const command = commandBody.split(" ");
    var command1 = command[0]
    var command2 = command[1]
    var command3 = command[2]
    var finalmessage = "**" + command1 + "** has setup up **" + command2 + "** shop at **" + command3 + "**"
    var send = client.channels.cache.get(channelid).send(finalmessage)
    console.log(send) //enabled to debug incase of error
  })
  
  client.login("OTAyMjExNTU4NTI3MTA3MDkz.YXbH_Q.1McY-ls1geN2oYL6PtT5QwD7dwU");