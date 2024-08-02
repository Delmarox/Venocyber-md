8//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "263717672068";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05SdWZsR3BicisyQk1hU3lBL0Q0QWttT3ZsWmE0Rk5FakhldVNTNEszQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDJWeFRsK0liN2Y3b0c4b0E1di95NlFNTks2aUFIc2V5UHd3ZzhQdGcxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUHFpZGdzV2MrenRTMWlRZVJQbDhvTXFNOWtCb3R5RldhNnVnUkNKajNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJINGRabG0vOWRyWmQ5QzNhK3VwRWJycHFpcmFZbjhwN3lLQ1NVM2E2cW5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGUmxoQmV6aDRCNmprWWdEL0o5aTV4bXh1MHpSM1NtN1RrUzd6ZTlOMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMwejhOSE1MYk1jUTF1QzFaVDgwOGYzUjd6ZERYQTJhQlJMbGV2L1Y2ajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5jbVRmTHpYZS9DRzJSRnBrRVJaU2I0OEJDbEF4TWxlSzhtZzlyYnVrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2tlTlJXVU0rdndWdjhEMVNvMDBITG82TDM5NHhHeGw5enY4R0lyTW5YQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBSSi9aZnhjYkE1VTRmM1dOWGFKR05XZEFVL0lpekdwaVB5NzFZam43VUVpQW40elpZbnNIeHIxL1dSTTFxL2lTc0tnUGMyM0dlZzFMZUdvVVVGcWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJvSlRmLy9hK2hDQk5ONUU1TzBGNlYzbGVjM1lweVAxS0VXbXJGK29BbmVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUR3ltMWlERlFkeU9VS2JrM1gzQlBnIiwicGhvbmVJZCI6ImU3YjkyMGNhLTZlOWQtNGVkYi1hZTNjLTM2YjAwMTYwMzczZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUFJiUGxkMEd0ODZrTGpncGZDZVVKNDFaMEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWRIWE80N3VWekYvWThDaFdabVladVI4V0tvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFFM1QxUjhCIiwibWUiOnsiaWQiOiIyNjM3MTc2NzIwNjg6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XuPCdn67wnZ+18J2XvfCdl7/wnZe88J2XuvCdl67wnZiFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWE5zL1lDRU5manJMVUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3YWIwaUFqRGZlZ1dCZ2JLNVpkS2NHVWpVY28vaEcyWm9rYkJtampHeURZPSIsImFjY291bnRTaWduYXR1cmUiOiJNdFM5dzRTdWtLVUhuLzNkMkxhdmRIV1FqRHQ5Z2twUjhTL0o2cXJ1Q0JQRHdnaTR0QThrMi8rNk1WRXh5eUFBWTZ1VGhGRHlBZ0l2d3phUk5BZnNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoianVzc0NPdnVVeTY0Ui9nZkIvQ1dObW5qU0pWZnV2V0dLdVhJbEQ4TXZqd0RLT1Jvc1RDdTdqZHQvZ1hIcVhIbWkvTXhpM1ZOdmxYa3RpVjNocmd6aFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTc2NzIwNjg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0dtOUlnSXczM29GZ1lHeXVXWFNuQmxJMUhLUDRSdG1hSkd3Wm80eHNnMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQ5NTQ2MX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "k29",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "k29promax",
  ownername: process.env.OWNER_NAME || "k29promax",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
