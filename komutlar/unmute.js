module.exports = {
name:"unmute",
code:`
$sendDM[$mentioned[1];**$serverName** sunucusunda mute süren bitmiştir. Tekrardan kanallara yazabilirsin.]
$channelSendMessage[$channelID;{author:Üye mutesi kaldırıldı!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üyenin mutesi kaldırıldı ve <@&$replaceText[$replaceText[$replaceText[$getUserVar[cinsiyet;$mentioned[1]];erkek;$getServerVar[erkek];-1];kız;$getServerVar[kız];-1];kayıtsız;$getServerVar[kayıtsız];-1]> rolü verildi}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]

$setUserVar[mute;no;$mentioned[1]]
$giveRoles[$mentioned[1];$replaceText[$replaceText[$replaceText[$getUserVar[cinsiyet;$mentioned[1]];erkek;$getServerVar[erkek];-1];kız;$getServerVar[kız];-1];kayıtsız;$getServerVar[kayıtsız];-1]]
$takeRoles[$mentioned[1];$getServerVar[muterol]]

$onlyIf[$hasRole[$mentioned[1];$getServerVar[muterol]]==true;$getServerVar[cross] <@$authorID>, Üye zaten mutelenmemiş.]
$onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimin mutesini kaldırmalıyım?]
$onlyForRoles[$getServerVar[mutehammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
`
} 
