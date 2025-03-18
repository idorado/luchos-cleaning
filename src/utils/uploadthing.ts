import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const createUploadthingAudio = async (audioStream: MediaStream) => {
  try {
    const recorder = new MediaRecorder(audioStream);
    const chunks: Blob[] = [];
    
    return new Promise<File>((resolve, reject) => {
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const file = new File([blob], `recording-${Date.now()}.webm`, { type: 'audio/webm' });
        resolve(file);
      };
      
      recorder.onerror = (e) => {
        reject(e);
      };
      
      recorder.start();
      setTimeout(() => recorder.stop(), 100);
    });
  } catch (error) {
    console.error("Error creating uploadthing audio:", error);
    throw error;
  }
};

// New function to handle pre-recorded audio blobs
export const createUploadthingAudioFromBlob = async (audioBlob: Blob) => {
  try {
    const file = new File([audioBlob], `recording-${Date.now()}.webm`, { 
      type: audioBlob.type || 'audio/webm' 
    });
    return file;
  } catch (error) {
    console.error("Error creating uploadthing audio from blob:", error);
    throw error;
  }
};

export const { useUploadThing, uploadFiles} = generateReactHelpers<OurFileRouter>();