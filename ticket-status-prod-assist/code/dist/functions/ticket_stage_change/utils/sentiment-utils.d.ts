import Sentiment from 'sentiment';
export declare function analyzeSentiment(messageText: string): Promise<Sentiment.AnalysisResult>;
export declare function sendSupportAlert(conversationID: string, alertMessage: string): Promise<void>;
