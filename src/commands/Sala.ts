import {
    CommandInteraction,
    Client,
    ApplicationCommandOptionType,
    GuildChannelCreateOptions,
    Message,
    ChannelType,
    GuildVoiceChannelResolvable
} from "discord.js";

import { Command, CommandGuild } from "../Command";

export const Sala: CommandGuild = {
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
    run: async (client: Client, interaction: CommandInteraction, message: Message) => {
        const sala = interaction.options.get('sala')?.value;
        const qtds = interaction.options.get('qtds')?.value;
        const content = `sala é ${sala}, qtds é ${qtds}`;

        const channelOptions: GuildChannelCreateOptions = {
            name: "Testing",
            type: ChannelType.GuildVoice,
            userLimit: 2
        }

        // channel create 
        const channel = await interaction.guild?.channels.create(channelOptions);

        // part of code for move the user
        // message.member?.voice.setChannel();

        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
}