import { getEnv, ENV } from "./env.ts";

export const Secret = {
  APP_ENV: ENV.APP_ENV,
  DISCORD: {
    BOT_TOKEN: ENV.DISCORD.BOT_TOKEN,
    GUILD_ID: ENV.DISCORD.GUILD_ID,
  },
};
