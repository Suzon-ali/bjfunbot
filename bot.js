const TelegramBot = require('node-telegram-bot-api');
const token = '6153171374:AAGjzjNWdfsEzMELVUDGDENzmnEXgHTB-uA';
const codes = ['code1', 'code2', 'code3', 'code4', 'code5'];

const bot = new TelegramBot(token, { polling: true });

const channel = '-1001729594756';

function sendCode(code) {
    
    const inlineKeyboard = {
        inline_keyboard: [[{
            text: 'Join 100 TRX giveaway',
            url: 'https://google.com'
        }]]
    };
    
    const message = `<b>100 TRX Giveaway Code:</b>\n\n${code}\n\n<b>Next code is coming in 30 minutes</b>`;

    const options = {
        parse_mode: 'HTML',
        reply_markup: JSON.stringify(inlineKeyboard)
    };

    bot.sendMessage(channel, message, options);
}


console.log('Bot is starting...');

bot.once('ready', () => {
    console.log('Bot is ready');
    sendCode(codes[0]);
});

let index = 1; 
const interval = setInterval(() => {
    if (index >= codes.length) {
        clearInterval(interval);
        bot.sendMessage('-1001729594756', 'I am hungry! I need to eat some codes. I will back to you!');
        console.log('Bot is Stopping');
        bot.stopPolling();
        return;
    }
    
    sendCode(codes[index]);
    index++;
}, 5000 );





