const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]"
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code,
        aliases: command.aliases
    })
}

/////////// STATUS \\\\\\\\\\
bot.status({
    text: "ParzivaL ❤️ Tokyo",
    type: "PLAYING",
    status: "dnd",
    time: 12
})

/////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",
  tag:"⛦",
  tagrol:"935147489403752505",
  taglog:"935147489823174676",
  yasaklıtag:"🐸",
  yasaklırol:"935147489382760487",
  yasaklılog:"935147490901123104",
  jail:"no",
  jailrol:"935147489403752498",
  jailhammer:"935147489420525596",
  mute:"no",
  muterol:"935147489403752499", 
  mutehammer:"935147489420525595",
  banhammer:"935147489420525597",
  yenihesaprol:"935147489403752500",
  yenihesaplog:"935147491064705074",
  kayıtsız:"935147489403752501",
  erkek:"935147489403752502",
  kız:"935147489403752503",
  cinsiyet:"kayıtsız",
  kayıthammer:"935147489437319238",
  kayıt:"935147489613451286",
  chat:"935147490062258200",
  kayıtsayı:"0",
  vip:"935147489403752506",
  booster:"",
  seskanalı:"935147489613451284",
  tick:"<a:tick:935156562593472552>",
  cross:"<a:cross:935156618298015815>"
  }) 

////////// COMMANDS \\\\\\\\\\

//SES AFK
bot.readyCommand({
  channel:"parzi",
  code:`
  $djsEval[client.channels.cache.get("$getServerVar[seskanalı]").join()]
  `
})


//HOŞGELDİN
bot.joinCommand({
  channel:"$getServerVar[kayıt]",
  code:`
$if[$sub[$datestamp;$creationdate[$authorID;ms]]<$multi[$multi[$multi[$multi[7;24];60];60];1000]]
$sendDM[$authorID;**$serverName** sunucumuzda hesabın 7 günden önce açıldığı için jaile atıldın. Kayıt olmak için yetkililere ses vermen yeterli.]
$channelSendMessage[$getServerVar[yenihesaplog];<@$authorID> **$roleName[$getServerVar[yenihesaprol]]** rolünden kurtulmak için ses teyit vermelisin.]
$getServerVar[tick] \`$userTag\` adlı üyenin hesabı 7 günden önce açıldığı için cezalıya atıldı.
$changeNickname[$authorID;• Yeni | Hesap]
$giveRoles[$authorID;$getServerVar[yenihesaprol]]

$else

**🎉 Aramıza hoşgeldin <@$authorID>.
  
Seninle beraber \`$membersCount\` üyeyiz.

Kayıt olmak için <@&$getServerVar[kayıthammer]> rolündeki üyeleri bekleyin.

Hesabın \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];month;Ay;-1];year;Yıl;-1];week;Hafta;-1]\` önce kurulmuş.

Tagımızı alarak ( \`⛦\` , \`#0400\` ) ailemize katılabilirsin.**

$giveRoles[$authorID;$getServerVar[kayıtsız]]
$changeNickname[$authorID;• İsim | Yaş]

$onlyIf[$getUserVar[jail;$authorID]==no;{execute:jailçıkgir}]
$onlyIf[$getUserVar[mute;$authorID]==no;{execute:muteçıkgir}]
$onlyIf[$checkContains[$toLowercase[$userTag];$getServerVar[yasaklıtag]]==false;{execute:yasaklıtaggiriş}]
$endif
  `
})

bot.awaitedCommand({
  name:"jailçıkgir",
  code:`
  $giveRoles[$authorID;$getServerVar[jailrol]]
  `
})

bot.awaitedCommand({
  name:"muteçıkgir",
  code:`
  $giveRoles[$authorID;$getServerVar[muterol]]
  `
})

bot.awaitedCommand({
  name:"yasaklıtaggiriş",
  code:`
  $sendDM[$authorID;Selam <@$authorID>, Sunucumuzda yasaklı olan bir tagı taşıdığından dolayı yasaklı tag rolün verildi. Bu role sahipken sunucumuza erişemezsiniz. Tagı bırakarak bu rolden kurtulabilirsiniz.]
  $channelSendMessage[$getServerVar[yasaklılog];<@$authorID> Yasaklı taga atıldı.]
  $giveRoles[$authorID;$getServerVar[yasaklırol]]
  `
})


//TAGROL
bot.command({
  name:"$alwaysExecute",
  code:`
  $forEachMember[tagrol]
  $serverCooldown[1m]
  `
})

bot.awaitedCommand({
name:"tagrol",
code:`
$if[$checkContains[$toLowercase[$userTag];$getServerVar[tag];#0400]==true]
$channelSendMessage[$getServerVar[taglog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye tagımızı aldı ve <@&$getServerVar[tagrol]> rolü verildi!}{color:GREEN}{thumbnail:$authorAvatar}]

$giveRoles[$authorID;$getServerVar[tagrol]]
$onlyIf[$hasRole[$authorID;$getServerVar[tagrol]]!=true;]
$suppressErrors
$onlyIf[$hasRole[$authorID;$getServerVar[yenihesaprol]]==false;]
$onlyIf[$hasRole[$authorID;$getServerVar[yasaklırol]]==false;]
$onlyIf[$hasRole[$authorID;$getServerVar[jailrol]]==false;]
$endif

$if[$checkContains[$toLowercase[$userTag];$getServerVar[tag];#0400]==false]
$channelSendMessage[$getServerVar[taglog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye tagımızı bıraktı ve <@&$getServerVar[tagrol]> rolü alındı!}{color:RED}{thumbnail:$authorAvatar}]

$takeRoles[$authorID;$getServerVar[tagrol];910258963986120734;924651282071978064;910428585284751400;910428584471052309;910267116026994739;914213744983298088;914213745587261461;922933911162593361]
$onlyIf[$hasRole[$authorID;$getServerVar[tagrol]]!=false;]
$suppressErrors
$endif
$onlyIf[$isBot[$authorID]==false;]
`
})  


//YASAKLITAG
bot.command({
name:"$alwaysExecute",
code:`
$forEachMember[yasaklıtag]
$serverCooldown[1m]
`
})

bot.awaitedCommand({
name:"yasaklıtag",
code:`
$if[$checkContains[$toLowercase[$userTag];$getServerVar[yasaklıtag]]==true]
$channelSendMessage[$getServerVar[yasaklılog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye yasaklı bir taga sahip olduğu için <@&$getServerVar[yasaklırol]> rolü verildi!}{color:GREEN}{thumbnail:$authorAvatar}]

$changeNickname[$authorID;• Yasaklı | Tag]
$setRoles[$authorID;$getServerVar[yasaklırol]]
$onlyIf[$hasRole[$authorID;$getServerVar[yasaklırol]]==false;]
$suppressErrors
$endif

$if[$checkContains[$toLowercase[$userTag];$getServerVar[yasaklıtag]]==false]
$channelSendMessage[$getServerVar[yasaklılog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye yasaklı bir tagı bıraktı ve <@&$getServerVar[yasaklırol]> rolü alındı!}{color:RED}{thumbnail:$authorAvatar}]

$changeNickname[$authorID;• İsim | Yaş]
$setRoles[$authorID;$getServerVar[kayıtsız]]
$onlyIf[$hasRole[$authorID;$getServerVar[yasaklırol]]==true;]
$suppressErrors
$endif
$onlyIf[$isBot[$authorID]==false;]
`
})
