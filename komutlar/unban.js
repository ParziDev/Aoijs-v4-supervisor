module.exports = {
  name:"unban",
  code:`
  $author[Üyenin banı kaldırıldı!;$userAvatar[$message[1]]]
  $description[$customEmoji[ban] **$userTag[$message[1]]** adlı üyenin banı kaldırıldı.]
  $color[BLACK]
  $thumbnail[$userAvatar[$message[1]]]
  $onlyIf[$isBanned[$message[1]]==true;$getServerVar[cross] <@$authorID>, üye zaten banlı değil.]
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, kimin banını açmalıyım?]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, kimin banını açmalıyım?]
  $onlyForRoles[$getServerVar[banhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
}
