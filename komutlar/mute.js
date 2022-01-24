module.exports = {
name:"mute",
aliases:"sustur",
code:`
$sendDM[$mentioned[1];**$serverName** sunucusunda mute süren bitmiştir. Tekrardan kanallara yazabilirsin.]
$channelSendMessage[$channelID;<@$mentioned[1]>, Mute süren bitti. Tekrardan kanallara yazabilirsin.]
$setUserVar[mute;no;$mentioned[1]]
$giveRoles[$mentioned[1];$replaceText[$replaceText[$replaceText[$getUserVar[cinsiyet;$mentioned[1]];erkek;$getServerVar[erkek];-1];kız;$getServerVar[kız];-1];kayıtsız;$getServerVar[kayıtsız];-1]]
$takeRoles[$mentioned[1];$getServerVar[muterol]]

$wait[$noMentionMessage[1]]

$sendDM[$mentioned[1];**$serverName** sunucusunda "$replaceText[$noMentionMessage;$noMentionMessage[1];;-1] " sebebinden mutelendin.]
$channelSendMessage[$channelID;{author:Üye mutelendi!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üye **$noMentionMessage[1]** boyunca "$replaceText[$noMentionMessage;$noMentionMessage[1];;-1] " sebebinden susturuldu}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]

$setUserVar[mute;yes;$mentioned[1]]
$giveRoles[$mentioned[1];$getServerVar[muterol]]
$takeRoles[$mentioned[1];$getServerVar[erkek];$getServerVar[kız];$getServerVar[kayıtsız]]

$onlyIf[$noMentionMessage[2]!=;$getServerVar[cross] <@$authorID>, Mute sebebini girin.]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;];m;];h;];d;]]!=false;$getServerVar[cross] <@$authorID>, Mute süresini giriniz.]
$onlyIf[$noMentionMessage[1]!=;$getServerVar[cross] <@$authorID>, Mute süresini girin.]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[muterol]]!=true;$getServerVar[cross] <@$authorID>, Üye zaten mutelenmiş.]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, rolünden üstte veya eşit birini muteleyemezsin.]
$onlyIf[$mentioned[1]!=$authorID;$getServerVar[cross] <@$authorID>, Kendini muteleyemezsin.]
$onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimi mutelemeliyim?]
$onlyForRoles[$getServerVar[mutehammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
$suppressErrors
`
}
