import { Client, Events, GatewayIntentBits } from "discord.js";

import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import userLeavesChannel from "./listeners/userLeavesChannel";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

ready(client);
interactionCreate(client);
userLeavesChannel(client);

client.login(process.env.DISCORD_TOKEN);