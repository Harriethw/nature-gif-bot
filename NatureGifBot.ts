import { Bot, InlineKeyboard } from "grammy";
import * as dotenv from 'dotenv'
import { randomIntFromInterval } from "./utils";
import { locations } from "./locations";
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

  const gifIndex = randomIntFromInterval(0,7)

  await ctx.replyWithLocation(locations[gifIndex][0],locations[gifIndex][1])
  await ctx.replyWithAnimation(`http://github.com/Harriethw/nature-gif-bot/blob/main/gifs/gif_${gifIndex}.gif?raw=true`)
  await ctx.reply("Reply to this message for more nature GIFs in your area.")
});

//Start the Bot
bot.start();
