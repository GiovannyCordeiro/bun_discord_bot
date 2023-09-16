import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Say hello for user",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = `Hello user ${interaction.user.displayName}`;
        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
}