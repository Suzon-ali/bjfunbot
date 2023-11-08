// const TelegramBot = require("node-telegram-bot-api");
// const cron = require("node-cron");
// const token = "6153171374:AAGjzjNWdfsEzMELVUDGDENzmnEXgHTB-uA";
// const bot = new TelegramBot(token, { polling: true });
// const channel = "-1001509151141";

// console.log("Bot is ready");

// //deleteMessage start

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;

//   // Log when a message is received
//   console.log("Received message in chat:", chatId);
//   console.log("Message text:", msg.text);
//   console.log("Message ID:", msg.message_id);

//   if (msg.text && msg.text.includes("/1000TRXGIVEAWAYCODE")) {
//     bot.deleteMessage(chatId, msg.message_id);
//     console.log("Message deleted");
//   } else {
//     console.log("No matching message found");
//   }
// });
// // Function to delete old messages
// function deleteOldMessages(chatId) {
//   bot.getChat(chatId).then((chatInfo) => {
//     const messageCount = chatInfo.message_count;
//     const messagesToDelete = [];

//     for (let i = 1; i <= messageCount; i++) {
//       bot.getMessage(chatId, i).then((message) => {
//         if (message.text && message.text.includes("/1000TRXGIVEAWAYCODE")) {
//           messagesToDelete.push(message.message_id);
//         }
//       });
//     }

//     // Delete the identified messages
//     messagesToDelete.forEach((messageId) => {
//       bot.deleteMessage(chatId, messageId);
//       console.log("Old message deleted:", messageId);
//     });
//   });
// }
// // Call deleteOldMessages for the chat you want to clean
// deleteOldMessages(channel);

// //deleteMessage end

// function messageButton(buttons) {
//   const inlineKeyboard = {
//     inline_keyboard: buttons,
//   };

//   const options = {
//     parse_mode: "HTML",
//     reply_markup: JSON.stringify(inlineKeyboard),
//   };

//   return options;
// }

// const rules =
//   "Respectful Behavior\nNo Spamming\nStay On Topic\nProtect Personal Information\nNo NSFW Content\nNo Hate Speech or Offensive Content\nUse Only English Language";

// bot.onText(/\/rules/, (msg) => {
//   const buttons = [
//     [{ text: "Join Blackjack.fun", url: "https://blackjack.fun/" }],
//   ];
//   const options = messageButton(buttons);
//   bot.sendMessage(msg.chat.id, rules, options);
// });

// function sendPhotoWithText(chatId, photoPath, caption, button) {
//   bot.sendPhoto(chatId, photoPath, {
//     caption: caption,
//     parse_mode: "HTML",
//     ...button,
//   });
// }

// const photo2500Usdt =
//   "https://resource.cwallet.com/activity/2023May/9792fa733afb567d564136b2a4c18202.png";
// const photo100Usdt =
//   "https://resource.cwallet.com/activity/2023May/c0755d3a284450a69e6b0cfc858c6889.png";
// const photo1000Trx =
//   "https://resource.cwallet.com/activity/2023May/255cde7d3cef07200873f8242394268f.png";
// const photo2000TrxDiscord =
//   "https://resource.cwallet.com/activity/2023June/e055168290b0bd810fb3482624194a09.png";

// const caption2500Usdt = `<b>Win a share of the 2,500$ USDT prize pool! 💵</b>\n\n<b>🏆Prizes distribution:</b>\n\n500$ to 1 lucky winner\n100$ to 20 lucky winners`;
// const caption100usdt = `<b>Win 100 USDT by making at least 5usd worth of crypto deposit.</b>\n\n<b>🏆Prizes distribution:</b>\n\n100$ to 1 lucky winner`;
// const caption1000usdt = `<b>We are excited to announce that we are giving away 1000 TRX tokens to 1 lucky winner.</b>\n\n<b>🏆Prizes distribution:</b>\n\n1000 TRX to 1 lucky winner`;
// const caption2000TrxDiscord = `<b>We are excited to announce that we are giving away 2000 TRX Discord Giveaway.</b>\n\n<b>🏆Prizes distribution:</b>\n\n2000 TRX to 2000 people`;

// const button2500Usdt = [
//   [{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/zNx667lVlgU" }],
// ];
// const button100Usdt = [
//   [{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/tMS8mu8kcu0" }],
// ];
// const button1000Trx = [
//   [{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/gwXRwAtn7eG" }],
// ];
// const button2000TrxDiscord = [
//   [{ text: "Join Now 🚀🚀🚀", url: "https://giveaway.com/en/CHaPgvtLbxq" }],
// ];

// // let previousMessageId = null; // Variable to store the previous message ID

// // function deletePhotoMessage(chatId, messageId) {
// //   bot.deleteMessage(chatId, messageId)
// //     .then(() => {
// //       console.log(`Previous message deleted with ID: ${messageId}`);
// //     })
// //     .catch((error) => {
// //       console.error("Failed to delete previous message:", error);
// //     });
// // }

// function schedulePhotoMessage(photoPath, caption, button, cronExpression) {
//   cron.schedule(cronExpression, () => {
//     const options = {
//       parse_mode: "HTML",
//       reply_markup: JSON.stringify({ inline_keyboard: button }),
//     };

//     // Delete previous message if available
//     // if (previousMessageId !== null) {
//     //   deletePhotoMessage(channel, previousMessageId);
//     // }

//     // Send new photo message
//     bot
//       .sendPhoto(channel, photoPath, { caption, ...options })
//       .then((message) => {
//         previousMessageId = message.message_id; // Store the new message ID
//         console.log(`Photo sent successfully with ID: ${previousMessageId}`);

//         bot
//           .pinChatMessage(channel, message.message_id)
//           .then(() => {
//             console.log("Messase Pinned Succesfully");
//           })
//           .catch((error) => {
//             console.log("Error Pinning Message");
//           });
//       })

//       .catch((error) => {
//         console.error("Failed to send photo:", error);
//       });
//   });
// }

// schedulePhotoMessage(
//   photo2500Usdt,
//   caption2500Usdt,
//   button2500Usdt,
//   "0 1,5,9,13,17,21 * * *"
// );
// schedulePhotoMessage(
//   photo100Usdt,
//   caption100usdt,
//   button100Usdt,
//   "0 2,6,10,14,18,22 * * *"
// );
// schedulePhotoMessage(
//   photo1000Trx,
//   caption1000usdt,
//   button1000Trx,
//   "0 3,7,11,15,19,23 * * *"
// );
// schedulePhotoMessage(
//   photo2000TrxDiscord,
//   caption2000TrxDiscord,
//   button2000TrxDiscord,
//   "0 4,8,12,16,20,0 * * *"
// );

// bot.on("polling_error", (error) => {
//   console.log(error.code);
// });
