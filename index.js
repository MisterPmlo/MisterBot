const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const http = require('http');     
const moment = require('moment'); 

var listRoles = [];

var listJobsAlias = [
  {gta : 'police', discord : 'POLICIER🚓'},
  {gta : 'ambulance', discord : 'EMS🚑'},
  {gta : 'mecano', discord : 'Mécano🔧'},
  {gta : 'unemployed', discord : 'Chômeur💼'},
  {gta : 'taxi', discord : 'Taxi🚖'},
  {gta : 'fisher', discord : 'Pêcheur🎣'},
  {gta : 'slaughterer', discord : 'Abatteur🐓'},
  {gta : 'unicorn', discord : 'Unicorn🦄'},
  {gta : 'fuel', discord : 'Raffineur⛽'},
  {gta : 'banker', discord : 'Banquier🏦'},
  {gta : 'cardealer', discord : 'Concessionnaire🚘'},
  {gta : 'trucker', discord : 'Chauffeur🚚'},
  {gta : 'miner', discord : 'Mineur⛏️'},
  {gta : 'reporter', discord : 'CNN🎥'},
  {gta : 'lumberjack', discord : 'Bûcheron🌲'},
  {gta : 'textil', discord : 'Couturier☁️'}
];

var listLicensesAlias = [
  {gta : 'visa', discord : '[VISA]'},
  {gta : 'greencard', discord : '[CARTE VERTE]'}
];

var listEchelonAlias = [
  {gta : '0', discord : '[Echelon 1]'},
  {gta : '1', discord : '[Echelon 2]'},
  {gta : '2', discord : '[Echelon 3]'},
  {gta : '3', discord : '[Echelon 4]'},
  {gta : '4', discord : '[Echelon 5]'}
];

var nbPlayers = -1;

client.on("ready", () => {
    console.log("Je suis en ligne !");
    client.user.setGame("utilisez !help");
   // var channel = client.channels.get('407188493006143488');
   // channel.sendMessage({embed: {
   //   color: 65304,
   //   author: {
   //     name: client.user.username,
   //     icon_url: client.user.avatarURL
   //   },
   //   title: "__Mise à jour du bot:__",
   //   description: "Le bot a était mis à jour le **5/02/2018**.",
   //   fields: [{
   //     name: "__Les rajouts:__",
   //     value: "MisterBot is **BACK** ! Attention les yeux y'a du lourd ! Le nombre de joueurs sur le serveur ce change tout seul dans le salon <#410127276991184906> ! Mais maintenant il y'a aussi l'automatisation des roles entre GTA et discord ! (Changement des roles IG = changement des roles discord !) :yum:",
   //   }],
   //   timestamp: new Date(),
   //   footer: {
   //     icon_url: client.user.avatarURL,
   //     text: "Envoyé"
   //       }
   // }
   // })
  printPlayersOnline();
  setInterval(printPlayersOnline, 60000);


  var guild = client.guilds.get("407186981425250306"); //Recupere la liste des role et la stock !
  guild.roles.forEach(element => {
    var role = {
      id : element.id,
      name : element.name,
    }
    listRoles.push(role);
  });
  });
client.on("message", (message) => {

  
  //============================HELP===============================
if (message.content.startsWith(config.prefix + 'help')) {
    message.channel.send({embed: {
      color: 16711680,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "__Liste de nos commandes:__",
      description: "**version** \n **regles** \n **forum** \n **site** \n **candidature** \n **vote** \n **stream** \n **server**",
      fields: [{
        name: "__Commandes Admins:__",
        value: "**kick** (retirée pour l'instant)",
      },
        {
          name: "__Préfix de base:__",
          value: "Le préfix de base est **!**"
        }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Envoyé"
      }
    }
    })
  };

//============================REGLES=============================

        if (message.content.startsWith(config.prefix + 'regles')) {
            message.channel.send({embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: "Nos règles",
              description: "Tout d'abord, pour faire votre candidature, il vous faut avoir lu les [règles](https://forum.summer-island.fr/threads/reglement-a-lire.10/).",
              fields: [{
                  name: "Candidature",
                  value: "Après avoir lu les règles, faite votre [candidature](https://forum.summer-island.fr/forums/rejoindre-lile.32/)."
                },
                {
                  name: "Candidature acceptée",
                  value: "Si votre candidature à était acceptée, rendez-vous dans le salon Salle d'attente, de la section IMMIGRATION" 
                },
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Envoyé"
              }
            }
        })
    };

//============================VERSION=============================

if (message.content.startsWith(config.prefix + 'version')) {
    message.channel.send({embed: {
      color: 16056064,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "__Version du bot:__",
      description: "Le bot est en version **0.1.1** (en développement), si vous rencontrez des bugs, merci de me les dire en mp",
      fields: [{
        name: "__Créateur:__",
        value: "MisterPmlo (Paul Origeon)",
      }],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Envoyé"
      }
    }
    })
  };

