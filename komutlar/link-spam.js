const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

  for (var i = 0; i < 250; i++) {
    message.channel.send(ayar.davetLink)
  }
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["spam"],
  permLevel: 0
};

module.exports.help = {
  name: 'spam',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};