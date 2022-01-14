module.exports = {
  name:"sil",
  code:`
  $if[$mentioned[1]==]
$channelSendMessage[$channelID;{author:Mesaj silindi!:$authorAvatar}{description:\`$message[1]\` mesaj silindi.}{color:GREEN}{thumbnail:$authorAvatar}{delete:5s}]
$clear[$math[1+$message[1]]]
$onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] Kaç mesaj silmeliyim?]
$onlyIf[$message[1]!=;$getServerVar[cross] Kaç mesaj silmeliyim?]
$else
$deleteIn[5s]
$author[Mesaj silindi!;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]> adlı üyenin \`$noMentionMessage[1]\` mesajını sildim.]
$color[GREEN]
$thumbnail[$userAvatar]
$clear[$noMentionMessage[1];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage[1]]==true;$getServerVar[cross] Üyenin kaç mesajımk silmeliyim?]
$onlyIf[$noMentionMessage[1]!=;$getServerVar[cross] üyenin kaç mesajını silmeliyim?]
$endif
$deleteCommand
$onlyPerms[managemessages;$getServerVar[cross] Bunu kullanamazsın.] 
  `
}
