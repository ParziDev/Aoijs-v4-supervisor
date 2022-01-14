module.exports = {
  name:"isim",
  aliases:["i","nick"],
  code:`
  $channelSendMessage[$channelID;{author:Üyenin ismi değiştirildi!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üyenin nicki **$nickname[$mentioned[1]]** olarak ayarlandı.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  $onlyIf[$isNumber[$noMentionMessage[2]]==true;$getServerVar[cross] Üyenin yaşını gir.]
  $onlyIf[$noMentionMessage[2]!=;$getServerVar[cross] Üyenin yaşını gir.]
  $onlyIf[$noMentionMessage[1]!=;$getServerVar[cross] <@$author Üyenin ismini gir.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte birinin ismini değiştiremezsin.]
  $onlyIf[$mentioned[1]!=$authorID;$getServerVar[cross] <@$authorID>, kendi ismini değiştiremezsin.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimin ismini değiştirmeliyim?]
  $onlyIf[$hasRole[$authorID;$getServerVar[kayıthammer]]==true;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
}
