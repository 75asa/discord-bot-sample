import { dotenv } from "./deps.ts";

dotenv.loadSync({
  export: true,
  envPath: ".env",
  examplePath: ".env.example",
});

const config = Deno.env.toObject();

export const ENV = {
  APP_ENV: config["APP_ENV"] || "local",
  DISCORD: {
    BOT_TOKEN: config["DISCORD_BOT_TOKEN"],
    GUILD_ID: config["DISCORD_GUILD_ID"],
  },
};

export const getEnv = (envName: string): string => {
  const envValue = Deno.env.get(envName);

  if (!envValue) {
    throw new Error(`No token: ${envName}`);
  }

  return envValue as string;
};
