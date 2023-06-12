const TelegramBot = require('node-telegram-bot-api');
const token = '6274800232:AAHzezsCCIygSbMTsdH1KX5fcvhQIm4vR4I';
const codes = [
    'o39551', 'j66571', 'f71871', 'm39291', 'p33881', 'w89811', 'k06241', 'o05321', 'q86941', 'v19711',
    'q75171', 'b23031', 'v71781', 'b45481', 'h50731', 'w27751', 'l56161', 'j07321', 't67631', 'j69441',
    'y52611', 'e22451', 'm21271', 'k77861', 'z63031', 'z12901', 'k98451', 'j28081', 'j05321', 'q73111',
    'o95181', 'i58031', 'w07421', 'g86981', 'g79951', 'x43881', 'p42711', 'k15861', 'g84211', 'm78221',
    'a67421', 'e77241', 'z20121', 'u38551', 'a89401', 'i61261', 'w47211', 'o66351', 's55701', 'c12881',
    'i82471', 's75371', 'j92321', 'x85721', 'm71691', 'w60131', 'y78231', 'o92831', 'u23691', 'u57231',
    'a88251', 'x63291', 'a47211', 'u50061', 'n45621', 'f33601', 'z33511', 'h66311', 'z50731', 'e25701',
    'l65701', 'y62321', 'x28261', 'g53771', 'l23571', 'j24091', 'k14851', 'v69651', 'v60681', 'y34771',
    'w26851', 'h79971', 'o50011', 'f17981', 'w28371', 'l21831', 't71681', 'o23841', 'k09861', 'a84371',
    'f02001', 'j90711', 'r78851', 'a20631', 'k40801', 'g76491', 'm14111', 'j34641', 'o84841', 'v74791'
  ];
  

const bot = new TelegramBot(token, { polling: true });

const channel = '-982567887';

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
}, 10000 );





