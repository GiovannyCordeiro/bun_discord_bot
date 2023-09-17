import { CommandInteraction, Client, ApplicationCommandOptionType } from "discord.js";
import { Command } from "../Command";

export const Sala: Command = {
    name: "sala",
    description: "criar sala",
    options: [
        {
            name: "sala",
            description: "escolha o tipo da sala",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: "	\uD83D\uDCDA Estudando",
                    value: "estudando"
                },
                {
                    name: '\uD83D\uDDE3\uFE0F Conversando',
                    value: "conversando"
                }
            ]
        },
        {
            name: "qtds",
            description: "Quantidade de membros",
            type: ApplicationCommandOptionType.Number,
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        const sala = interaction.options.get('sala');
        const qtds = interaction.options.get('qtds');
        const content = `sala é ${sala?.value}, qtds é ${qtds?.value}`;

        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
}