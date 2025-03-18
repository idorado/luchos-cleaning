'use server';

import { ElevenLabsClient } from 'elevenlabs';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function getTranscript(formData: FormData) {
  const file = formData.get('file') as File;
  const elevenlabs = new ElevenLabsClient();
  const transcript = await elevenlabs.speechToText.convert({ model_id: 'scribe_v1', file });
  return transcript.words.reduce((acc, word) => acc + word.text, '');
}

export async function generateCleaningChecklist(transcript: string) {
  const { text } = await generateText({
    model: google('gemini-2.0-flash-exp'),
    prompt: `Analyze the following audio and create a structured cleaning checklist. Include task categories, specific items to clean, and any special instructions. Format as JSON with categories, tasks, and notes fields: ${transcript}`
  });
  
  return text;
}
