const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path'); 
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 🚀 *${config.BOT_NAME}* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 Owner : *${config.OWNER_NAME}*
┃◈┃• ⚙️ Prefix : *[${config.PREFIX}]*
┃◈┃• 🌐 Platform : *Heroku*
┃◈┃• 📦 Version : *4.0.0*
┃◈┃• ⏱️ Runtime : *${runtime(process.uptime())}*
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 📥 *DOWNLOAD MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🟦 facebook
┃◈┃• 📁 mediafire
┃◈┃• 🎵 tiktok
┃◈┃• 🐦 twitter
┃◈┃• 📷 insta
┃◈┃• 📦 apk
┃◈┃• 🖼️ img
┃◈┃• ▶️ tt2
┃◈┃• 📌 pins
┃◈┃• 🔄 apk2
┃◈┃• 🔵 fb2
┃◈┃• 📍 pinterest
┃◈┃• 🎶 spotify
┃◈┃• 🎧 play
┃◈┃• 🎧 play2
┃◈┃• 🔉 audio
┃◈┃• 🎬 video
┃◈┃• 📹 video2
┃◈┃• 🎵 ytmp3
┃◈┃• 📹 ytmp4
┃◈┃• 🎶 song
┃◈┃• 🎬 darama
┃◈┃• ☁️ gdrive
┃◈┃• 🌐 ssweb
┃◈┃• 🎵 tiks
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👥 *GROUP MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🔗 grouplink
┃◈┃• 🚪 kickall
┃◈┃• 🚷 kickall2
┃◈┃• 🚫 kickall3
┃◈┃• ➕ add
┃◈┃• ➖ remove
┃◈┃• 👢 kick
┃◈┃• ⬆️ promote
┃◈┃• ⬇️ demote
┃◈┃• 🚮 dismiss
┃◈┃• 🔄 revoke
┃◈┃• 👋 setgoodbye
┃◈┃• 🎉 setwelcome
┃◈┃• 🗑️ delete
┃◈┃• 🖼️ getpic
┃◈┃• ℹ️ ginfo
┃◈┃• ⏳ disappear on
┃◈┃• ⏳ disappear off
┃◈┃• ⏳ disappear 7D,24H
┃◈┃• 📝 allreq
┃◈┃• ✏️ updategname
┃◈┃• 📝 updategdesc
┃◈┃• 📩 joinrequests
┃◈┃• 📨 senddm
┃◈┃• 🏃 nikal
┃◈┃• 🔇 mute
┃◈┃• 🔊 unmute
┃◈┃• 🔒 lockgc
┃◈┃• 🔓 unlockgc
┃◈┃• 📩 invite
┃◈┃• #️⃣ tag
┃◈┃• 🏷️ hidetag
┃◈┃• @️⃣ tagall
┃◈┃• 👔 tagadmins
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎭 *REACTIONS MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👊 bully @tag
┃◈┃• 🤗 cuddle @tag
┃◈┃• 😢 cry @tag
┃◈┃• 🤗 hug @tag
┃◈┃• 🐺 awoo @tag
┃◈┃• 💋 kiss @tag
┃◈┃• 👅 lick @tag
┃◈┃• 🖐️ pat @tag
┃◈┃• 😏 smug @tag
┃◈┃• 🔨 bonk @tag
┃◈┃• 🚀 yeet @tag
┃◈┃• 😊 blush @tag
┃◈┃• 😄 smile @tag
┃◈┃• 👋 wave @tag
┃◈┃• ✋ highfive @tag
┃◈┃• 🤝 handhold @tag
┃◈┃• 🍜 nom @tag
┃◈┃• 🦷 bite @tag
┃◈┃• 🤗 glomp @tag
┃◈┃• 👋 slap @tag
┃◈┃• 💀 kill @tag
┃◈┃• 😊 happy @tag
┃◈┃• 😉 wink @tag
┃◈┃• 👉 poke @tag
┃◈┃• 💃 dance @tag
┃◈┃• 😬 cringe @tag
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎨 *LOGO MAKER* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 💡 neonlight
┃◈┃• 🎀 blackpink
┃◈┃• 🐉 dragonball
┃◈┃• 🎭 3dcomic
┃◈┃• 🇺🇸 america
┃◈┃• 🍥 naruto
┃◈┃• 😢 sadgirl
┃◈┃• ☁️ clouds
┃◈┃• 🚀 futuristic
┃◈┃• 📜 3dpaper
┃◈┃• ✏️ eraser
┃◈┃• 🌇 sunset
┃◈┃• 🍃 leaf
┃◈┃• 🌌 galaxy
┃◈┃• 💀 sans
┃◈┃• 💥 boom
┃◈┃• 💻 hacker
┃◈┃• 😈 devilwings
┃◈┃• 🇳🇬 nigeria
┃◈┃• 💡 bulb
┃◈┃• 👼 angelwings
┃◈┃• ♈ zodiac
┃◈┃• 💎 luxury
┃◈┃• 🎨 paint
┃◈┃• ❄️ frozen
┃◈┃• 🏰 castle
┃◈┃• 🖋️ tatoo
┃◈┃• 🔫 valorant
┃◈┃• 🐻 bear
┃◈┃• 🔠 typography
┃◈┃• 🎂 birthday
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👑 *OWNER MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 owner
┃◈┃• 📜 menu
┃◈┃• 📜 menu2
┃◈┃• 📊 vv
┃◈┃• 📋 listcmd
┃◈┃• 📚 allmenu
┃◈┃• 📦 repo
┃◈┃• 🚫 block
┃◈┃• ✅ unblock
┃◈┃• 🖼️ fullpp
┃◈┃• 🖼️ setpp
┃◈┃• 🔄 restart
┃◈┃• ⏹️ shutdown
┃◈┃• 🔄 updatecmd
┃◈┃• 💚 alive
┃◈┃• 🏓 ping
┃◈┃• 🆔 gjid
┃◈┃• 🆔 jid
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎉 *FUN MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🤪 shapar
┃◈┃• ⭐ rate
┃◈┃• 🤬 insult
┃◈┃• 💻 hack
┃◈┃• 💘 ship
┃◈┃• 🎭 character
┃◈┃• 💌 pickup
┃◈┃• 😆 joke
┃◈┃• ❤️ hrt
┃◈┃• 😊 hpy
┃◈┃• 😔 syd
┃◈┃• 😠 anger
┃◈┃• 😳 shy
┃◈┃• 💋 kiss
┃◈┃• 🧐 mon
┃◈┃• 😕 cunfuzed
┃◈┃• 🖼️ setpp
┃◈┃• ✋ hand
┃◈┃• 🏃 nikal
┃◈┃• 🤲 hold
┃◈┃• 🤗 hug
┃◈┃• 🏃 nikal
┃◈┃• 🎵 hifi
┃◈┃• 👉 poke
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🔄 *CONVERT MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🏷️ sticker
┃◈┃• 🏷️ sticker2
┃◈┃• 😀 emojimix
┃◈┃• ✨ fancy
┃◈┃• 🖼️ take
┃◈┃• 🎵 tomp3
┃◈┃• 🗣️ tts
┃◈┃• 🌐 trt
┃◈┃• 🔢 base64
┃◈┃• 🔠 unbase64
┃◈┃• 010 binary
┃◈┃• 🔤 dbinary
┃◈┃• 🔗 tinyurl
┃◈┃• 🌐 urldecode
┃◈┃• 🌐 urlencode
┃◈┃• 🌐 url
┃◈┃• 🔁 repeat
┃◈┃• ❓ ask
┃◈┃• 📖 readmore
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🤖 *AI MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🧠 ai
┃◈┃• 🤖 gpt3
┃◈┃• 🤖 gpt2
┃◈┃• 🤖 gptmini
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os');

