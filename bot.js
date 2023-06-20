const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");
const token = "6153171374:AAGjzjNWdfsEzMELVUDGDENzmnEXgHTB-uA";
const bot = new TelegramBot(token, { polling: true });
const channel = "-1001509151141";

console.log("Bot is ready");

// bot.on('polling', () => {
//     console.log('Bot is ready');
//     sendCode(codes[0]);
//   });


function messageButton(buttons) {
  const inlineKeyboard = {
    inline_keyboard: buttons
  };

  const options = {
    parse_mode: "HTML",
    reply_markup: JSON.stringify(inlineKeyboard)
  };

  return options;
}

const rules =
  "Respectful Behavior\nNo Spamming\nStay On Topic\nProtect Personal Information\nNo NSFW Content\nNo Hate Speech or Offensive Content\nUse Only English Language";

bot.onText(/\/rules/, (msg) => {
  const buttons = [
    [{ text: "Join Blackjack.fun", url: "https://blackjack.fun/" }]
  ];
  const options = messageButton(buttons);
  bot.sendMessage(msg.chat.id, rules, options);
});

function sendPhotoWithText(chatId, photoPath, caption, button) {
  bot.sendPhoto(chatId, photoPath, {
    caption: caption,
    parse_mode: "HTML",
    ...button
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

const button2500Usdt = [[{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/zNx667lVlgU" }]];
const button100Usdt = [[{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/tMS8mu8kcu0" }]];
const button1000Trx = [[{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/gwXRwAtn7eG" }]];
const button2000TrxDiscord = [[{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/CHaPgvtLbxq" }]];



// let previousMessageId = null; // Variable to store the previous message ID

// function deletePhotoMessage(chatId, messageId) {
//   bot.deleteMessage(chatId, messageId)
//     .then(() => {
//       console.log(`Previous message deleted with ID: ${messageId}`);
//     })
//     .catch((error) => {
//       console.error("Failed to delete previous message:", error);
//     });
// }

function schedulePhotoMessage(photoPath, caption, button, cronExpression) {
  cron.schedule(cronExpression, () => {
    const options = {
      parse_mode: "HTML",
      reply_markup: JSON.stringify({ inline_keyboard: button }),
    };

    // Delete previous message if available
    // if (previousMessageId !== null) {
    //   deletePhotoMessage(channel, previousMessageId);
    // }

    // Send new photo message
    bot.sendPhoto(channel, photoPath, { caption, ...options })
      .then((message) => {
        previousMessageId = message.message_id; // Store the new message ID
        console.log(`Photo sent successfully with ID: ${previousMessageId}`);

        bot.pinChatMessage(channel, message.message_id)
        .then(()=>{
          console.log('Messase Pinned Succesfully');
        })
        .catch((error)=>{
          console.log('Error Pinning Message');
        });
      })
      
      .catch((error) => {
        console.error("Failed to send photo:", error);
      });
  });
}

schedulePhotoMessage(photo2500Usdt, caption2500Usdt, button2500Usdt, "0 1,5,9,13,17,21 * * *");
schedulePhotoMessage(photo100Usdt, caption100usdt, button100Usdt, "0 2,6,10,14,18,22 * * *");
schedulePhotoMessage(photo1000Trx, caption1000usdt, button1000Trx, "0 3,7,11,15,19,23 * * *");
schedulePhotoMessage(photo2000TrxDiscord, caption2000TrxDiscord, button2000TrxDiscord, "0 4,8,12,16,20,0 * * *");



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
//            { text:'Join 100 TRX giveaway', url:'https://giveaway.com/en/profile/cMuREW06yTurDfUq'},
//            { text:'Ongoing giveaways', url:'https://giveaway.com/en/profile/cMuREW06yTurDfUq'}
//         ],
//         [
//            { text:'Join Blackjack.fun', url:'https://blackjack.fun/'}
//         ],

//     ]

//     const options = messageButton(buttons);
//     bot.sendMessage(channel, message, options);
// }


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
// }, 50000);

// bot.on('polling', () => {
//     console.log('Bot is ready');
//   });


bot.on("polling_error", (error) => {
  console.log(error.code);
});
