import { setupWorker } from 'msw/browser';
import { handlers } from './handlers/boards';

export const worker = setupWorker(...handlers);
