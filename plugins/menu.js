const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os');

cmd({
  pattern: "menu",
  desc: "Queen Anita style main menu",
  category: "main",
  react: "📜"
}, async (conn, m, text) => {
  const pushname = m.pushName || 'User';
  const from = m.chat;

  const caption = `*👋 Hello ${pushname}*

꧁ 𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃 ꧂
> Runtime: ${runtime(process.uptime())}
> RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
> Version: v4.0 Beta
> Creator: 𓄂 𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥

╭──────═[ MENU ]═──────╮
│ 1 • Download
│ 2 • AI
│ 3 • Anime
│ 4 • Convert
│ 5 • Fun
│ 6 • Main
│ 7 • Group
│ 8 • Owner
│ 9 • Other
│ 10 • Reactions
│ 11 • Scammer
│ 12 • Logo
*╰────═ Tap MENU below or reply with number*`;

  await conn.sendMessage(from, {
    image: { url: "https://i.ibb.co/YdSKMhv/6767.jpg" },
    caption,
    buttons: [
      { buttonId: 'open_menu', buttonText: { displayText: "📋 MENU" }, type: 1 }
    ],
    headerType: 4
  }, { quoted: m });

  const menus = {
    "1": "📥 Download Menu\n• facebook\n• ytmp3\n• apk",
    "2": "🤖 AI Menu\n• gpt4\n• meta\n• ai",
    "3": "🖼 Anime Menu\n• waifu\n• neko\n• animegirl",
    "4": "🔁 Convert Menu\n• sticker\n• tomp3\n• base64",
    "5": "🎮 Fun Menu\n• joke\n• hug\n• ship",
    "6": "🏠 Main Menu\n• ping\n• alive\n• help",
    "7": "👥 Group Menu\n• add\n• kick\n• promote",
    "8": "👑 Owner Menu\n• block\n• unblock\n• setpp",
    "9": "🛠 Other Menu\n• weather\n• timer\n• calc",
    "10": "❤ Reactions\n• hug\n• slap\n• kiss",
    "11": "🚨 Scammer Menu\nReport fake numbers:",
    "12": "🖋 Logo Menu\n• neonlight\n• galaxy\n• sadgirl",
    "menu1": "📥 Download Menu\n• facebook\n• ytmp3\n• apk",
    "menu2": "🤖 AI Menu\n• gpt4\n• meta\n• ai",
    "menu3": "🖼 Anime Menu\n• waifu\n• neko\n• animegirl",
    "menu4": "🔁 Convert Menu\n• sticker\n• tomp3\n• base64",
    "menu5": "🎮 Fun Menu\n• joke\n• hug\n• ship",
    "menu6": "🏠 Main Menu\n• ping\n• alive\n• help",
    "menu7": "👥 Group Menu\n• add\n• kick\n• promote",
    "menu8": "👑 Owner Menu\n• block\n• unblock\n• setpp",
    "menu9": "🛠 Other Menu\n• weather\n• timer\n• calc",
    "menu10": "❤ Reactions\n• hug\n• slap\n• kiss",
    "menu11": "🚨 Scammer Menu\nReport fake numbers:",
    "menu12": "🖋 Logo Menu\n• neonlight\n• galaxy\n• sadgirl"
  };

  conn.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg || msg.key.remoteJid !== from) return;

    const buttonId = msg?.message?.buttonsResponseMessage?.selectedButtonId;
    const listId = msg?.message?.listResponseMessage?.singleSelectReply?.selectedRowId;
    const textBody = msg?.message?.conversation?.trim();

    if (buttonId === 'open_menu') {
      await conn.sendMessage(from, {
        text: "✨ Select a menu below:",
        buttonText: "📋 SELECT MENU",
        sections: [{
          title: "📚 SHEIKH ALI MENU",
          rows: [
            { title: "📥 Download Menu", rowId: "menu1" },
            { title: "🤖 AI Menu", rowId: "menu2" },
            { title: "🖼 Anime Menu", rowId: "menu3" },
            { title: "🔁 Convert Menu", rowId: "menu4" },
            { title: "🎮 Fun Menu", rowId: "menu5" },
            { title: "🏠 Main Menu", rowId: "menu6" },
            { title: "👥 Group Menu", rowId: "menu7" },
            { title: "👑 Owner Menu", rowId: "menu8" },
            { title: "🛠 Other Menu", rowId: "menu9" },
            { title: "❤ Reactions", rowId: "menu10" },
            { title: "🚨 Scammer Menu", rowId: "menu11" },
            { title: "🖋 Logo Menu", rowId: "menu12" }
          ]
        }]
      }, { quoted: msg });
    } else if (menus[listId]) {
      await conn.sendMessage(from, { text: menus[listId] }, { quoted: msg });
    } else if (!isNaN(parseInt(textBody)) && menus[textBody]) {
      await conn.sendMessage(from, { text: menus[textBody] }, { quoted: msg });
    }
  });
});
