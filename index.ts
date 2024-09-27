import { APP_URL, PORT, TELEGRAM_TOKEN } from "./constants";
import express, { Application } from "express";
import { Telegraf } from "telegraf";
const bot = new Telegraf(TELEGRAM_TOKEN);
console.log(bot, 'bot')
const app: Application = express();
app.use(express.static("static"));
app.use(express.json());
app.get("/", (_, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});
bot.command("start", (ctx) => {
  console.log(ctx, 'ctxxxxx')
  return ctx.reply(`Play Crypto Coin!`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: `Play Game`,
            web_app: { url: `${APP_URL}/` },
          },
        ],
      ],
    },
  });
});
bot.launch();
export default app;