import { analyzeSentiment, sendSupportAlert } from "./ticket_stage_change/utils/sentiment-utils";

export const run = async (events: any[]) => {
    for (let event of events) {
       if (event.payload.conversation_updated)
       {
        const messages = event.payload.conversation_updated.conversation.messages
        let score = 0
        for (let message of messages)
        {
            const sentiment = await analyzeSentiment(message);
            score +=sentiment as unknown as  number


        }
        let alertMessage = ""
        if (score > 0) {
            alertMessage = `Positive sentiment detected with score ${score}. Please check the conversation.`;
        } else if (score < 0) {
            alertMessage = `Negative sentiment detected with score ${score}. Immediate attention required.`;
        } else {
            alertMessage = `Neutral sentiment detected. No immediate action required.`;
        }
        console.log(alertMessage)
       }
    
    }
};

export default run;