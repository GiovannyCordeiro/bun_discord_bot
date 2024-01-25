import { Client } from "discord.js";

export default (client: Client): void => {
  client.on("voiceStateUpdate", async (oldState, newState) => {
    if (oldState.channel?.members.size == 0) {
      oldState.channel.delete();
    }
  });
}