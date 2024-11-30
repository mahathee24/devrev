import * as dotenv from 'dotenv';
import { functionFactory, FunctionFactoryType } from '../function-factory';

export interface TestRunnerProps {
  functionName: FunctionFactoryType;
  fixturePath: string;
}

export const testRunner = async ({ functionName, fixturePath }: TestRunnerProps) => {
  const env = dotenv.config();

  // Log the environment variable (if needed for debugging purposes)
  console.info(env.parsed?.APP_SECRET_TEST);

  // Ensure the function exists in the functionFactory
  if (!functionFactory[functionName]) {
    console.error(`${functionName} is not found in the functionFactory`);
    console.error('Add your function to the function-factory.ts file');
    throw new Error('Function is not found in the functionFactory');
  }

  // Get the run function from the factory
  const run = functionFactory[functionName];

  // Load the fixture dynamically
  const eventFixture = require(`../fixtures/${fixturePath}`);

  // Extract arguments from the fixture or assign defaults (adjust based on the actual fixture data)
  const arg2 = eventFixture.arg2 || 'defaultArg2';  // Replace with actual argument data from the fixture
  const arg3 = eventFixture.arg3 || 'defaultArg3';  // Replace with actual argument data from the fixture

  // Call the run function with the event fixture and arguments
  await run(eventFixture, arg2, arg3);
};
