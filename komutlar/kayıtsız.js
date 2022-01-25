module.exports = {
  name:"kayıtsız",
  code:`
  $channelSendMessage[$channelID;{author:Üye kayıtsıza atıldı:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üyeye <@&$getServerVar[kayıtsız]> rolü verildi.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $changeNickname[$mentioned[1];$getServerVar[tag] İsim | Yaş]
  $giveRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $takeRoles[$mentioned[1];$getServerVar[erkek];$getServerVar[kız]]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, rolünden üstte veya eşit birini kayıtsıza atamazsın.]
  $onlyIf[$mentioned[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini kayıtsıza atamazsın.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimi kayıtsıza atmalıyım?]
  $onlyForRoles[$getServerVar[kayıthammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
}
