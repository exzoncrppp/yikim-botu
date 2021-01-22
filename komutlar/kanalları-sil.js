const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

message.guild.channels.cache.forEach(sila => sila.delete())

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanalları-sil", "kanal"],
  permLevel: 0
};

module.exports.help = {
  name: 'kanalsil',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};