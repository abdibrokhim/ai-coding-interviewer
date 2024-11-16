// app/api/text-to-speech/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('POST /api/text-to-speech');
    // Extract the text from the incoming request body
    const { text } = await request.json();
    console.log('user input:', text);

    if (!text || text.length === 0) {
      return NextResponse.json({ message: 'No text provided' }, { status: 400 });
    }

    // const ELEVENLABS_API_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
    // const ELEVENLABS_VOICE_ID = "EXAVITQu4vr4xnSDxMaL";
    const apiKey = process.env.NEXT_PUBLIC_AIML_API_KEY;

    // const apiResponse = await fetch(
    //   `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'xi-api-key': ELEVENLABS_API_KEY || '',
    //     },
    //     body: JSON.stringify({
    //       text,
    //       model_id: 'eleven_multilingual_v2',
    //       voice_settings: {
    //         stability: 0.5,
    //         similarity_boost: 0.75,
    //       },
    //     }),
    //   }
    // );


    const apiResponse = await fetch('https://api.aimlapi.com/tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, // Replace with your actual API key
      },
      body: JSON.stringify({
        model: '#g1_aura-asteria-en',  // Replace with your specific model if needed
        text: text
      })
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      return NextResponse.json(
        { message: errorData.message || 'Failed to fetch from ElevenLabs' },
        { status: apiResponse.status }
      );
    }

    // Get the audio response as a blob
    const audioBlob = await apiResponse.blob();
    const arrayBuffer = await audioBlob.arrayBuffer();

    // Return the binary audio file in the response
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'attachment; filename="audio.mp3"',
      },
    });
  } catch (error: any) {
    console.error('Error in /api/text-to-speech:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}