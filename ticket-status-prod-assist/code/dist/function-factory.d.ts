import { analyzeSentiment, sendSupportAlert } from './functions/ticket_stage_change/utils/sentiment-utils';
import { getPart, getPartOwnersString, ticketTimelineEntryCreate } from './functions/ticket_stage_change/utils/devrev-utils';
export declare const functionFactory: {
    readonly ticket_stage_update: (events: any[]) => Promise<void>;
    readonly analyzeSentiment: typeof analyzeSentiment;
    readonly sendSupportAlert: typeof sendSupportAlert;
    readonly getPart: typeof getPart;
    readonly getPartOwnersString: typeof getPartOwnersString;
    readonly ticketTimelineEntryCreate: typeof ticketTimelineEntryCreate;
};
export type FunctionFactoryType = keyof typeof functionFactory;