// 📋 Main Menu Command
cmd({
  pattern: "menu",
  desc: "Queen Anita style main menu",
  category: "main",
  react: "📜"
}, async (conn, m) => {
  const pushname = m.pushName || 'User';
  const from = m.chat;

  const caption = `*👋 Hello ${pushname}*

*꧁ 𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃 ꧂*
> *Runtime:* ${runtime(process.uptime())}
> *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
> *Version:* v4.0 Beta
> *Creator:* 𓄂 𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥

*╭────══[ MENU ]══────╮*
*│ 1 • Download*
*│ 2 • AI*
*│ 3 • Anime*
*│ 4 • Convert*
*│ 5 • Fun*
*│ 6 • Main*
*│ 7 • Group*
*│ 8 • Owner*
*│ 9 • Other*
*│ 10 • Reactions*
*│ 11 • Scammer*
*│ 12 • Logo*
*╰────═ Tap MENU below or reply with number*`;

  await conn.sendMessage(from, {
    image: { url: "https://i.ibb.co/YdSKMhv/6767.jpg" },
    caption,
    buttons: [
      { buttonId: 'menu_list', buttonText: { displayText: "📋 MENU" }, type: 1 }
    ],
    headerType: 4
  }, { quoted: m });
});

// 📂 List Trigger Command (opens the list message)
cmd({
  pattern: "menu_list",
  hidden: true
}, async (conn, m) => {
  await conn.sendMessage(m.chat, {
    text: "*✨ Select a menu below:*",
    buttonText: "📋 SELECT MENU",
    sections: [{
      title: "📚 SHEIKH ALI MENU",
      rows: [
        { title: "📥 Download Menu", rowId: "menu1" },
        { title: "🤖 AI Menu", rowId: "menu2" },
        { title: "🖼️ Anime Menu", rowId: "menu3" },
        { title: "🔁 Convert Menu", rowId: "menu4" },
        { title: "🎮 Fun Menu", rowId: "menu5" },
        { title: "🏠 Main Menu", rowId: "menu6" },
        { title: "👥 Group Menu", rowId: "menu7" },
        { title: "👑 Owner Menu", rowId: "menu8" },
        { title: "🛠 Other Menu", rowId: "menu9" },
        { title: "❤️ Reactions", rowId: "menu10" },
        { title: "🚨 Scammer Menu", rowId: "menu11" },
        { title: "🖋 Logo Menu", rowId: "menu12" }
      ]
    }]
  }, { quoted: m });
});

