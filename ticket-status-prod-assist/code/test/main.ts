import express from 'express';
import run from '../src/functions/ticket_stage_change/index.ts'
const app = express();
const port = 8003;

// Endpoint to test if server is running
app.get('/', (req, res) => {
  const events = [
    {
        type: "sentiment_analysis",
        payload: {
            conversation: {
                id: "12345",
                latest_message: {
                    text: "I am really frustrated with the service!"
                }
            }
        }
    },
    {
        type: "sla_tracker_created",
        payload: {
            sla_tracker: {
                status: "breached",
                conversation_id: "12345"
            }
        }
    },
    {
        type: "conversation_created",
        payload: {
            conversation: {
                id: "67890",
                latest_message: {
                    text: "How do I return this product?"
                }
            }
        }
    }
];

// Run the event handling
run(events);
  res.send('Server is running');
});

// Starting the server and adding error handling
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Error occurred:', err);
});
