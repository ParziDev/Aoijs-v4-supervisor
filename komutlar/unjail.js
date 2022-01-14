module.exports = {
  name:"unjail",
  code:`
  $if[$getUserVar[cinsiyet;$mentioned[1]]==erkek]
  $setRoles[$mentioned[1];$getServerVar[erkek]]
  $setUserVar[jail;no;$mentioned[1]]
  $channelSendMessage[$channelID;{author:Üye jailden çıkarıldı!:$userAvatar[$mentioned[1]]}{description:$customEmoji[unjail] <@$mentioned[1]> adlı üye jailden çıkarıldı ve <@&$getServerVar[erkek]> rolü verildi.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $endif

  $if[$getUserVar[cinsiyet;$mentioned[1]]==kız]
  $setRoles[$mentioned[1];$getServerVar[kız]]
  $setUserVar[jail;no;$mentioned[1]]
  $channelSendMessage[$channelID;{author:Üye jailden çıkarıldı!:$userAvatar[$mentioned[1]]}{description:$customEmoji[unjail] <@$mentioned[1]> adlı üye jailden çıkarıldı ve <@&$getServerVar[kız]> rolü verildi.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $endif
  
  $if[$getUserVar[cinsiyet;$mentioned[1]]==kayıtsız]
  $setRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $setUserVar[jail;no;$mentioned[1]]
  $channelSendMessage[$channelID;{author:Üye jailden çıkarıldı!:$userAvatar[$mentioned[1]]}{description:$customEmoji[unjail] <@$mentioned[1]> adlı üye jailden çıkarıldı ve <@&$getServerVar[kayıtsız]> rolü verildi.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $endif
  
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]==true;$getServerVar[cross] <@$authorID>, üye zaten jailde değil.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, kimi jailden çıkarmalıyım?]
  $onlyForRoles[$getServerVar[jailhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
`
}
