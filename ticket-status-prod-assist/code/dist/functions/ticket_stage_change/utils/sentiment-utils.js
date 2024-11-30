import Sentiment from 'sentiment';
// Create an instance of Sentiment
const sentiment = new Sentiment();
// Function to analyze sentiment of a message
export async function analyzeSentiment(messageText) {
    try {
        const result = sentiment.analyze(messageText); // Analyze sentiment
        // You can use the sentiment score to craft an alert message
        const sentimentScore = result.score;
        let alertMessage = '';
        if (sentimentScore > 0) {
            alertMessage = `Positive sentiment detected with score ${sentimentScore}. Please check the conversation.`;
        }
        else if (sentimentScore < 0) {
            alertMessage = `Negative sentiment detected with score ${sentimentScore}. Immediate attention required.`;
        }
        else {
            alertMessage = `Neutral sentiment detected. No immediate action required.`;
        }
        // Call sendSupportAlert with a sample conversation ID and the generated alert message
        const conversationID = '12345'; // Replace with actual conversation ID
        await sendSupportAlert(conversationID, alertMessage); // Ensure both args are passed
        return result; // Returning the sentiment analysis result
    }
    catch (error) {
        console.error("Error in sentiment analysis:", error);
        throw new Error("Failed to analyze sentiment");
    }
}
// Function to send an alert to the support team
export async function sendSupportAlert(conversationID, alertMessage) {
    try {
        // Here you would integrate the actual alert sending logic, like posting to DevRev API.
        // For now, it's just a mock:
        console.log(`Sending alert for conversation ${conversationID}: ${alertMessage}`);
        // You can implement this based on your alerting system (DevRev or any other).
        // Example: await ticketTimelineEntryCreate(conversationID, alertMessage, token);
    }
    catch (error) {
        console.error("Error sending support alert:", error);
        throw new Error("Failed to send support alert");
    }
}
