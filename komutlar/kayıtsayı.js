module.exports = {
  name:"kayıt-sayı",
  aliases:["ks","kayıtsayı"],
  code:`
  **$userTag[$mentioned[1;yes]]** adlı üyenin \`$getUserVar[kayıtsayı;$mentioned[1;yes]]\` kayıt sayısı var.
  $onlyIf[$hasRole[$authorID;$getServerVar[kayıthammer]]==true;$getServerVar[cross] Bunu kullanamazsın.]
   

  `
}