//============================STREAM=============================

if (message.content.startsWith(config.prefix + 'stream')) {
    message.channel.send({embed: {
      color: 9442302,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "__Le stream:__",
      description: "Tu ne veux pas manquer les streams de [Cr4zZyBipBiip](https://www.twitch.tv/cr4zzybipbiip), alors n'oublie de le follow :ok_hand:",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Envoyé"
      }
    }
    })
  };

//============================SITE=============================

if (message.content.startsWith(config.prefix + 'site')) {
    message.channel.send({embed: {
      color: 16098851,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "__Notre site:__",
      description: "Envie de voir les actualités ? Alors va sur notre [site](https://www.summer-island.fr)",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Envoyé"
      }
    }
    })
  };

//============================FORUM=============================

if (message.content.startsWith(config.prefix + 'forum')) {
    message.channel.send({embed: {
      color: 16098851,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "__Notre forum:__",
      description: "Rejoins tout de suite notre [forum](https://www.summer-island.fr) !",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Envoyé"
      }
    }
    })
  };


//============================VOTE=============================

if (message.content.startsWith(config.prefix +'vote')) {
    message.channel.send({embed: {
      color: 16098851,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Vote pour le serveur !",
      description: "Pour qu'il y ait plus de monde sur le serveur et pour nous aider à le faire connaître, [vote](https://gta.top-serveurs.net/vote/summer-island) toutes les 2 heures et donne nous ton [avis](https://gta.top-serveurs.net/summer-island/advices) !",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Envoyé"
      }
    }
    })
};

//============================VOTE CHAT=============================
 if (message.author.bot) return;
 if (message.content.includes("!vote")) return message.channel.sendMessage("");
 if (message.content.includes("vote") || 
    message.content.includes("votes") ||
    message.content.includes("voter") ||
    message.content.includes("voté")) {
      message.channel.send({embed: {
        color: 16098851,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Vote pour le serveur !",
        description: "Pour qu'il y ait plus de monde sur le serveur et pour nous aider à le faire connaître, [vote](https://gta.top-serveurs.net/vote/summer-island) toutes les 2 heures et donne nous ton [avis](https://gta.top-serveurs.net/summer-island/advices) !",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Envoyé"
        }
      }
      })
    };
    
//============================BUG CHAT=============================
if (message.author.bot) return;
if (message.content.includes("bug") ||
    message.content.includes("bugs")) {
    message.channel.sendMessage("Un bug sur le serveur ? Pas de soucis, rend toi sur <#407195760879337472> ou sur le forum -> https://www.summer-island.fr (en cas de très gros bug)");
}

//============================CANDID CHAT===========================

if (message.author.bot) return;
if (message.content.includes("candidature") || 
message.content.includes("candid")) {
message.channel.sendMessage("Allez faire votre candidature ici -> https://forum.summer-island.fr/forums/rejoindre-lile.32/");
}

//============================REGLES CHAT===========================

if (message.author.bot) return;
if (message.content.includes("règles") || 
message.content.includes("règle")){
message.channel.sendMessage("Nos règles ce trouvent ici -> https://forum.summer-island.fr/threads/reglement-a-lire.10/");
}

//============================FORUM CHAT===========================

if (message.author.bot) return;
if (message.content.includes("!forum")) return message.channel.sendMessage("");
if (message.content.includes("forum")) {
message.channel.sendMessage("Envie de faire un tour sur notre forum -> https://forum.summer-island.fr/");
}

//============================TRELLO CHAT===========================

if (message.author.bot) return;
if (message.content.includes("Trello") ||
message.content.includes("trello")) {
message.channel.send({embed: {
  color: 16098851,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Nos trellos",
  description: "Si tu veux suivre l'avancement du trello ou même participer, on a un trello [idées](https://trello.com/b/uyN0zODm/cr4zzy-rp) et un trello [des developpements en cours](https://trello.com/b/d5kZl7Vk/cr4zzy-dev) !",
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "Envoyé"
  }
}
})
};


//============================IP==================================

if (message.content.startsWith(config.prefix + "ip")) {
  if(!message.member.hasPermissions('MANAGE_ROLES' || 'ADMINISTRATOR')) return message.channel.send("");{
  var member= message.mentions.members.first();
  member.setMute().then((member) => {
  member.sendMessage("Ip du serveur wl -> ``164.132.69.252:6969`` Et avec le F8 -> ``connect 164.132.69.252:6969``");
  }).catch(() => {
    message.channel.send("");
});
};
};
});


//============================SUGGESTION===========================
//client.on('messageReactionAdd', (reaction, user) => {
//if (message.author.bot) return;
//reaction.emoji.name ==="👍";
//})


