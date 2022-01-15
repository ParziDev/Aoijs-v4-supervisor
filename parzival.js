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
    text: "ParzivaL Supervisor Botu",
    type: "PLAYING",
    status: "dnd",
    time: 12
})

/////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",//Prefix
  tag:"",//Tagınız
  tagrol:"",//Tag rolü ID'si
  taglog:"",//Tag logu ID'si
  yasaklıtag:"",//Yasaklı tag
  yasaklırol:"",//Yasaklı tag rolü ID'si
  yasaklılog:"",//Yasaklı tag logu ID'si
  jail:"no",//Elleme
  jailrol:"",//Cezalı , Jail , Karantina rolü ID'si
  jailhammer:"",//Jail hammer ( jail atabilicek rol ) ID'si
  mute:"no",//Elleme
  muterol:"",//Muted , Susturulmuş rolü ID'si
  mutehammer:"",//Mute hammer ( Mute atabilicek rol ) ID'si
  banhammer:"",//Ban hammer ( Ban atabilicek rol ) ID'si
  yenihesaprol:"",//Yeni hesap rolü ID'si
  yenihesaplog:"",//Yeni hesap logu ID'si
  kayıtsız:"",//Kayıtsız rolü ID'si
  erkek:"",//Erkek üye rolü ID'si
  kız:"",//Kız üye rolü ID'si
  cinsiyet:"kayıtsız",//Elleme
  kayıthammer:"",//Kayıt hammer ( Kayıt yetkilisi ) rolü ID'si
  kayıt:"",//Kayıt kanalı ID'si
  chat:"",//Chat kanalı ID'si
  kayıtsayı:"0",//Elleme
  vip:"",//Vip , Özel üye rolü ID'si
  seskanalı:"",//Ses kanalı ID'si
  tick:"✅",//Tik Emoji ID'si
  cross:"❎"//Çarpı Emoji ID'si
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

**$customEmoji[kelebek_kirmizi] Aramıza hoşgeldin <@$authorID>.
  
$customEmoji[kelebek_beyaz] Seninle beraber \`$membersCount\` üyeyiz.

$customEmoji[kelebek_yesil] Kayıt olmak için <@&$getServerVar[kayıthammer]> rolündeki üyeleri bekleyin.

$customEmoji[kelebek_sari] Hesabın \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];month;Ay;-1];year;Yıl;-1];week;Hafta;-1]\` önce kurulmuş.

$customEmoji[kelebek_mor] Tagımızı alarak ( \`⛦\` , \`#0400\` ) ailemize katılabilirsin.**

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
