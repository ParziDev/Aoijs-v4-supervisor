module.exports = {
  name:"kız",
  aliases:"k",
  code:`
  $if[$mentioned[1]==]
  $channelSendMessage[$getServerVar[chat];<@$message[1]>{delete:3s}]
  $channelSendMessage[$channelID;{author:Üye kayıt edildi!:$userAvatar[$mentioned[1]]}{description:<@$message[1]> adlı üyeye <@&$getServerVar[kız]> rolleri verildi ve kayıt edildi}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $setUserVar[cinsiyet;kız;$message[1]]
  $setUserVar[kayıtsayı;$sum[1;$getUserVar[kayıtsayı;$authorID]];$authorID]
  $changeNickname[$message[1];$getServerVar[tag] $message[2] | $message[3]]
  $giveRoles[$message[1];$getServerVar[kız]]
  $takeRoles[$message[1];$getServerVar[kayıtsız]]
  $onlyIf[$isNumber[$message[3]]==true;$getServerVar[cross] <@$authorID>, Üyenin yaşını gir.]
  $onlyIf[$message[3]!=;$getServerVar[cross] <@$authorID>, Üyenin yaşını gir.]
  $onlyIf[$message[2]!=;$getServerVar[cross] <@$authorID>, Üyenin ismini gir.]
  $onlyIf[$hasRole[$message[1];$getServerVar[kız]]==false;$getServerVar[cross] <@$authorID>, Üye zaten kayıtlı.]
  $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir üye yok.]
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Kimi kayıt etmeliyim?]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kimi kayıt etmeliyim?]
  $else
  $channelSendMessage[$getServerVar[chat];<@$mentioned[1]>{delete:3s}]
  $channelSendMessage[$channelID;{author:Üye kayıt edildi!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üyeye <@&$getServerVar[kız]> rolleri verildi ve kayıt edildi!}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $setUserVar[cinsiyet;kız;$mentioned[1]]
  $setUserVar[kayıtsayı;$sum[1;$getUserVar[kayıtsayı;$authorID]];$authorID]
  $changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  $giveRoles[$mentioned[1];$getServerVar[kız]]
  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $onlyIf[$isNumber[$noMentionMessage[2]]==true;$getServerVar[cross] <@$authorID>, Üyenin yaşını gir.]
  $onlyIf[$noMentionMessage[2]!=;$getServerVar[cross] <@$authorID>, Üyenin yaşını gir.]
  $onlyIf[$noMentionMessage[1]!=;$getServerVar[cross] <@$authorID>, Üyenin adını gir.]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[kız]]==false;$getServerVar[cross] <@$authorID>, Üye zaten kayıtlı.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimi kayıt etmeliyim?]
  $endif
  $onlyForRoles[$getServerVar[kayıthammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
}
