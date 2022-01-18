module.exports = {
name:"nerede",
code:`
<#$voiceID[$mentioned[1]]>
$author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]> adlı üye <#$voiceID[$mentioned[1]]> adlı ses kanalında]
$color[BLACK]
$thumbnail[$userAvatar[$mentioned[1]]]
$onlyIf[$voiceID[$mentioned[1]]!=;$getServerVar[cross] <@$authorID>, Üye herhangi bir sesli kanalda değil.]
$onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Birini etiketle.]
`
} 