// 🧩 All 12 Submenu Handlers (cmd-based)
cmd({ pattern: "menu1", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*📥 Download Menu*\n• facebook\n• ytmp3\n• apk" }, { quoted: m })
);
cmd({ pattern: "menu2", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🤖 AI Menu*\n• gpt4\n• meta\n• ai" }, { quoted: m })
);
cmd({ pattern: "menu3", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🖼️ Anime Menu*\n• waifu\n• neko\n• animegirl" }, { quoted: m })
);
cmd({ pattern: "menu4", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🔁 Convert Menu*\n• sticker\n• tomp3\n• base64" }, { quoted: m })
);
cmd({ pattern: "menu5", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🎮 Fun Menu*\n• joke\n• hug\n• ship" }, { quoted: m })
);
cmd({ pattern: "menu6", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🏠 Main Menu*\n• ping\n• alive\n• help" }, { quoted: m })
);
cmd({ pattern: "menu7", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*👥 Group Menu*\n• add\n• kick\n• promote" }, { quoted: m })
);
cmd({ pattern: "menu8", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*👑 Owner Menu*\n• block\n• unblock\n• setpp" }, { quoted: m })
);
cmd({ pattern: "menu9", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🛠 Other Menu*\n• weather\n• timer\n• calc" }, { quoted: m })
);
cmd({ pattern: "menu10", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*❤️ Reactions*\n• hug\n• slap\n• kiss" }, { quoted: m })
);
cmd({ pattern: "menu11", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🚨 Scammer Menu*\nReport fake numbers:" }, { quoted: m })
);
cmd({ pattern: "menu12", hidden: true }, async (conn, m) =>
  await conn.sendMessage(m.chat, { text: "*🖋 Logo Menu*\n• neonlight\n• galaxy\n• sadgirl" }, { quoted: m })
);

// ❌ Error Handling for Wrong Reply (like "13", "abc", etc.)
cmd({
  pattern: "^[^a-zA-Z]*$",
  hidden: true
}, async (conn, m) => {
  const reply = m.body?.trim();

  // only react if it was a reply to menu list
  const validNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  if (!validNumbers.includes(reply)) {
    await conn.sendMessage(m.chat, {
      text: "❌ *Invalid option!*\nPlease type a number between 1 and 12 or tap the 📋 MENU button.",
    }, { quoted: m });
  }
}); reply(`❌ Error: ${e}`);
    }
}); 