//client.on('message', (message) => {
//  var channel = client.channels.get('398844500027375616');
//  if(message.channel != channel) return message.channel.send("")
//  if (message.author.bot) return;
//   message.delete()
//channel.send(`:speaking_head: ***REFERUNDUM @everyone ! :speaking_head:*** \n ${message.content} \n **Proposé par ${message.member}**`)
//            .then(function (message) {
//              message.react("👍")
//              message.react("👎")
//            }).catch(function() {
//            })
//            });

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "addjob")) {
    var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
    if(message.channel != channel) return message.delete();   //Sinon, on delete le message
    var member= message.mentions.members.first();
    var messages = message.content.split(" ");
    var job = messages[2];
    var exist = false;
    listJobsAlias.forEach(item => {
      if (item.gta == job) {
        listRoles.forEach(element => {
          if (element.name == item.discord) {
            if (member != null){
              return member.addRole(element.id).catch(console.error); //on ajoute le job
            }
          }
        })
      }
    })
    if (exist == false) {
    }
  }

  if (message.content.startsWith(config.prefix + "rmjob")) {
    var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
    if(message.channel != channel) return message.delete();   //Sinon, on delete le message
    var member = message.mentions.members.first();
    var messages = message.content.split(" ");
    var exist = false;
    listJobsAlias.forEach(item => {
      listRoles.forEach(element => {
        if (element.name == item.discord) {
          if (member != null){
            return member.removeRole(element.id).catch(console.error); //on remove le job

          }
        }
      })
      // }
    })
    if (exist == false) {
    }
  }

  if (message.content.startsWith(config.prefix + "visa")) {
    var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
    if(message.channel != channel) return message.delete();   //Sinon, on delete le message
    var member = message.mentions.members.first();
    var messages = message.content.split(" ");
    var licensetoadd = "visa";
    var licensetoremove = "greencard";
    var exist = false;
    listLicensesAlias.forEach(item => {
      if (item.gta == licensetoremove) {
        listRoles.forEach(element => {
          if (item.discord == element.name) {
            if (member != null){
              return member.removeRole(element.id).catch(console.error); //Remove TOUTE les license
            }
          }
        })
      }
    })
    listLicensesAlias.forEach(item => {
      if (item.gta == licensetoadd) {
        listRoles.forEach(element => {
          if (item.discord == element.name) {
            if (member != null){
              return member.addRole(element.id).catch(console.error); //Ajout de la VISA
            }
          }
        })
      }
    })
    if (exist == false) {
    }
  }

  if (message.content.startsWith(config.prefix + "green")) {
    var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
    if(message.channel != channel) return message.delete();   //Sinon, on delete le message
    var member = message.mentions.members.first();
    var messages = message.content.split(" ");
    var licensetoadd = "greencard";
    var licensetoremove = "visa";
    var exist = false;
    listLicensesAlias.forEach(item => {
      if (item.gta == licensetoremove) {
        listRoles.forEach(element => {
          if (item.discord == element.name) {
            if (member != null){
              return member.removeRole(element.id).catch(console.error);//Remove TOUTE les license
            }
          }
        })
      }
    })
    listLicensesAlias.forEach(item => {
      if (item.gta == licensetoadd) {
        listRoles.forEach(element => {
          if (item.discord == element.name) {
            if (member != null){
              return member.addRole(element.id).catch(console.error); //Ajout de la carte verte
            }
          }
        })
      }
    })
    if (exist == false) {
    }
  }

  if (message.content.startsWith(config.prefix + "resetgrade")) {
    var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
    if(message.channel != channel) return message.delete();   //Sinon, on delete le message
    var member = message.mentions.members.first();
    var messages = message.content.split(" ");
    // var grade = messages[2];
    var exist = false;
    listEchelonAlias.forEach(item => {
      listRoles.forEach(element => {
        if (item.discord == element.name) {
          if (member != null){
            return member.removeRole(element.id).catch(console.error); //On enleve les echelon
          }
        }
      })
    })
    if (exist == false) {
    }
  }

  if (message.content.startsWith(config.prefix + "updategrade")) {
    var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
    if(message.channel != channel) return message.delete();   //Sinon, on delete le message
    var member = message.mentions.members.first();
    var messages = message.content.split(" ");
    var grade = messages[2];
    var exist = false;
    listEchelonAlias.forEach(item => {
      if (item.gta == grade) {
        listRoles.forEach(element => {
          if (element.name == item.discord) {
            if (member != null){
              return member.addRole(element.id).catch(console.error); //on met a jour l'échelon
            }
          }
        })
      }
    })
    if (exist == false) {
    }
  }

  // if (message.content.startsWith(config.prefix + "server")) {
  //   var channel = client.channels.get('410118918527516693');  //Check if channel = 'grade-auto'
  //   if(message.channel != channel) return message.delete();   //Sinon, on delete le message
  //   var hasRole = false;
  //   listRoles.forEach(element => {
  //     if (element.name == "[VISA]" || element.name == "[CARTE VERTE]") {
  //       if (message.member.roles.has(element.id)) {
  //         hasRole = true;
  //       }
  //     }
  //   })
  //   if (hasRole) {
  //     http.get('http://164.132.69.252:6969/players.json', (response) => {
  //       let data ='';
  //       let nbPlayers = 0;
  //
  //       response.on('data', (chunk) => {
  //         data += chunk;
  //       });
  //
  //       response.on('end', () => {
  //         // console.log(JSON.parse(data));
  //         data = JSON.parse(data);
  //         // console.log(data);
  //         for (var i = 0; i < data.length; i++) {
  //           // data[i]
  //           nbPlayers++;
  //         }
  //         if (nbPlayers == 0) {
  //           message.channel.sendMessage(`__**La ville est déserte**__... C'est bien triste, prend l'avion !`);
  //         }
  //         else if (nbPlayers == 1) {
  //           message.channel.sendMessage(`Il n'y a actuellement __**qu'une seule personne**__ en ville. Ne la laisse pas toute seule !`);
  //         }
  //         else {
  //           message.channel.sendMessage(`Il y a actuellement __**${nbPlayers} joueurs**__ en ville. Rejoins les vite !`);
  //         }
  //       })
  //
  //       response.on('error', (err) => {
  //         console.log("ERREUR : " + err.message);
  //       })
  //
  //     })
  //   }
  //   else {
  //     message.delete();
  //   }
  // }
  // else {
  //   var channel = client.channels.get('409468255967772672');
  //   if ((message.channel == channel) && (message.author.id != '382234732294963200')) {
  //     deleteAllMessages(channel);
  //   }
  // }


});

