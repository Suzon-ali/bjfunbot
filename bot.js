const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");
const token = "6153171374:AAGjzjNWdfsEzMELVUDGDENzmnEXgHTB-uA";
const bot = new TelegramBot(token, { polling: true });
const channel = "-1001509151141";

bot.on("polling", () => {
    console.log("Bot started");
  });

console.log("Bot started");

function messageButton(buttons) {
  const inlineKeyboard = {
    inline_keyboard: buttons,
  };

  const options = {
    parse_mode: "HTML",
    reply_markup: JSON.stringify(inlineKeyboard),
  };

  return options;
}

const rules =
  "Respectful Behavior\nNo Spamming\nStay On Topic\nProtect Personal Information\nNo NSFW Content\nNo Hate Speech or Offensive Content\nUse Only English Language";

bot.onText(/\/rules/, (msg) => {
  const buttons = [
    [{ text: "Join Blackjack.fun", url: "https://blackjack.fun/" }],
  ];
  const options = messageButton(buttons);
  bot.sendMessage(msg.chat.id, rules, options);
});

function sendPhotoWithText(chatId, photoPath, caption, button) {
  bot.sendPhoto(chatId, photoPath, {
    caption: caption,
    parse_mode: "HTML",
    ...button,
  });
}

const photo2500Usdt = "https://resource.cwallet.com/activity/2023May/9792fa733afb567d564136b2a4c18202.png";
const photo100Usdt = "https://resource.cwallet.com/activity/2023May/c0755d3a284450a69e6b0cfc858c6889.png";
const photo1000Trx = "https://resource.cwallet.com/activity/2023May/255cde7d3cef07200873f8242394268f.png";
const photo2000TrxDiscord = "https://resource.cwallet.com/activity/2023June/e055168290b0bd810fb3482624194a09.png";


const caption2500Usdt = `<b>Win a share of the 2,500$ USDT prize pool! 💵</b>\n\n<b>🏆Prizes distribution:</b>\n\n500$ to 1 lucky winner\n100$ to 20 lucky winners`;
const caption100usdt = `<b>Win 100 USDT by making at least 5usd worth of crypto deposit.</b>\n\n<b>🏆Prizes distribution:</b>\n\n100$ to 1 lucky winner`;
const caption1000usdt = `<b>We are excited to announce that we are giving away 1000 TRX tokens to 1 lucky winner.</b>\n\n<b>🏆Prizes distribution:</b>\n\n1000 TRX to 1 lucky winner`;
const caption2000TrxDiscord = `<b>We are excited to announce that we are giving away 2000 TRX Discord Giveaway.</b>\n\n<b>🏆Prizes distribution:</b>\n\n2000 TRX to 2000 people`;

const button = [[{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/zNx667lVlgU" }]];

// ...

cron.schedule("0 9,12,19 16,18,22 * * *", () => {
    const options = messageButton(button);
    sendPhotoWithText(channel, photo2500Usdt, caption2500Usdt, options);
    console.log('2500 USDT Photo sent successfully');
  });
  
  cron.schedule("0 10,13,35 16,19,23 * * *", () => {
    const options = messageButton(button);
    sendPhotoWithText(channel, photo100Usdt, caption100usdt, options);
    console.log('100 USDT Photo sent successfully');
  });
  
  cron.schedule("0 11,14,17,20,21 * * *", () => {
    const options = messageButton(button);
    sendPhotoWithText(channel, photo1000Trx, caption1000usdt, options);
    console.log('1000 TRX Photo sent successfully');
  });
  
  cron.schedule("24 11,14,17,20,22 * * *", () => {
    const options = messageButton(button);
    sendPhotoWithText(channel, photo2000TrxDiscord, caption2000TrxDiscord, options);
    console.log('2000 TRX Discord Photo sent successfully');
  });
  
  // ...
  












//Don't touch below




// const codes = [
//     'o39551', 'j66571', 'f71871', 'm39291', 'p33881', 'w89811', 'k06241', 'o05321', 'q86941', 'v19711',
//     'q75171', 'b23031', 'v71781', 'b45481', 'h50731', 'w27751', 'l56161', 'j07321', 't67631', 'j69441',
//     'y52611', 'e22451', 'm21271', 'k77861', 'z63031', 'z12901', 'k98451', 'j28081', 'j05321', 'q73111',
//     'o95181', 'i58031', 'w07421', 'g86981', 'g79951', 'x43881', 'p42711', 'k15861', 'g84211', 'm78221',
//     'a67421', 'e77241', 'z20121', 'u38551', 'a89401', 'i61261', 'w47211', 'o66351', 's55701', 'c12881',
//     'i82471', 's75371', 'j92321', 'x85721', 'm71691', 'w60131', 'y78231', 'o92831', 'u23691', 'u57231',
//     'a88251', 'x63291', 'a47211', 'u50061', 'n45621', 'f33601', 'z33511', 'h66311', 'z50731', 'e25701',
//     'l65701', 'y62321', 'x28261', 'g53771', 'l23571', 'j24091', 'k14851', 'v69651', 'v60681', 'y34771',
//     'w26851', 'h79971', 'o50011', 'f17981', 'w28371', 'l21831', 't71681', 'o23841', 'k09861', 'a84371',
//     'f02001', 'j90711', 'r78851', 'a20631', 'k40801', 'g76491', 'm14111', 'j34641', 'o84841', 'v74791'
//   ];

// function sendCode(code) {

//     const message = `<b>100 TRX Giveaway 🚀🚀🚀</b>\n\n<b>Code: </b> <code>${code}</code>\n\n<b>Next code is coming in 10 minutes</b>`;

//     buttons = [
//         [
//            { text:'   Join 100 TRX giveaway   ', url:'https://giveaway.com/en/profile/cMuREW06yTurDfUq'},
//            { text:'   Ongoing giveaways   ', url:'https://giveaway.com/en/profile/cMuREW06yTurDfUq'}
//         ],
//         [
//            { text:'   Join Blackjack.fun   ', url:'https://blackjack.fun/'}
//         ],

//     ]

//     const options = messageButton(buttons);
//     bot.sendMessage(channel, message, options);
// }

// bot.on('polling', () => {
//     console.log('Bot is ready');
//     sendCode(codes[0]);
//   });

// let index = 0;
// const interval = setInterval(() => {
//     if (index >= codes.length) {
//         clearInterval(interval);
//         bot.sendMessage('-1001729594756', 'I am hungry! I need to eat some codes. I will come back to you!');
//         console.log("I don't have code");
//         return;
//     }

//     sendCode(codes[index]);
//     index++;
// }, 100000);



bot.on("polling_error", (error) => {
  console.log(error.code);
});
