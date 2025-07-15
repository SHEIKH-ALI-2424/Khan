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
