/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */
import ticket_stage_update from './functions/ticket_stage_change/index';
import { analyzeSentiment, sendSupportAlert } from './functions/ticket_stage_change/utils/sentiment-utils';
import { getPart, getPartOwnersString, ticketTimelineEntryCreate } from './functions/ticket_stage_change/utils/devrev-utils';
// Define functionFactory to include all available functions
export const functionFactory = {
    ticket_stage_update,
    analyzeSentiment,
    sendSupportAlert,
    getPart,
    getPartOwnersString,
    ticketTimelineEntryCreate, // Ticket timeline entry create function
};
