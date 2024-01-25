import {
    CommandInteraction,
    Client,
    ApplicationCommandOptionType,
    GuildChannelCreateOptions,
    ChannelType
} from "discord.js";

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
                    name: "	📖 Estudando",
                    value: "estudando"
                },
                {
                    name: '\uD83D\uDDE3\uFE0F Conversando',
                    value: "conversando",
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
        const sala = interaction.options.get('sala')?.value;
        const qtds = interaction.options.get('qtds')?.value;
        const categoryIdChannelVoices = "1145816560917815446";
        if (typeof (sala) !== "string" || typeof (qtds) !== "number") {
            return;
        }
        const channelOptions: GuildChannelCreateOptions = {
            type: ChannelType.GuildVoice,
            name: sala,
            userLimit: qtds,
            parent: categoryIdChannelVoices
        }

        const memberUserName = interaction.member?.user.username;
        const channel = await interaction.guild?.channels.create(channelOptions);

        const content = `sala é ${sala}, qtds é ${qtds}`;
        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
}