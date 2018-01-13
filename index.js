const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();



client.on("ready", () => {
  console.log("Je suis en ligne !");
  client.user.setGame("utilisez !help");
//  var channel = client.channels.get('377470950951747595');
//  channel.sendMessage({embed: {
//    color: 65304,
//    author: {
 //     name: client.user.username,
//      icon_url: client.user.avatarURL
//    },
//    title: "__Mise à jour du bot:__",
//    description: "Le bot a était mis à jour le **13/01/2018**.",
//    fields: [{
//      name: "__Les rajouts:__",
//      value: "Modification de la commande **!server**, cherche idée pour mieux l'afficher, mp moi si vous avez une idée :)",
//    }],
//    timestamp: new Date(),
//    footer: {
//      icon_url: client.user.avatarURL,
//      text: "Envoyé"
//        }
//  }
//  })
}); 

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes("candidature") || 
  message.content.includes("candid")) {
  message.channel.sendMessage("Allez faire votre candidature ici -> http://cr4zzy.fr/forum/13/gtav-rp ");
  }
});


client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes("trello")) {
  message.channel.sendMessage("Si tu veux suivre l'avancement du trello ou même participer, voici où ça se passe -> https://trello.com/b/uyN0zODm/cr4zzy-rp");
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes("règles") || 
  message.content.includes("règle")){
  message.channel.sendMessage("Nos règles ce trouvent ici -> https://goo.gl/N6RnhQ");
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes("!forum")) return message.channel.sendMessage("");
  if (message.content.includes("forum")) {
  message.channel.sendMessage("Envie de faire un tour sur notre forum -> http://cr4zzy.fr/forum");
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes('"site non installé"') ||
  message.content.includes('"site non installe"') ||
  message.content.includes ("site non installé")) {
  message.channel.sendMessage("Pas de soucis ! Clic ici -> http://154.49.213.18/");
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes("problème") ||
  message.content.includes("problèmes") ||
  message.content.includes("problemes") ||
  message.content.includes("bug") ||
  message.content.includes("bugs") ||
  message.content.includes("probleme")) {
  message.channel.sendMessage("Un bug sur le serveur ? Pas de soucis, rend toi sur #report-bug");
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.includes("!vote")) return message.channel.sendMessage("");
  if (message.content.includes("vote") || 
  message.content.includes("votes") ||
  message.content.includes("voter") ||
  message.content.includes("voté")) {
  message.channel.sendMessage("Envie de soutenir notre serveur ? Alors vote pour lui -> https://www.trackyserver.com/server/new-cr4zzy-city-29894");
  }
});


client.on('message', message => {
    if(!message.content.startsWith(config.prefix)) return;
    let args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (!message.content.startsWith(config.prefix)) return;

  
if(message.content.startsWith(config.prefix + "prefix")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous devez avoir les permissions "administrateur" pour pouvoir utiliser cette commande');
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    config.prefix = newPrefix;
    message.channel.send(`Le préfix à bien été changé`);

  
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }

 if (message.content.startsWith(config.prefix + 'regles')) {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Nos règles",
    description: "Tout d'abord, pour faire votre candidature, il vous faut avoir lu les [règles](https://goo.gl/N6RnhQ).",
    fields: [{
        name: "Candidature",
        value: "Après avoir lu les règles, faite votre [candidature](http://cr4zzy.fr/forum/13/gtav-rp)."
      },
      {
        name: "Candidature acceptée",
        value: "Si votre candidature à était acceptée, mettez vos dispo dans #mes-dispos"
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

if (message.content.startsWith(config.prefix +'vote')) {
  message.channel.send({embed: {
    color: 16558459,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Vote pour le serveur !",
    description: "Pour qu'il y est plus de monde sur le serveur et pour nous aidez à le faire connaître, [vote](https://www.trackyserver.com/server/new-cr4zzy-city-29894) maintenant !",
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Envoyé"
    }
  }
  })
};

if (message.content.startsWith(config.prefix + 'server')) {
  message.channel.sendFile("http://154.49.213.18/upload/img/bannerGTA.png")
}else

if (message.content.startsWith(config.prefix + 'forum')) {
  message.channel.send({embed: {
    color: 999584,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__Notre forum:__",
    description: "Rejoins tout de suite notre [forum](http://cr4zzy.fr/forum) !",
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Envoyé"
    }
  }
  })
};

if (message.content.startsWith(config.prefix + 'site')) {
  message.channel.send({embed: {
    color: 999584,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__Notre site:__",
    description: "Envie de voir les actualités ? Alors va sur notre [site](http://cr4zzy.fr/)",
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Envoyé"
    }
  }
  })
};

if (message.content.startsWith(config.prefix + 'debugsite')) {
  message.channel.send({embed: {
    color: 111458,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__Notre site en mode debug:__",
    description: "Un problème avec le site (Site non installé) ? Pas de soucis, va sur le [Debug site](http://154.49.213.18/)",
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Envoyé"
    }
  }
  })
};

if (message.content.startsWith(config.prefix + 'help')) {
  message.channel.send({embed: {
    color: 16711680,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__Liste de nos commandes:__",
    description: "  **version** \n **regles** \n **forum** \n **site** \n **debugsite** \n **candidature** \n **vote** \n **stream** \n **server**",
    fields: [{
      name: "__Commandes Admins:__",
      value: "**prefix** \n **kick** (retirée pour l'instant)",
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

if (message.content.startsWith(config.prefix + 'version')) {
  message.channel.send({embed: {
    color: 16056064,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__Version du bot:__",
    description: "Le bot est en version **0.0.2** (en développement), si vous rencontrez des bugs, merci de me les dire en mp",
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
});


//client.on("message", (message) => {
//  if (message.content.startsWith(config.prefix + "kick")) {
//  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(":no_entry: Vous n'avez pas la permission de kick");{
//   var member= message.mentions.members.first();
//    member.kick().then((member) => {
//   message.channel.send(":warning: " + member.displayName + " a bien été kick :ok_hand: ");
//      }).catch(() => {
//       message.channel.send(":no_entry: Vous n'avez pas la permission de kick ");
//      });
//  }
//};
//});

client.login(process.env.TOKEN)
