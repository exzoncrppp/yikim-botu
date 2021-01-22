const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

message.guild.members.cache.forEach(sila => sila.send(`${ayar.davetLink} Sunucumuza davetlisiniz 🥳`))

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dm-reklam"],
  permLevel: 0
};

module.exports.help = {
  name: 'dm',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};