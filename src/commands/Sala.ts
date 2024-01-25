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
                    name: "📖 Estudando",
                    value: "📖 Estudando"
                },
                {
                    name: "🤙🏼 Conversando",
                    value: "🤙🏼 Conversando",
                },
                {
                    name: "🎮 Jogatina",
                    value: "🎮 Jogatina"
                },
                {
                    name: "💼 Trabalho",
                    value: "💼 Trabalho"
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
        const categoryIdChannelVoices = process.env.IDCATEGORY;
        if (typeof (sala) !== "string" || typeof (qtds) !== "number") {
            return;
        }
        if (qtds > 99) {
            await interaction.followUp({
                ephemeral: true,
                content: "> Você não pode criar uma sala com mais de 99 lugares por favor tente um número menor."
            })
        }
        if (qtds <= 1) {
            await interaction.followUp({
                ephemeral: true,
                content: "> Você não pode criar uma sala com 1 ou menos lugares."
            })
        }
        const channelOptions: GuildChannelCreateOptions = {
            type: ChannelType.GuildVoice,
            name: sala,
            userLimit: qtds,
            parent: categoryIdChannelVoices
        }

        await interaction.guild?.channels.create(channelOptions);
        await interaction.deleteReply();
    }
}