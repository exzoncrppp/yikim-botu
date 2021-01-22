const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

message.guild.roles.cache.forEach(sila => sila.delete())

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-sil", "rol"],
  permLevel: 0
};

module.exports.help = {
  name: 'rolsil',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};