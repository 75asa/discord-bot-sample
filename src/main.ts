import { discord } from "./deps.ts";
import { Secret } from "./secret.ts";

const bot = discord.createBot({
  token: Secret.DISCORD_TOKEN,
  intents:
    discord.Intents.Guilds |
    discord.Intents.GuildMessages |
    discord.Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`);
    },
  },
});

const nekoCommand: discord.CreateSlashApplicationCommand = {
  name: "neko",
  description: "にゃーん",
};

await bot.helpers.createGuildApplicationCommand(nekoCommand, Secret.GUILD_ID);
await bot.helpers.upsertGuildApplicationCommands(Secret.GUILD_ID, [
  nekoCommand,
]);

bot.events.messageCreate = (b, message) => {
  if (message.content === "!neko") {
    b.helpers.sendMessage(message.channelId, {
      content: "にゃーん",
    });
  }
};

bot.events.interactionCreate = (b, interaction) => {
  console.log({ interaction });

  switch (interaction.data?.name) {
    case "neko":
      b.helpers.sendInteractionResponse(interaction.id, interaction.token, {
        type: discord.InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content: "にゃーん!!",
        },
      });
      break;
    default:
      break;
  }
};

await discord.startBot(bot);
