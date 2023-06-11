import { dotenv } from "./deps.ts";

const loadedEnv = dotenv.loadSync({
  export: true,
  envPath: ".env.local",
});

console.log({ loadedEnv });

export const Secret = {
  DISCORD_TOKEN: Deno.env.get("DISCORD_TOKEN")!,
  GUILD_ID: Deno.env.get("GUILD_ID")!,
};
