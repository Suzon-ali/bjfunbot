

const token = "6153171374:AAGjzjNWdfsEzMELVUDGDENzmnEXgHTB-uA"; 
const channel = "-1001509151141"; // Replace with your channel name
const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

// Initialize the bot
const bot = new TelegramBot(token, { polling: true });

console.log("Bot is ready");


const webhookUrl = "https://your-render-app-name.onrender.com/your-webhook-endpoint";
bot.setWebHook(webhookUrl);

let userMessageCount = 0;
let previousMessageId = null;

// Function to send messages with inline buttons
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

// Define rules message
bot.onText(/\/rules/, (msg) => {
  const buttons = [
    [{ text: "Join Blackjack.fun", url: "https://blackjack.fun/" }],
  ];
  const options = messageButton(buttons);
  bot.sendMessage(msg.chat.id, rules, options);
});

// Function to send a photo message with a button
function sendPhotoWithText(chatId, photoPath, caption, buttons) {
  const options = {
    parse_mode: "HTML",
    caption: caption,
    reply_markup: JSON.stringify({ inline_keyboard: buttons }),
  };

  bot.sendPhoto(chatId, photoPath, options).then((message) => {
    previousMessageId = message.message_id;
  });
}

// Content to send
const photoHowJackWork = "https://talkimg.com/images/2023/11/01/tUI0G.png";
const captionHowJackWork = `<b>How does the new http://Blackjack.fun coin work?</b>\n\n<b>Here is the info you need to know:</b>\nhttps://blackjack.fun/jack-token\n💵 Get Rich With http://Blackjack.fun!`;

const buttonHowJackWork = [
  [
    { text: "Learn $Jack", url: "https://blackjack.fun/jack-token" },
    { text: "Twitter", url: "https://twitter.com/blackjack_fun" },
  ],
  [
    { text: "Discord", url: "https://discord.gg/JTPYPbq72m" },
    // Add more buttons to the second line if needed
  ],
];

// Send the initial message when the bot is started
sendPhotoWithText(channel, photoHowJackWork, captionHowJackWork, buttonHowJackWork);

// Listen for messages in the group
bot.on("message", (msg) => {
  console.log("entering userMessagecount");
  // Count messages from users
  if (msg.from && !msg.from.is_bot) {
    userMessageCount++;
    console.log(`${userMessageCount}`);
    if (userMessageCount >= 2 || !previousMessageId) {
      // Delete the previous bot message if it exists
      if (previousMessageId) {
        bot
          .deleteMessage(channel, previousMessageId)
          .then(() => {
            console.log(`Previous message deleted with ID: ${previousMessageId}`);
          })
          .catch((error) => {
            console.error("Error deleting previous message:", error);
          });
      }

      // Send a new message with the photo and buttons
      sendPhotoWithText(channel, photoHowJackWork, captionHowJackWork, buttonHowJackWork);
      userMessageCount = 0; // Reset the message count
    }
  }
});

// Delete messages starting with "/" but exclude exceptions
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // Log when a message is received
  console.log("Received message in chat:", chatId);
  console.log("Message text:", msg.text);
  console.log("Message ID:", msg.message_id);

  if (msg.text && msg.text.startsWith("/")) {
    const exceptions = [
      "/balance",
      "/send",
      "/price",
      "/tip",
      "/draw",
      "/rain",
      "/airdrop",
      "/giveaway",
      "/language",
      "/about",
      "/rules",
      "/setting",
      "/start",
      "/disclaimer",
    ];
    if (exceptions.some((exception) => msg.text.startsWith(exception))) {
      console.log("Exception message found");
    } else {
      bot.deleteMessage(chatId, msg.message_id).catch((error) => {
        console.error("Error deleting message:", error);
      });
      console.log("Message deleted");
    }
  } else {
    console.log(`No matching message found!`);
  }
});

bot.on("polling_error", (error) => {
  console.log(error.code);
});


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