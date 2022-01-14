module.exports = {
  name: "ban",
  aliases: "yasakla",
  code: `
  $if[$mentioned[1]==]
  $sendDM[$message[1];**$serverName** sunucusundan "$replaceText[$message;$message[1];;-1] " sebebinden yasaklandın!]
  $channelSendMessage[$channelID;{author:Üye banlandı!:$userAvatar[$message[1]]}{description:**$userTag[$message[1]]** adlı üye "$replaceText[$message;$message[1];;-1] " sebebinden banlandı!}{color:BLACK}{thumbnail:$userAvatar[$message[1]]}]
  $ban[$message[1];$userTag tarafından $replaceText[$message;$message[1];;-1] sebebinden banlandı]
  $onlyIf[$message[2]!=;$getServerVar[cross] <@$authorID>, Ban sebebini gir.]
  $onlyIf[$memberExists[$message[1]]==false;$getServerVar[cross] <@$authorID>, Sunucudaki üyeleri etiketleyerek banlayabilirsin.]
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Kimi banlamalıyım?]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kimi banlamalıyım?]
  $else
  $sendDM[$mentioned[1];**$serverName** sunucusundan \`$noMentionMessage\` sebebinden yasaklandın!]
  $channelSendMessage[$channelID;{author:Üye banlandı!:$userAvatar[$mentioned[1]]}{description:**$userTag[$mentioned[1]]** adlı üye \`$noMentionMessage\` sebebinden banlandı!}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}]
  $ban[$mentioned[1];$userTag tarafından $noMentionMessage sebebinden banlandı]
  $onlyIf[$noMentionMessage!=;$getServerVar[cross] <@$authorID>, Ban sebebini gir.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, rolünden üstte veya eşit birini banlayamazsın.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Kimi banlamalıyım?]
  $endif
  $onlyForRoles[$getServerVar[banhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `,
};
