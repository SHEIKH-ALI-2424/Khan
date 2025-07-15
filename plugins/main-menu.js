const config = require('../config');
const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
  pattern: "menu",
  alias: ["sheikh"],
  desc: "menu the bot",
  react: "📜",
  category: "main"
},
async (conn, mek, m, { from, pushname, reply }) => {
  try {
    const caption = `*👋 Hello ${pushname}*

*꧁ྀི*𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃*ྀི꧂*
> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
> *ᴄʀᴇᴀᴛᴏʀ* : 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥
> *ᴠᴇʀsɪᴏɴ* : v4.0 Beta

*╭─➤ Choose Menu Below:*
*├➤ 1 • Download*
*├➤ 2 • AI*
*├➤ 3 • Anime*
*├➤ 4 • Convert*
*├➤ 5 • Fun*
*├➤ 6 • Main*
*├➤ 7 • Group*
*├➤ 8 • Owner*
*├➤ 9 • Other*
*├➤ 10 • Reactions*
*├➤ 11 • Scammer*
*├➤ 12 • Logo*
*╰─➤ Reply number or tap button below*

> *© Powered by 𒁂❥ SHEIKH ALI 🔥*`;

    const imageMessage = await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/YdSKMhv/6767.jpg" },
      caption,
      buttons: [
        { buttonId: '.openmenu', buttonText: { displayText: '📝 Open Menu List' }, type: 1 }
      ],
      headerType: 4
    }, { quoted: mek });

    // Button command for opening list
    cmd({ pattern: "openmenu", hidden: true }, async (conn, mek2) => {
      await conn.sendMessage(from, {
        text: caption,
        buttonText: '📝 Open Menu List',
        sections: [{
          title: "📋 SELECT A MENU",
          rows: [
            { title: "📥 Download Menu", rowId: "menu1" },
            { title: "🤖 AI Menu", rowId: "menu2" },
            { title: "👘 Anime Menu", rowId: "menu3" },
            { title: "🛠️ Convert Menu", rowId: "menu4" },
            { title: "🎉 Fun Menu", rowId: "menu5" },
            { title: "🧾 Main Menu", rowId: "menu6" },
            { title: "👥 Group Menu", rowId: "menu7" },
            { title: "🛡️ Owner Menu", rowId: "menu8" },
            { title: "📂 Other Menu", rowId: "menu9" },
            { title: "💬 Reactions", rowId: "menu10" },
            { title: "❌ Scammer Menu", rowId: "menu11" },
            { title: "🎨 Logo Menu", rowId: "menu12" }
          ]
        }]
      }, { quoted: mek2 });
    });

    // Listen to both list reply AND number reply
    conn.ev.on('messages.upsert', async (msgUpdate) => {
      const msg = msgUpdate.messages[0];
      if (!msg.message) return;

      let selected;
      if (msg.message.listResponseMessage) {
        selected = msg.message.listResponseMessage.singleSelectReply.selectedRowId;
      } else if (msg.message.extendedTextMessage?.contextInfo?.stanzaId === imageMessage.key.id) {
        selected = msg.message.extendedTextMessage.text.trim();
      } else return;

      const menus = {
        "1": "*📥 Download Menu*\nfacebook\nytmp3\napk\n...",
        "2": "*🤖 AI Menu*\nai\ngpt4\nbing\n...",
        "3": "*👘 Anime Menu*\nwaifu\nneko\nanime1\n...",
        "4": "*🛠️ Convert Menu*\nsticker\ntomp3\ntrt\n...",
        "5": "*🎉 Fun Menu*\nrate\njoke\nkiss\n...",
        "6": "*🧾 Main Menu*\nping\nalive\nmenu\n...",
        "7": "*👥 Group Menu*\nkick\npromote\nwelcome\n...",
        "8": "*🛡️ Owner Menu*\nblock\nunblock\nsetpp\n...",
        "9": "*📂 Other Menu*\nwikipedia\ntimenow\nweather\n...",
        "10": "*💬 Reactions*\nhug\ncry\nslap\n...",
        "11": "*❌ Scammer Menu*\nReport these numbers:\n...",
        "12": "*🎨 Logo Menu*\nneonlight\nsadgirl\ngalaxy\n...",
        "menu1": "*📥 Download Menu*\nfacebook\nytmp3\napk\n...",
        "menu2": "*🤖 AI Menu*\nai\ngpt4\nbing\n...",
        "menu3": "*👘 Anime Menu*\nwaifu\nneko\nanime1\n...",
        "menu4": "*🛠️ Convert Menu*\nsticker\ntomp3\ntrt\n...",
        "menu5": "*🎉 Fun Menu*\nrate\njoke\nkiss\n...",
        "menu6": "*🧾 Main Menu*\nping\nalive\nmenu\n...",
        "menu7": "*👥 Group Menu*\nkick\npromote\nwelcome\n...",
        "menu8": "*🛡️ Owner Menu*\nblock\nunblock\nsetpp\n...",
        "menu9": "*📂 Other Menu*\nwikipedia\ntimenow\nweather\n...",
        "menu10": "*💬 Reactions*\nhug\ncry\nslap\n...",
        "menu11": "*❌ Scammer Menu*\nReport these numbers:\n...",
        "menu12": "*🎨 Logo Menu*\nneonlight\nsadgirl\ngalaxy\n..."
      };

      if (menus[selected]) {
        await conn.sendMessage(from, { text: menus[selected] }, { quoted: msg.key });
      } else {
        await conn.sendMessage(from, { text: "❌ Invalid selection." }, { quoted: msg.key });
      }
    });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
    reply('An error occurred while processing your request.');
  }
});
