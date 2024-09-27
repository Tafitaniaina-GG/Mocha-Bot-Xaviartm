const config = {
    name: "tid",
    aliases: ["threadid"],
    version: "1.0.0",
    description: "Provides the thread ID",
    usage: "",
    category: "Members",
    credits: "Your Name"
};

async function onCall({ message }) {
    // Send the thread ID back as a reply
    message.reply(`Thread ID: ${message.threadID}`);
}

export default {
    config,
    onCall
};