function printPlayersOnline() {
  var dateToDisplay = moment().format('HH:mm');
  var channel = client.channels.get('410127276991184906');
  if (channel && channel.lastMessageID) {
    var lastMessage = channel.lastMessageID;
    channel.fetchMessage(lastMessage)
    .then(function(message) {
      http.get('http://164.132.69.252:6969/players.json', (response) => {
        let data ='';
        let nbPlayersLocal = 0;
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          data = JSON.parse(data);
          for (var i = 0; i < data.length; i++) {
            nbPlayersLocal++;
          }
          if (nbPlayers != nbPlayersLocal) {
            nbPlayers = nbPlayersLocal;
            if (nbPlayers == 0) {
              message.edit(`Depuis qu'il est ${dateToDisplay}\n__**La ville est déserte**__... C'est bien triste, prend l'avion !`)
              .catch(function(){
                deleteAllMessages(channel)
              })
            }
            else if (nbPlayers == 1) {
              message.edit(`Depuis qu'il est ${dateToDisplay}\nIl n'y a __**qu'une seule personne**__ en ville. Ne la laisse pas toute seule !`)
              .catch(function(){
                deleteAllMessages(channel)
              })
            }
            else {
              message.edit(`Depuis qu'il est ${dateToDisplay}\nIl y a __**${nbPlayers} joueurs**__ en ville. Rejoins les vite !`)
              .catch(function(){
                deleteAllMessages(channel)
              })
            }
          }
        })

        response.on('error', (err) => {
          console.log("ERREUR : " + err.message);
        })

      })
    })
    .catch(function () {
      channel.send("Chargement en cours...")
      .then(function() {
        nbPlayers = -1;
        printPlayersOnline()
      })
    })
  }
  else {
    channel.send("Chargement en cours...")
    .then(function() {
      nbPlayers = -1;
      printPlayersOnline()
    })
  }
}

function deleteAllMessages(channel) {
  // channel.bulkDelete(channel.messages, true)
  // .then(function () {
  //   channel.send("Chargement en cours...")
  //   .then(function() {
  //     nbPlayers = -1;
  //     printPlayersOnline()
  //   })
  // })
  let count = 0;
  channel.fetchMessages({limit: 100})
  .then(messages => {
    let messagesArr = messages.array();
    let messageCount = messagesArr.length;

    for(let i = 0; i < messageCount; i++) {
      messagesArr[i].delete()
      .then(function() {
        count = count + 1;
        if(count >= 100) {
          deleteStuff();
        }
      })
      .catch(function() {
        count = count + 1;
        if(count >= 100) {
          deleteStuff();
        }
      })
    }
  })
  .catch(function(err) {
    console.log('error thrown');
    console.log(err);
  });
  nbPlayers = -1;
  printPlayersOnline();
}


client.login(process.env.TOKEN)
