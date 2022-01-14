module.exports = {
  name:"bansorgula",
  aliases:["ban-sorgula","ban-sebep","bansebep"],
  code:`
  $author[$userTag[$message[1]];$userAvatar[$message[1]]]
  $description[Ban sebebi: **$getBanReason[$message[1]]**]
  $color[GREEN]
  $thumbnail[$userAvatar[$message[1]]]
  $onlyIf[$isBanned[$message[1]]==true;$getServerVar[cross] <@$authorID>, Bu üye zaten banlanmamış.]
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Banlanan üyenin ID'sini girin.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Banlanan üyenin ID'sini girin.]
  $onlyIf[$hasRole[$authorID;$getServerVar[banhammer]]==true;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]  
  `
}
