module.exports = {
  name:"jail",
  aliases:"hapis",
  code:`
$sendDM[$mentioned[1];**$serverName** sunucusunda "$noMentionMessage" sebebinden jaile atıldın.]
$channelSendMessage[$channelID;{author:Üye jaile atıldı!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> adlı üye "$noMentionMessage" sebebinden jaile atıldı}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
$setRoles[$mentioned[1];$getServerVar[jailrol]]
$setUserVar[jail;yes;$mentioned[1]]
$onlyIf[$noMentionMessage[1]!=;$getServerVar[cross] <@$authorID>, Jail sebebini gir.]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, rolünden üstte veya eşit birini jaile atamazsın.]
$onlyIf[$mentioned[1]!=$authorID;$getServerVar[cross] <@$authorID>, kendini jaile atamazsın.]
$onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, kimi jaile atmalıyım?]
$onlyForRoles[$getServerVar[jailhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
}
