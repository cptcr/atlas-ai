const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("get help"),

    async execute (interaction) {
        const embed = new EmbedBuilder()
        .setTitle("Help")
        .addFields({ name: "/chatgpt", value: "Chat with ChatGPT!", inline: false})
        .addFields({ name: "/image-generate", value: "Create an Image using the ChatGPT API", inline: false})
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1068935333649064017&permissions=116736&scope=bot%20applications.commands")

        await interaction.reply({ embeds: [embed] });
    }
}