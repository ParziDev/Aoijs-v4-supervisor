module.exports = {
  name:"say",
  code:`
***Sunucumuzda \`$membersCount\` üye bulunmakta.
Sunucumuzda \`$math[$membersCount-$membersCount[$guildID;offline]]\` çevrimiçi üye bulunmakta.
Sunucumuzda \`$roleMembersCount[$getServerVar[tagrol]]\` taglı bulunmakta.
Sunucumuzda \`$serverBoostCount\` takviye bulunmakta.***
$djsEval[
  function sesSay() {
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;

for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

return count;
}
message.channel.send("***Sesli kanallarda toplam \`" + sesSay() + "\` üye bulunuyor.***")] 

  `
}
