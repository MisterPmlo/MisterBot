const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
    console.log("Je suis en ligne !");
    client.user.setGame("utilisez !help");
//    var channel = client.channels.get('407188493006143488');
//    channel.sendMessage({embed: {
//      color: 65304,
//      author: {
//        name: client.user.username,
//        icon_url: client.user.avatarURL
//      },
//      title: "__Mise à jour du bot:__",
//      description: "Le bot a était mis à jour le **31/01/2018**.",
//      fields: [{
//        name: "__Les rajouts:__",
//        value: "Une suggestion à faire ? Le channel Referundum est arrivé avec un moyen de voter ! Alors dépéchez vous !",
//      }],
//      timestamp: new Date(),
//      footer: {
//        icon_url: client.user.avatarURL,
//        text: "Envoyé"
//          }
//    }
//    })
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
      description: "Le bot est en version **0.1.0** (en développement), si vous rencontrez des bugs, merci de me les dire en mp",
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

//============================SERVER=============================

if (message.content.startsWith(config.prefix + 'server')) {
    message.channel.sendFile("http://154.49.213.18/upload/img/bannerGTA.png");
}

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
    message.channel.sendMessage("Un bug sur le serveur ? Pas de soucis, rend toi sur #report-bug");
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
    
//============================SUGGESTION==================================

client.on('message', (message) => {
//  var channel = client.channels.get('408006716832219146');
//  if(message.channel != channel) return message.channel.send("")
//  if (message.author.bot) return;
//   message.delete()
//channel.send(`:speaking_head: ***REFERUNDUM @everyone ! :speaking_head:*** \n ${message.content} \n **Proposé par ${message.member}**`)
  //          .then(function (message) {
  //            message.react("👍")
  //            message.react("👎")
  //          }).catch(function() {
   //         })
   //         });
    
//============================IP==================================

if (message.content.startsWith(config.prefix + "ip")) {
  if(!message.member.hasPermissions('MANAGE_ROLES' || 'ADMINISTRATOR')) return message.channel.send("");{
  var member= message.mentions.members.first();
  member.setMute().then((member) => {
      message.delete()
  member.sendMessage("Ip du serveur wl -> ``164.132.69.252:6969`` Et avec le F8 -> ``connect 164.132.69.252:6969``");
  }).catch(() => {
    message.channel.send("");
});
};
};
    });
    });
}); 
});
client.login (process.env.TOKEN)
    
