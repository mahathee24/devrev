/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

import ticket_stage_update from './functions/ticket_stage_change/index';
import { analyzeSentiment, sendSupportAlert } from './functions/ticket_stage_change/utils/sentiment-utils';
import { getPart, getPartOwnersString, ticketTimelineEntryCreate } from './functions/ticket_stage_change/utils/devrev-utils';
import handle_event from './functions/handle_event'

// Define functionFactory to include all available functions
export const functionFactory = {
  ticket_stage_update,          // Existing function
  analyzeSentiment,             // Sentiment analysis function
  sendSupportAlert,             // Send support alert function
  getPart,                      // Get part function
  getPartOwnersString,          // Get part owners string function
  ticketTimelineEntryCreate,    // Ticket timeline entry create function
  handle_event
} as const;

// Define a type for the function keys
export type FunctionFactoryType = keyof typeof functionFactory;
