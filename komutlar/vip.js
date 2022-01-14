module.exports = {
  name:"vip",
  code:`
$if[$message[1]==ver]
$channelSendMessage[$channelID;{author:Üyeye vip verildi!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üyeye <@&$getServerVar[vip]> rolü verildi.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
$giveRoles[$mentioned[1];$getServerVar[vip]]
$onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kime vip vermeliyim?]
$endif

$if[$message[1]==al]
$channelSendMessage[$channelID;{author:Üyeden vip alındı!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üyeden <@&$getServerVar[vip]> rolü alındı.}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
$takeRoles[$mentioned[1];$getServerVar[vip]]
$onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimden vip almalıyım?]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];ver;al]==true;$getServerVar[cross] **ver** , **al** fonksiyonlarını kullanın.]
$onlyPerms[admin;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.] 
 
  `
}
