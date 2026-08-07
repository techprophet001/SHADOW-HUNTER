const config = require("../config");
sxjsj
module.exports = async (sock, msg) => {

const menu = `
╭──────────────────────╮
   ⚔️ ${config.BOT_NAME}
╰──────────────────────╯

👤 Owner : ${config.OWNER_NAME}
⚡ Prefix : ${config.PREFIX}
📌 Version : ${config.VERSION}

━━━━━━━━━━━━━━━━━━

📜 MAIN
.menu
.ping
.runtime
.getid
.getpp

━━━━━━━━━━━━━━━━━━

🛡 PROTECTION
.antilink
.antispam
.antiflood

━━━━━━━━━━━━━━━━━━

📥 DOWNLOADS
.play
.ytmp3
.ytmp4
.tiktok
.instagram

━━━━━━━━━━━━━━━━━━

© JAVA TECH
`;

await sock.sendMessage(
msg.key.remoteJid,
{
image:{url:config.MENU_IMAGE},
caption:menu
}
);

}
