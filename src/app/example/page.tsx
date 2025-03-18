"use client";

import { useState, useRef } from "react";
import { createUploadthingAudioFromBlob, useUploadThing } from "@/utils/uploadthing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Square, Play } from "lucide-react";
import { google } from "@ai-sdk/google"
import { getTranscript } from '@/lib/actions/speechToText';
import { generateCleaningChecklist } from '@/lib/actions/speechToText';

export default function Home() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [transcript, setTranscript] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  
  // Move the hook to the component level
  const { startUpload, isUploading } = useUploadThing("audioUploader");

  const getFullTranscript = async () => {
    if (!audioBlob) return;
    
    // Use the new function that accepts a Blob directly
    const file = await createUploadthingAudioFromBlob(audioBlob);
    console.log(file);
    
    // Use startUpload from the hook that was called at the component level
    console.log(isUploading);
    const result = await startUpload([file]);
    console.log(result);

    // Create FormData to pass to server action
    const formData = new FormData();
    formData.append('file', file);
    
    // Get transcript from server action
    const fullTranscript = await getTranscript(formData);

    // Generate cleaning checklist from transcript
    const cleaningChecklist = await generateCleaningChecklist(fullTranscript);

    console.log(cleaningChecklist, "cleaning-checklist");
    setTranscript(cleaningChecklist);
  };    

  const startRecording = async () => {
    chunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Error accessing microphone. Please ensure you have granted permission.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Audio Recorder</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Button 
              onClick={startRecording} 
              disabled={recording}
              variant="default"
              size="lg"
              className="w-32"
            >
              <Mic className="mr-2 h-4 w-4" /> Record
            </Button>
            <Button 
              onClick={stopRecording} 
              disabled={!recording}
              variant="destructive"
              size="lg"
              className="w-32"
            >
              <Square className="mr-2 h-4 w-4" /> Stop
            </Button>
          </div>
          
          {audioBlob && (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3">
                <audio 
                  className="w-full" 
                  controls
                  src={URL.createObjectURL(audioBlob)}
                >
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English"
                    default
                  />
                  Your browser does not support the audio element.
                </audio>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  Recording saved - ready for transcript
                </p>
              </div>
              <Button 
                onClick={getFullTranscript} 
                disabled={isUploading}
                variant="outline"
                className="w-full"
              >
                <Play className="mr-2 h-4 w-4" />
                {isUploading ? "Processing..." : "Get Transcript"}
              </Button>
            </div>
          )}
          {transcript && (
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3">
              <pre className="whitespace-pre-wrap break-words text-sm">
                {transcript}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
