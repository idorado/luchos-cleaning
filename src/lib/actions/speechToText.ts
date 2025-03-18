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
  try {
    const { text } = await generateText({
      model: google('gemini-2.0-flash-exp'),
      temperature: 0.2, // Lower temperature for more structured output
      prompt: `You are a professional cleaning service AI. Analyze the following audio transcript and create a structured cleaning checklist.

You MUST return ONLY valid JSON with NO explanations or additional text. The JSON MUST follow this EXACT structure:

{
  "cleaning_checklist": {
    "bathrooms": [
      {
        "category": "Bathroom (size and details)",
        "tasks": ["task 1", "task 2"],
        "notes": "specific notes for this bathroom"
      }
    ],
    "bedrooms": [
      {
        "category": "Bedroom (size and details)",
        "tasks": ["task 1", "task 2"],
        "notes": "specific notes for this bedroom"
      }
    ],
    "general_notes": "Overall notes about the cleaning job"
  }
}

Based on the transcript, identify all rooms mentioned, their sizes if specified, and create appropriate cleaning tasks for each. Include specific cleaning instructions and notes for each room type. If a room type is not mentioned, include an empty array for that room type.

Transcript: ${transcript}`
    });
    
    // Clean the response to ensure it's valid JSON
    let cleanedText = text.trim();
    
    // Remove any markdown code block markers if present
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/^```json\n/, '').replace(/\n```$/, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```\n/, '').replace(/\n```$/, '');
    }
    
    // Remove any explanatory text before or after the JSON
    const jsonStartIndex = cleanedText.indexOf('{');
    const jsonEndIndex = cleanedText.lastIndexOf('}') + 1;
    
    if (jsonStartIndex >= 0 && jsonEndIndex > jsonStartIndex) {
      cleanedText = cleanedText.substring(jsonStartIndex, jsonEndIndex);
    }
    
    // Ensure the response is valid JSON
    const parsedResponse = JSON.parse(cleanedText);
    
    // Validate that the response has the expected structure
    if (!parsedResponse.cleaning_checklist) {
      throw new Error('Response missing cleaning_checklist property');
    }
    
    return cleanedText;
  } catch (error) {
    console.error('Failed to generate or parse cleaning checklist:', error);
    
    // Return a properly formatted fallback JSON
    return JSON.stringify({
      cleaning_checklist: {
        bathrooms: [],
        bedrooms: [],
        general_notes: "Could not generate a structured checklist. Please try again."
      }
    });
  }
}
