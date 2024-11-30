import { analyzeSentiment, sendSupportAlert } from "./utils/sentiment-utils";  // Sentiment analysis utilities
import { getPart, getPartOwnersString, ticketTimelineEntryCreate } from "./utils/devrev-utils";  // DevRev utilities
import { sprintf } from "sprintf-js";

// Alert message for customer frustration
const FRUSTRATION_ALERT: string = `Alert: Customer frustration detected during the conversation. Immediate attention required.`;

// Function to handle SLA tracker events (sla_tracker_created, sla_tracker_updated)
async function handle_sla_tracker_event(event: any) {
    const slaStatus: string = event.payload.sla_tracker.status;
    const conversationID: string = event.payload.sla_tracker.conversation_id;

    // Check if SLA is breached or nearing breach
    if (slaStatus === "breached" || slaStatus === "nearing_breach") {
        console.log(`SLA breach or nearing breach detected for conversation ${conversationID}. Sending alert to support team.`);
        await sendSupportAlert(conversationID, FRUSTRATION_ALERT);
    }
}

// Function to handle conversation events (conversation_created, conversation_updated)
async function handle_conversation_event(event: any) {
    const messageText: string = event.payload.conversation.latest_message.text;
    const conversationID: string = event.payload.conversation.id;

    try {
        // Perform sentiment analysis on the latest message in the conversation
        const sentiment = await analyzeSentiment(messageText);

        // If negative sentiment detected, and score indicates frustration
        if (sentiment.score <= -0.7) {  // Use sentiment score directly
            console.log(`Frustration detected in conversation ${conversationID}. Sending alert to support team.`);
            await sendSupportAlert(conversationID, FRUSTRATION_ALERT);
        }
    } catch (error) {
        console.error("Error detecting frustration in conversation: ", error);
    }
}

// Function to handle sentiment analysis event (if needed separately)
const handle_sentiment_analysis_event = async (event: any) => {
    const messageText: string = event.payload.conversation.latest_message.text;
    const sentiment = await analyzeSentiment(messageText);
    console.log(`Sentiment of the message: score: ${sentiment.score}`);  // Log score, label is not available
};

// Main function to process all events
export const run = async (events: any[]) => {
    for (let event of events) {
        if (event.type === "sentiment_analysis") {
            await handle_sentiment_analysis_event(event);  // Handle sentiment analysis events
        } else if (event.type === "sla_tracker_created" || event.type === "sla_tracker_updated") {
            await handle_sla_tracker_event(event);  // Handle SLA tracker events
        } else if (event.type === "conversation_created" || event.type === "conversation_updated") {
            await handle_conversation_event(event);  // Handle conversation events
        }
    }
};

export default run;
