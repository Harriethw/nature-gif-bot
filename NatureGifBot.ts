import { Bot, InlineKeyboard } from "grammy";
import * as dotenv from 'dotenv'
import { randomIntFromInterval } from "./utils";
dotenv.config()

//Create a new bot
const bot = new Bot(process.env.TELEGRAM_API_KEY || "INSERT_API_KEY");

//This function would be added to the dispatcher as a handler for messages coming from the Bot API
bot.on("message", async (ctx) => {
  //Print to console
  console.log(
    `${ctx.from.first_name} wrote ${
      "text" in ctx.message ? ctx.message.text : ""
    }`,
  );

  await ctx.replyWithAnimation(`http://github.com/Harriethw/nature-gif-bot/blob/main/gifs/gif_${randomIntFromInterval(1,8)}.gif?raw=true`)
  await ctx.reply("Would you like another GIF? Reply to this message")
});

//Start the Bot
bot.start();
