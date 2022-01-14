module.exports = {
  name:"lb",
  aliases:["leaderboard","leader-board","toplam-teyit","top-teyit","toplam","top"],
  code:`
$author[Kayıt sayısı sıralaması;$authorAvatar]
$description[$userLeaderboard[kayıtsayı;asc;{top} | **{username}** ( \`{value}\` )]]
$color[BLACK]
$thumbnail[$authorAvatar]
$onlyIf[$hasRole[$authorID;$getServerVar[kayıthammer]]==true;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
   

  `
}
