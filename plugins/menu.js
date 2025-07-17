const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');
const os = require("os");

// MENU BUTTON WITH IMAGE & "📋 MENU"
cmd({
  pattern: "menu",
  alias: ["sheikh"],
  desc: "Main menu list with image and button",
  react: "📜",
  category: "main"
}, async (conn, m, msg, extra) => {
  const { pushname } = extra;
  const caption = `*👋 Hello ${pushname || 'User'}*

*꧁ྀི*𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃*ྀི꧂*
*❖╭─────────────···▸*
> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem() / 1024 / 1024)}MB
> *ʙᴏᴛ* : *Sheikh Ali MD*
> *ᴄʀᴇᴀᴛᴏʀ* : *𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥*
> *ᴠᴇʀsɪᴏɴ* : *v4.0 Beta*
*❖╰────────────···▸▸*

👇 Click *MENU* to see all features`;

  const buttonMessage = {
    image: { url: "https://i.ibb.co/YdSKMhv/6767.jpg" },
    caption,
    footer: "Sheikh Ali MD Menu System",
    buttons: [
      { buttonId: "open_menu_list", buttonText: { displayText: "📋 MENU" }, type: 1 }
    ],
    headerType: 4
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
});

// MENU LIST WITH RADIO SELECTION
cmd({
  pattern: "open_menu_list",
  hidden: true,
  desc: "Opens the menu list",
  react: "📋",
  category: "main"
}, async (conn, m) => {
  const listMessage = {
    text: "📂 *Select a menu category then tap SELECT MENU:*",
    buttonText: "SELECT MENU",
    sections: [
      {
        title: "📚 Menu Categories",
        rows: [
          { title: "📥 Download Menu", rowId: "downloadmenu" },
          { title: "🤖 AI Menu", rowId: "aimenu" },
          { title: "🎌 Anime Menu", rowId: "animemenu" },
          { title: "🔁 Convert Menu", rowId: "convertmenu" },
          { title: "🎉 Fun Menu", rowId: "funmenu" },
          { title: "🏠 Main Menu", rowId: "mainmenu" },
          { title: "👥 Group Menu", rowId: "groupmenu" },
          { title: "👑 Owner Menu", rowId: "ownermenu" },
          { title: "🧩 Other Menu", rowId: "othermenu" },
          { title: "😆 Reactions", rowId: "reactions" },
          { title: "🚨 Scammer", rowId: "scammer" },
          { title: "🖌️ Logo Menu", rowId: "logomenu" },
        ]
      }
    ]
  };

  await conn.sendMessage(m.chat, listMessage, { quoted: m });
});

// SUBMENU HANDLER (IMAGE + CAPTION)
cmd({
  pattern: "(downloadmenu|aimenu|animemenu|convertmenu|funmenu|mainmenu|groupmenu|ownermenu|othermenu|reactions|scammer|logomenu)",
  desc: "Handles submenu replies",
  category: "main",
  react: "📄"
}, async (conn, m, match) => {
  const menu = match[1];

  const menus = {
    downloadmenu: {
      caption: `*📥 DOWNLOAD MENU*\n\n> *.ytmp3*\n> *.ytmp4*\n> *.mediafire*\n> *.instagram*\n> *.twitter*`,
      image: "https://i.ibb.co/h2RXbPp/download.jpg"
    },
    aimenu: {
      caption: `*🤖 AI MENU*\n\n> *.gpt*\n> *.bard*\n> *.ai-image*\n> *.translate*`,
      image: "https://i.ibb.co/6vgbVtc/ai.jpg"
    },
    animemenu: {
      caption: `*🎌 ANIME MENU*\n\n> *.anime*\n> *.manga*\n> *.neko*\n> *.animequote*`,
      image: "https://i.ibb.co/qyZhMQk/anime.jpg"
    },
    convertmenu: {
      caption: `*🔁 CONVERT MENU*\n\n> *.sticker*\n> *.toimg*\n> *.tomp4*\n> *.pdf*`,
      image: "https://i.ibb.co/wKFL0Tm/convert.jpg"
    },
    funmenu: {
      caption: `*🎉 FUN MENU*\n\n> *.truth*\n> *.dare*\n> *.rate*\n> *.joke*`,
      image: "https://i.ibb.co/pzsjk5z/fun.jpg"
    },
    mainmenu: {
      caption: `*🏠 MAIN MENU*\n\n> *.about*\n> *.ping*\n> *.rules*`,
      image: "https://i.ibb.co/b7zMcPN/main.jpg"
    },
    groupmenu: {
      caption: `*👥 GROUP MENU*\n\n> *.kick*\n> *.add*\n> *.promote*\n> *.demote*`,
      image: "https://i.ibb.co/vBYYd7M/group.jpg"
    },
    ownermenu: {
      caption: `*👑 OWNER MENU*\n\n> *.block*\n> *.unblock*\n> *.setpp*\n> *.mode*`,
      image: "https://i.ibb.co/M9n2dx1/owner.jpg"
    },
    othermenu: {
      caption: `*🧩 OTHER MENU*\n\n> *.shortlink*\n> *.weather*\n> *.quote*`,
      image: "https://i.ibb.co/3fbgFGq/other.jpg"
    },
    reactions: {
      caption: `*😆 REACTIONS MENU*\n\n> *.reacthappy*\n> *.reactsad*\n> *.reactwow*`,
      image: "https://i.ibb.co/DV5mM75/reactions.jpg"
    },
    scammer: {
      caption: `*🚨 SCAMMER CHECK*\n\n> *.checknumber*\n> *.reportscam*`,
      image: "https://i.ibb.co/S3d1cnj/scammer.jpg"
    },
    logomenu: {
      caption: `*🖌️ LOGO MENU*\n\n> *.logoname*\n> *.logostyle*\n> *.logomaker*`,
      image: "https://i.ibb.co/XtR0K9Y/logo.jpg"
    }
  };

  const selected = menus[menu];
  if (!selected) return m.reply("❌ Invalid menu!");

  await conn.sendMessage(m.chat, {
    image: { url: selected.image },
    caption: selected.caption
  }, { quoted: m });
});
           
