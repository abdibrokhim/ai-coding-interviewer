# Let's build Startup. Step-by-Step Tutorial on Building AI Coding Interviewer (e.g., PrepAlly) with AI/ML API and Integration with Clerk Auth and Deploying to Vercel

<details>
<summary>⬇️ Table of Contents ⬇️</summary>

- [Introduction](#introduction)
  - [AI/ML API](#aiml-api)
  - [Judge0 from RapidAPI](#judge0-from-rapidapi)
  - [Next.js](#nextjs)
  - [Tailwind CSS](#tailwind-css)
  - [Clerk Auth](#clerk-auth)
  - [Vercel](#vercel)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Create a New Next.js Project](#create-a-new-nextjs-project)
  - [API Routes](#api-routes)
  - [Clerk Auth](#clerk-auth)
  - [PrepAlly Interface](#prepally-interface)
    - [Code Editor](#code-editor)
    - [Language Selector](#language-selector)
    - [Coding Problems List](#coding-problems-list)
    - [Code Execution Button and Log](#code-execution-button-and-log)
    - [FontAwesome Icons](#fontawesome-icons)
    - [Assembling the PrepAlly Interface](#assembling-the-prepally-interface)
    - [Notifications](#notifications)
    - [Code Compilation](#code-compilation)
    - [Execution and Chat Logs](#execution-and-chat-logs)
    - [Speech Recognition](#speech-recognition)
    - [API Integration](#api-integration)
    - [Prompt Engineering](#prompt-engineering)
  - [Code Compilation](#code-compilation)
  - [Environment Variables](#environment-variables)
  - [Run Locally](#run-locally)
  - [Deploying to Vercel](#deploy-to-vercel)
- [Hype it up!](#hype-it-up)
  - [ProductHunt](#producthunt)
  - [X](#x)
- [Conclusion](#conclusion)
  - [Other interesting tutorials](#other-interesting-tutorials)
  - [Try what you have built so far](#try-what-you-have-built-so-far)
  - [Helpful GPTs](#helpful-gpts)
- [Bonus](#bonus) 🦄

</details>


## Introduction

In this tutorial we'll build a web application called AI Coding Interviewer (e.g., **`PrepAlly`**) that helps candidates prepare for coding interviews.

Well, okey, but why? 🤔

Current tools offer practice but fall short of providing the interactive, AI-driven insights candidates need to feel truly prepared. Interviews are still notoriously stressful, leaving candidates feeling unprepared despite available resources. PrepAlly changes that by delivering real-time feedback and personalized insights, empowering candidates with the confidence and readiness to ace their interviews.

> you: it seems like at the end of the tutorial, we'll have a real startup, right? 🐐

> me: exactly, let's cook something people want! 🦄

To build the AI Coding Interviewer, we'll use the following technologies: *AI/ML API*, *React*, *Next.js*, *Tailwind CSS*, *Clerk Auth*, *Vercel*, and *Judge0* from RapidAPI. They all are nice to get started with MVP. 

> how everything is connected? 🤔

Both frontend and backend will be built using `React`, and `Next.js`, a `React` framework that enables server-side rendering and static site generation. We'll use `Tailwind CSS` to properly *style* the application and make it look good to convince the users to use our product. Also for API routes we'll use Next API routes. No need to setup a separate server. 🔥

> Nice strategy, right? 🚀 

We'll use `Clerk` to handle user authentication and authorization in the application. This will allow us to create a secure and user-friendly experience for our users. Setting up Clerk is super easy & peasy. 🍭

> it's a must-have feature for any web application. 🛡️

We'll also use `Judge0` from *RapidAPI* to provide online code execution capabilities in the application. This will allow users to run their code and get real-time feedback on their coding skills. It's free *almost 😂

> it's a game-changer for coding interview preparation. 🎯

Hey, wait! What about `AI/ML API`? 🤔

The most exciting part of this project is the integration with *AI/ML API*, a platform that provides access to over 200 state-of-the-art AI models. We'll use AI/ML API to power the AI-driven insights in the application, providing candidates with personalized feedback and recommendations to improve their coding skills. We'll be using two models from AI/ML API: 
* **`GPT-4o`**: for delivering real-time feedback and personalized insights. 🤖 [Learn more](https://openai.com/index/hello-gpt-4o/)
* **`Deepgram Aura`**: the first text-to-speech (TTS) AI model designed for real-time, conversational AI agents and applications. It delivers human-like voice quality with unparalleled speed and efficiency, making it a game-changer for building responsive, high-throughput voice AI experiences. 🔉 [Learn more](https://aimlapi.com/models/aura)

> sis (bro), ai/ml api uptime is 99.99% and it's super fast! 💨

Finally, we'll deploy the application to `Vercel`, a cloud platform for deploying and hosting web applications. This will make the application accessible to users worldwide and ensure a smooth user experience. You can also connect your custom domain to Vercel. 🌍

It'll be a really comprehensive tutorial that covers everything from setting up the project to **hyping** it up on *ProductHunt* and *X (prev. Twitter)*. 🚀 

> it'll be pretty fun tho! 🙈

So, let's get started! 🚀

### AI/ML API

AI/ML API is a game-changing platform for developers and SaaS entrepreneurs looking to integrate cutting-edge AI capabilities into their products. It offers a single point of access to over 200 state-of-the-art AI models, covering everything from NLP to computer vision.

Key Features for Developers:

* Extensive Model Library: 200+ pre-trained models for rapid prototyping and deployment. 📚
* Customization Options: Fine-tune models to fit your specific use case. 🎯
* Developer-Friendly Integration: RESTful APIs and SDKs for seamless incorporation into your stack. 🛠️
* Serverless Architecture: Focus on coding, not infrastructure management. ☁️

> Get Started for FREE ($0 US dollars): [Click me, let's Cook!](https://aimlapi.com/?via=ibrohim) 🧑‍🍳

> `A$AP`; Use the code `IBROHIMXAIMLAPI` for 1 week FREE Access [Let's get started!](https://aimlapi.com/?via=ibrohim) 😱

> Deep Dive into AI/ML API Documentation (very detailed, can’t agree more): [Click me, to get started](https://docs.aimlapi.com/) 📖

Here's a brief tutorial: [How to get API Key from AI/ML API. Quick step-by-step tutorial with screenshots for better understanding.](https://medium.com/@abdibrokhim/how-to-get-api-key-from-ai-ml-api-225a69d0bb25)

### Judge0 from RapidAPI

Judge0 is a robust, scalable, and open-source online code execution system that can be used to build a wide range of applications that need online code execution features. Some examples include competitive programming platforms, e-learning platforms, candidate assessment and recruitment platforms, online code editors, online IDEs, and many more.

> The full API documentation is available [here](https://ce.judge0.com).

### Next.js

Next.js is a React framework that enables server-side rendering and static site generation for React applications. It provides a range of features that make it easier to build fast, scalable, and SEO-friendly web applications.

> ps: I just love Next.js, it's my go-to framework for building React applications. 🚀

> Documentation: [Next.js](https://nextjs.org/docs/getting-started)

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that makes it easy to build custom designs without writing custom CSS. It provides a range of utility classes that can be used to style elements directly in the HTML.

> Documentation: [Tailwind CSS](https://tailwindcss.com/docs)

### Clerk Auth

Clerk is an authentication platform that provides a range of features for managing user authentication and authorization in web applications. It offers a range of features, including social login, multi-factor authentication, and user management.

> Documentation: [Clerk](https://docs.clerk.dev/)

Here's a brief tutorial on: [How to create account on Clerk and setup new project](https://medium.com/@abdibrokhim/how-to-create-account-on-clerk-and-setup-a-new-project-532be3545642)

### Vercel

Vercel is a cloud platform to deploy and host web applications. It offers a range of features, including serverless functions, automatic deployments, and custom domains.

> Documentation: [Vercel](https://vercel.com/docs)

Here's a brief tutorial: [How to Deploy Apps to Vercel with ease](https://medium.com/@abdibrokhim/how-to-deploy-apps-to-vercel-with-ease-93fa0d0bb687)


## Prerequisites

Before we get started, make sure you have the following installed on your machine:

* [Node.js](https://nodejs.org/). Here's a short tutorial on [How to setup Node.js on my computer with ease.](https://medium.com/@abdibrokhim/how-to-setup-node-js-on-my-computer-with-ease-b5fe9b766513)
* [npm or yarn](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [AI/ML API Key](https://aimlapi.com/?via=ibrohim). Here's a tutorial on [How to get API Key from AI/ML API](https://medium.com/@abdibrokhim/how-to-get-api-key-from-ai-ml-api-225a69d0bb25)
* [Clerk Auth Account](https://clerk.com/). Here's a brief tutorial on: [How to create account on Clerk and setup new project](https://medium.com/@abdibrokhim/how-to-create-account-on-clerk-and-setup-a-new-project-532be3545642)
* [Vercel Account](https://vercel.com/). Here's a brief tutorial on: [How to create account on Vercel](https://medium.com/@abdibrokhim/how-to-deploy-apps-to-vercel-with-ease-93fa0d0bb687)
* [Judge0 API Key](https://rapidapi.com/judge0-official/api/judge0-ce); i will show you how to get it later. (upd: jump to [Judge0 from RapidAPI](#code-compilation))

## Getting Started

### Create a New Next.js Project

Let's get started by creating a new Next.js project:

```bash
npx create-next-app@latest
```

It will ask you a few *simple questions:

What is your project named? Here, you should enter your app name. For example: `PrepAlly` (or whatever you wish). For the rest of the questions, simply hit enter:

Here’s what you’ll see:
```bash
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
```

Open your project with Visual Studio Code:

```bash
cd PrepAlly
code .
```

### API Routes

The first thing first, let's deal with API routes.

Create a new folder called `api` in the root of your project. Inside the `api` folder, create two new folders; `query-gpt` and `text-to-speech`. 

> Quick info: `query-gpt` will be used to query the GPT-4o model from the AI/ML API. It acts like a real interviewer, providing feedback, insights, and answers to questions. `text-to-speech` will convert text to speech using the Deepgram Aura model from the AI/ML API, simulating the experience of interacting with a real human interviewer.

Enter the `query-gpt` folder and create a new file called `route.ts`. Put the following code in the file:

```typescript
// app/api/query-gpt/route.ts
import { NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_AIML_API_KEY;

export async function POST(request: Request) {
    try {
        console.log("POST /api/query-gpt");
        const { messages } = await request.json();
        console.log("input data: ", messages);

        // Make the API call to the external service
        const response = await fetch("https://api.aimlapi.com/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: messages,
                max_tokens: 512,
            }),
        });

        if (!response.ok) {
            // If the API response isn't successful, return an error response
            return NextResponse.json({ error: "Failed to fetch completion data" }, { status: response.status });
        }

        const data = await response.json();
        console.log("output data: ", data);
        const assistantResponse = data.choices[0]?.message?.content || "No response available";
        console.log("assistantResponse: ", assistantResponse);

        // Return the assistant's message content
        return NextResponse.json({ message: assistantResponse });
    } catch (error) {
        console.error("Error fetching the data:", error);
        return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
    }
}
```

> **A$AP**; Use the code `IBROHIMXAIMLAPI` for 1 week FREE Access [Let's get started, bruh!](https://aimlapi.com/?via=ibrohim) 


Next, enter the `text-to-speech` folder and create a new file called `route.ts`. Put the following code in the file:

```typescript
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

    const apiKey = process.env.NEXT_PUBLIC_AIML_API_KEY;

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
```

> **A$AP**; Use the code `IBROHIMXAIMLAPI` for 1 week FREE Access [Let's get started, bruh!](https://aimlapi.com/?via=ibrohim) 


Don't hurry up! We should temporarily save the `audio file` to play it later. So, the easiest way is thro using `IndexedDB`. Let's create a new file called `utils/indexdb.js` in the `text-to-speech` folder:

```javascript
export const openVoiceDatabase = async () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('audioDatabase', 1);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore('audios', { keyPath: 'id' });
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
}
  
export const saveAndPlayAudio = async (blob) => {
    const db = await openVoiceDatabase();
    const audioId = 'audio_' + Date.now();
  
    // Save to IndexedDB
    await new Promise((resolve, reject) => {
      const transaction = db.transaction(['audios'], 'readwrite');
      const store = transaction.objectStore('audios');
      const request = store.put({ id: audioId, audio: blob });
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  
    // Create URL and play
    const audioURL = URL.createObjectURL(blob);
    const audio = new Audio(audioURL);
    audio.play();
  
    // Cleanup after playback
    audio.addEventListener('ended', async () => {
      URL.revokeObjectURL(audioURL);
      const transaction = db.transaction(['audios'], 'readwrite');
      const store = transaction.objectStore('audios');
      store.delete(audioId);
      console.log('Audio deleted from IndexedDB after playback.');
    });
}
```

> whoa! 🤤

We have done with API routes. To sum up:

Above stuff (source code) demonstrates how to organize API routes in a project, enabling seamless interactions with external AI/ML APIs. Here's a brief explanation of how the pieces follow and complement each other:

1. **API Folder Structure**: 
   - The `api` folder serves as the root for organizing the application's API endpoints. Inside it, two subfolders (`query-gpt` and `text-to-speech`) group related functionalities. Each subfolder corresponds to a specific feature (querying a model or converting text to speech).

2. **`query-gpt` Route**:  
   - The `route.ts` file in the `query-gpt` folder defines the `/api/query-gpt` endpoint.  
   - This endpoint processes incoming POST requests with a `messages` payload, forwards them to the GPT-4o model using the AI/ML API, and returns the AI's response.  
   - Key Highlights:
     - Handles API authentication using a key from environment variables.
     - Manages errors gracefully, returning appropriate status codes and messages.

3. **`text-to-speech` Route**:
   - The `route.ts` file in the `text-to-speech` folder defines the `/api/text-to-speech` endpoint.  
   - It accepts a `text` payload, forwards it to the AI/ML API to generate audio, and returns the audio file.  
   - Key Highlights:
     - Validates the input text and handles edge cases like empty inputs.
     - Responds with audio as a binary file, including metadata like filename and content type.
     - Incorporates error handling with detailed feedback.

4. **IndexedDB Utility for Audio**:
   - The `utils/indexdb.js` file provides functions for managing audio playback using IndexedDB.  
   - It addresses the need to temporarily save and play audio files locally before cleaning up.  
   - Key Functions:
     - `openVoiceDatabase()`: Opens or initializes an IndexedDB instance for storing audio files.
     - `saveAndPlayAudio(blob)`: Saves an audio blob to the database, plays it, and deletes it post-playback.

5. **Integration Flow**:
   - The `/api/query-gpt` endpoint acts as the "brains" of the interaction, providing intelligent responses.
   - The `/api/text-to-speech` endpoint transforms these responses into human-like audio.
   - The IndexedDB utility ensures the audio files are efficiently managed, enabling smooth playback without persisting unnecessary data.

If you want more tutorials with `IndexedDB` and `text-to-speech` stuff. Kindly check this tutorial: [Building a Chrome Extension from Scratch with AI/ML API, Deepgram Aura, and IndexedDB Integration](https://dev.to/abdibrokhim/building-a-chrome-extension-from-scratch-with-aiml-api-deepgram-aura-and-indexeddb-integration-25hd)

Now, let's move on to the next step.

### Clerk Auth

Before we move on, let's set up the Clerk Auth for our application. Make sure you already set up a project on Clerk and have the API keys. If not, here's a brief tutorial on: [How to create account on Clerk and setup new project](https://medium.com/@abdibrokhim/how-to-create-account-on-clerk-and-setup-a-new-project-532be3545642)

Install `@clerk/nextjs`. The package to use with Clerk and NextJS.

```bash
npm install @clerk/nextjs
```

Set your environment variables. Add these keys to your `.env.local` or create the file if it doesn't exist. Retrieve these keys anytime from the API keys page.
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

Update `middleware.ts` . Update your middleware file or create one at the root of your project or `src/` directory if you're using a `src/` directory structure. The `clerkMiddleware` helper enables authentication and is where you'll configure your protected routes.
```typescript
// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
```

Add `ClerkProvider` to your app. All Clerk hooks and components must be children of the `ClerkProvider` component. You can control which content signed in and signed out users can see with Clerk's prebuilt components.

Open `app/layout.tsx`, add the following code:

```typescript
// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import the ClerkProvider component
import {
  ClerkProvider,
} from '@clerk/nextjs';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Coding Interview",
  description: "AI Coding Interview is a platform that delivers real-time feedback and personalized insights, empowering candidates with the confidence and readiness to ace their interviews.",
};

// Wrap your app in the ClerkProvider component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
  );
}
```

Great! Now, we have set up the Clerk Auth for our application. But, we need to create a few more components to handle the authentication flow. For example: `sign-in` and `sign-up` components.

Let's enter `app` and create a new two files exactly same as this: 
```bash
sign-in/[[...sign-in]]/page.tsx
sign-up/[[...sign-up]]/page.tsx
```
> ps: Otherwise it won't work.

Now update `page.tsx` files with the following code corresponding to each file:

```typescript
// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 relative text-white">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <SignIn />
      </div>
    </div>
  )
}
```
and,

```typescript
// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 relative text-white">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <SignUp />
      </div>
    </div>
  );
}
```

### PrepAlly Interface

Let's setup the necessary components for the PrepAlly interface. We'll create the following components:
1. [Code Editor Window](#code-editor)
2. [Language Selector/Dropdown](#language-selector)
3. [Coding Problems List](#coding-problems-list)
4. [Code Execution Button and Log](#code-execution-button-and-log)
5. [FontAwesome Icons](#fontawesome-icons)
6. [Assembling the PrepAlly Interface](#assembling-the-prepally-interface)



#### Code Editor

We'll use the `Monaco Editor for React`. It's a well-known web technology based code editor that powers `VS Code`. [Learn more](https://www.npmjs.com/package/@monaco-editor/react).

Install the package:

```bash
npm install @monaco-editor/react
```

Create a new file called `CodeEditorWindow.jsx` in the `components` folder and add the following code:

```typescript
// components/CodeEditorWindow.jsx
import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code }) => {
  const handleEditorChange = (value) => {
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl w-[80%]">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "python"}
        value={code}
        defaultValue="# some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
```

#### Language Selector

Next, let's create a language selector component. This component will allow users to select the programming language they want to use in the code editor.

Create a new file called `LanguagesDropdown.jsx` in the `components` folder and add the following code:

```javascript
//components/LanguagesDropdown.jsx
import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      instanceId="language"
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[2]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
```

Now, let's create a `constants` folder in the root of the project and add a new file called `languageOptions.js` with the following code:

```javascript
export const languageOptions = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  },
  {
    id: 43,
    label: "Plain Text",
    name: "Plain Text",
    value: "text",
  },
  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    value: "python",
  },
];
```

> two languages are enough for now. 🤓 refer to `/app/constants/languageOptions.js` for other languages.

#### Coding Problems List

Next, let's create a component to display a list of coding problems. This component will allow users to select a problem to solve.

Create a new file called `ProblemDropdown.tsx` in the `components` folder and add the following code:

```javascript
// components/ProblemDropdown.tsx
import React from "react";
import Select from "react-select";
import { customStyles } from "../../constants/customStyles";
import { problemsList } from "../../constants/problemsList";

const ProblemDropdown = ({ onSelectChange } : any) => {
  return (
    <Select
      instanceId="problemDropdown"
      placeholder={`Filter By Problem`}
      options={problemsList}
      styles={customStyles}
      defaultValue={problemsList[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default ProblemDropdown;
```

Great! Now enter the `constants` folder and create a new file called `problemsList.ts` and add the following code:

```javascript
// constants/problemsList.ts
export const problemsList = [
    {
        id: 1,
        name: "Biggest Difference",
        label: "Biggest Difference",
        difficulty: "Easy",
        value: 
`
# Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. 

# biggest_diff([10, 3, 5, 6]) => 7
# biggest_diff([7, 2, 10, 9]) => 8
# biggest_diff([2, 10, 7, 2]) => 8

def biggest_diff(nums):
`
    },
    {
        id: 2,
        name: "Biggest Difference",
        label: "Cat & Doog",
        difficulty: "Easy",
        value:
`
# Return True if the string "cat" and "dog" appear the same number of times in the given string.

# cat_dog('catdog') => True
# cat_dog('catcat') => False
# cat_dog('1cat1cadodog') => True

def cat_dog(s):
`
    },
    {
        id: 3,
        name: "Biggest Difference",
        label: "Sum 78",
        difficulty: "Easy",
        value:
`
# Write a function to return the sum of the numbers in the given array 'nums', except ignore sections of numbers starting with a 7 and extending to the next 8 (every 7 will be followed by at least one 8). 
# Return 0 for no numbers.

# sum78([1, 2, 2]) => 5
# sum78([1, 2, 2, 7, 99, 99, 8]) => 5
# sum78([1, 1, 7, 8, 2]) => 4

def sum78(nums):
`
    }
];
```

> where did i get these problems? answer is here [topmate.io/abdibrokhim](https://topmate.io/abdibrokhim/1291434/pay)

A little bit customization for the `customStyles`. It's pretty similar as writing CSS in `styles.css` file but in a more structured way.

```javascript
// constants/customStyles.ts
export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "5px",
    color: "#000",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    border: "2px solid #000000",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      width: "100%",
      background: "#fff",
      ":hover": {
        backgroundColor: "rgb(243 244 246)",
        color: "#000",
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#fff",
      maxWidth: "14rem",
      border: "2px solid #000000",
      borderRadius: "5px",
      boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
    };
  },
};
```

#### Code Execution Button and Log

Next, let's create a component for the code execution button. This component will allow users to run their code and get real-time feedback.

Create a new file called `RunButton.tsx` in the `components` folder and add the following code:

```javascript
// components/RunButton.tsx
import React from "react";
import { classnames } from "../utils/general";
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RunButton = ({ handleCompile, code, processing }) => {
    return (
        <button
            onClick={handleCompile}
            disabled={!code}
            className={classnames(
            "border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
            !code ? "opacity-50" : ""
            )}
        >
            {processing ? "Running... " : "Run "} <FontAwesomeIcon icon={faRocket} />
      </button>
    )
}
    
export default RunButton;
```

Here we can `classnames` utility function to conditionally apply CSS classes based on the state of the button.

```javascript
// utils/general.js
export const classnames = (...args) => {
  return args.join(" ");
};
```

However, we can also achieve the same result w/o extra utility function. Simply:
    
```javascript
className={`border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 ${!code ? "opacity-50" : ""}`}
```

Next, let's create a component for the code execution log. This component will display the output of the code execution.

Create a new file called `OutputWindow.jsx` in the `components` folder and add the following code:

```javascript
// components/OutputWindow.jsx
import React from "react";
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <>
      <div className="flex items-center justify-between border-b">
        <div className="font-normal px-4 py-2 text-md bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
          Execution Log {<FontAwesomeIcon icon={faTerminal} />}
        </div>
        {/* <button className="text-md">Close</button> */}
      </div>
      <div className="w-full bg-white px-2 mt-4 rounded-md text-black font-normal text-sm overflow-y-auto">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default OutputWindow;
```

In addition, let's also add output details such as; `status`, `memory`, and `time`.

Create>Enter `OutputDetails.jsx` in the `components` folder and add the following code:

```javascript
// components/OutputDetails.jsx
import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container px-4 mt-6 flex flex-col space-y-3">
      <p className="text-xs">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-xs">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-xs">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
```

#### FontAwesome Icons

If you closely look at the code, we are using `Font Awesome` icons. They are so nice. [Learn more](https://docs.fontawesome.com/web/use-with/react). Install it by running the following command:

```bash
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest
```

Well, okey! Let's build the UI for the PrepAlly interface. 


#### Assembling the PrepAlly Interface

Create a new file called `PrepAlly.tsx` in the `pages` folder. And quickly import the necessary components:

```typescript
// pages/PrepAlly.tsx
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { languageOptions } from "../constants/languageOptions";
import { problemsList } from "../constants/problemsList";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import defineTheme from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import ProblemDropdown from "./problems/ProblemDropdown";
import RunButton from "./RunButton";

import { saveAndPlayAudio } from '../api/text-to-speech/utils/indexdb.js';

import { faClosedCaptioning, faMicrophone, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loader from '../lib/loader';
import weiImage from '../assets/wei.jpeg';
import './styles.css';
import { useUser } from '@clerk/nextjs';
import { classnames } from "../utils/general";
```

Also don't forget to add `'use client'` to the top of the file. It's a new feature in Next.js that allows you to use the client-side API in your server-side code.

#### Notifications

Notifications are important. Let's create a few functions to show *success*, *error*, and *info* messages using `react-toastify`.

Install the package:

```bash
npm install react-toastify
```

Create separate functions for each type of notification:

```typescript
const showSuccessToast = (msg:string) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg:string, timer:any) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showInfoToast = (msg:string) => {
    toast.info(msg || `Processing your request...`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
```

And include in `return` statement:

```typescript
<>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    // ...rest of the code
</>
```

Here's how the notification card looks like. It's on the top-right corner of the screen:

![Notification card](public/app/notification_card.png)

#### Code Compilation

To compile the code, we'll use the Judge0 as I mentioned earlier. We'll make a POST request to the Judge0 API to compile the code and get the output. But, we'll need the `API URL`, `host`, and `key`.

Lemme show you how to get these keys:

1. Go to [RapidAPI](https://rapidapi.com/).
2. Create an account or login if you already have one.
![RapidAPI Dashboard](public/rapidapi/api_dash.png)
3. Search for `Judge0` and subscribe to the API.
![RapidAPI Dashboard](public/rapidapi/api_search.png)
4. Get the `API URL`, `host`, and `key`.
![RapidAPI Dashboard](public/rapidapi/api_info.png)

Quick info: on the left side you can see the `endpoints` and on the top `parameters/payloads/header/auth` etc. On the right side there is a `code snippet` that you can use to make a request. Before copying the code snippet, make sure to select the language (e.g., Python, Javascript, and etc.) you want to use and how (e.g., requests, axios, and etc.).

> ps; in our case it's `axios` and `Javascript`.

Initialize the state variables for the code editor:

```typescript
const [code, setCode] = useState(problemsList[0].value);
const [outputDetails, setOutputDetails] = useState(null);
const [processing, setProcessing] = useState(false);
const [language, setLanguage] = useState(languageOptions[2]);
```

Add a function to handle the code execution. This function will compile the code using the RapidAPI and display the output in the output window. It also checks the API call limit and displays an error message if the limit is reached.

```typescript
// we will show this alert if the user selects the language that is not supported by the API
const handleAgent = () => {
alert("The agent is not available at the moment");
};

const handleCompile = () => {
    // Check if the API call limit has been reached
    const apiCallLimit = 2;
    const apiCallLimitDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
    const currentTimestamp = new Date().getTime();

    if (localStorage.getItem("apiCallCount")) {
        const apiCallCount = parseInt(localStorage.getItem("apiCallCount")!);
        const firstApiCallTime = parseInt(localStorage.getItem("firstApiCallTime")!);
        
        if (apiCallCount >= apiCallLimit && currentTimestamp - firstApiCallTime < apiCallLimitDuration) {
        // API call limit reached, show an error message
        showErrorToast("API call limit reached. Please wait for 5 minutes before making more API calls.", 1000);
        return;
        }
    } else {
        // Set the initial values in local storage
        localStorage.setItem("apiCallCount", "0");
        localStorage.setItem("firstApiCallTime", currentTimestamp.toString());
    }

    // Increment the API call count in local storage
    const apiCallCount = parseInt(localStorage.getItem("apiCallCount")!);
    localStorage.setItem("apiCallCount", (apiCallCount + 1).toString());

    // Proceed with the API call
    setProcessing(true);
    const formData = {
        language_id: language.id,
        // encode source code in base64
        source_code: btoa(code),
        stdin: btoa(customInput),
    };
    const options = {
        method: "POST",
        url: process.env.NEXT_PUBLIC_RAPID_API_URL,
        params: { base64_encoded: "true", wait: 'false', fields: "*" },
        headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
        data: formData,
    };

    axios
        .request(options)
        .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
        })
        .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
            console.log("too many requests", status);

            showErrorToast(
            `Quota of 50 requests exceeded for the Day!`,
            10000
            );
        }
        setProcessing(false);
        console.log("catch block...", error);
        });
    };
```

Check the status of the code compilation. If the code is still processing, the function will check the status again after a delay. If the code compilation is successful, the output details will be displayed in the output window.

```typescript
const checkStatus = async (token:string) => {
    const options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast(`Something went wrong! Please try again.`, 1000);
    }
  };
```

Update `return` statement to include the components; `CodeEditorWindow`, `LanguagesDropdown`, `ProblemDropdown`, `RunButton`, and `OutputWindow`.

```typescript
// ...rest of the code
<div className="flex flex-col sm:flex-row">
    <div className="px-4 py-2">
        <ProblemDropdown onSelectChange={onProblemChange} />
    </div>
    <div className="px-4 py-2">
        <LanguagesDropdown onSelectChange={onLanguageChange} />
    </div>
    <div className="px-4 py-2">
        <RunButton handleCompile={language.id !== 43 ? handleCompile : handleAgent} code={code} processing={processing}/>
    </div>
    <div className="px-4 py-2">
        <button className="border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0" onClick={toggleExecutionLog}>
        Execution log {<FontAwesomeIcon icon={faTerminal} />}
        </button>
    </div>
</div>
```

Problem dropdown feature:

![Problem dropdown](public/app/problem_dropdown.png)

Language dropdown feature:

![Language dropdown](public/app/language_dropdown.png)


Add the `CodeEditorWindow` component to the `return` statement:

```typescript
// ...rest of the code
<div className="flex flex-col h-full">
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-start px-4 py-4">
        <div className="flex flex-row w-full h-full justify-start items-end">
        <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
        />
        {/* interviewer window */}
        <div className="flex flex-col items-center justify-center text-center w-[20%] mb-[50px]">
            <div className="flex flex-col text-center items-center justify-center gap-2 noselect">
            {/* Circular GIF background with image on top */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
                {/* GIF background */}
                <div className="absolute inset-0 w-[142%] h-[142%] mt-[-26px] ml-[-25px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/circle.gif)` }}>
                </div>
                {/* Image layered on top */}
                <Image
                priority={true}
                src={weiImage}
                width={80}
                height={80}
                alt="Interviewer"
                className="relative w-24 h-24 rounded-full shadow-md nodrag top-4 left-4"
                title="Interviewer"
                />
            </div>
            <p className="text-lg font-bold">{interviewerName}</p>
            <p>{getInterviewState()}</p>
            </div>
        </div>
        </div>
    </div>
</div>
// ...rest of the code
```

Code editor window:

![Code editor window](public/app/code_editor_window.png)

AI Coding Interviewer:

![AI Coding Interviewer](public/app/ai_coding_interviewer.png)


Implement rest of the functions:
    

```typescript
const [selectedProblem, setSelectedProblem] = useState(problemsList[0]);

const onLanguageChange = (sl:any) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  const onProblemChange = async (selectedProblem:any) => {
    console.log("selected Option...", selectedProblem);
    setSelectedProblem(selectedProblem);
    setCode(selectedProblem.value);
      setInterviewerState({
        isThinking: true,
        isSpeaking: false,
        isListening: false,
      });
    await prepareInitialPromptForSpeech();
  };
```

```typescript
const interviewerName = "Wei B Tan";

const enterPress = useKeyPress("Enter");
const ctrlPress = useKeyPress("Control");

useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action:any, data:any) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleAgent = () => {
    alert("The agent is not available at the moment");
  };
```

There's also circled gif; `url(/circle.gif)` around the interviewer image. It gives a nice effect; kinds speaking etc.

Define the `getInterviewState` function to display the current state of the interviewer:

```typescript
  const [interviewerState, setInterviewerState] = useState({
    isThinking: false,
    isSpeaking: false,
    isListening: false,
  });

    // check interview state and return string
  const getInterviewState = () => {
    if (interviewerState.isThinking) {
      return 'Thinking...';
    } else if (interviewerState.isSpeaking) {
      return 'Speaking...';
    } else if (interviewerState.isListening) {
      return 'Listening...';
    } else {
      return 'Idle...';
    }
  };
```

#### Execution and Chat Logs

Make execution log window resizable:

```typescript
const [executionLogHeight, setExecutionLogHeight] = useState(200);
const [resizing, setResizing] = useState(false);

useEffect(() => {
    if (resizing) {
      const handleMouseMove = (event: any) => {
        const newHeight = window.innerHeight - event.clientY;
        const clampedHeight = Math.max(100, Math.min(newHeight, 500));
        setExecutionLogHeight(clampedHeight);
      };
      
  
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [resizing]);

  const toggleExecutionLog = () => {
    setShowExecutionLog(!showExecutionLog);
  };

  const handleMouseDown = (event:any) => {
    setResizing(true);
  };
  
  const handleMouseUp = () => {
    setResizing(false);
  };
```

Now, add execution log and output details to the `return` statement:

```typescript
// ...rest of the code
<div className="relative">
    {showExecutionLog && (
        <>
        <div
            className={`fixed left-0 right-0 bottom-0 bg-white border-t border-gray-300 overflow-y-auto z-50 ${
            resizing ? "pointer-events-none" : ""
            }`}
            style={{ height: `${executionLogHeight + 1}px`, cursor: "row-resize", }}
            onMouseDown={handleMouseDown}
        ></div>
        <div
            className="fixed left-0 right-0 bottom-0 bg-white border-gray-300 overflow-y-auto z-50"
            style={{ height: `${executionLogHeight}px`, maxHeight: "500px", minHeight: "100px", }}
        >
            <div className="">
            <OutputWindow outputDetails={outputDetails} />
            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
            </div>
        </div>
        </>
    )}
</div>
// ...rest of the code
```

Execution log:

![Execution log](public/app/execution_log.png)

Okey, let's work on `RecordButton`.

```typescript
// ...rest of the code
    <div className="px-4 py-2">
        <button
            onClick={()=>{handleRecordButton()}}
            className={classnames("border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",)}
        >
            {isRecording ? "Stop " : "Record " } {isRecording ? loader() : <FontAwesomeIcon icon={faMicrophone} />}
        </button>
    </div>
    <div className="px-4 py-2">
        <button
            onClick={()=>{setIsShowingChatLogs(!isShowingChatLogs)}}
            className={classnames("border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",)}
        >
            {isShowingChatLogs ? "Hide chat " : "Show chat "} <FontAwesomeIcon icon={faClosedCaptioning} />
        </button>
    </div>
// ...rest of the code
```

Here's real demo, how it works: [PrepAlly](https://youtu.be/wyp8tRTLLfQ?si=_YlCvJxtUVzhykXk)


Chat logs will be displayed in a fixed window on the right side of the screen. The window will contain a list of chat messages. It's kinda transcript of the whole conversation. Super useful to back to the conversation and see what was discussed if you missed something.


```typescript
const [isShowingChatLogs, setIsShowingChatLogs] = useState(false);

{isShowingChatLogs && (
    <div className="fixed top-16 right-10 w-[400px] h-[400px] bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-50">
        <div className="p-4 bg-gray-800 text-white text-center font-bold">Chat</div>
        <div className="p-4 h-[calc(100%-60px)] overflow-y-auto space-y-3 bg-gray-100">
        {chatLogs.map((log, index) => (
            <div
            key={index}
            className={`p-3 rounded-lg text-sm ${
                log.role === "user" ? "bg-gray-200 text-right" : "bg-gray-300 text-left"
            }`}
            >
            <ReactMarkdown
                components={{
                a: ({ node, ...props }) => (
                    <a className="text-blue-800 cursor-pointer" {...props} />
                ),
                }}
            >
                {log.content}
            </ReactMarkdown>
            </div>
        ))}
        </div>
    </div>
    )}
```

Here since AI answers comes in markdown format, we use `ReactMarkdown` to render the markdown content.

Chat logs:

![Chat logs](public/app/chat_logs.png)

#### Speech Recognition

Then, bunch of `functions`, **functions**, *functions*...

```typescript
// State variables for speech recognition
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [ctranscript, setcTranscript] = useState('');

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);
  // Start Recording
  const startRecording = async () => {
    console.log('Starting recording...');
    setIsRecording(true);
    setRecordingComplete(false);
    setcTranscript('');
    // update state
    setInterviewerState({
      isThinking: false,
      isSpeaking: false,
      isListening: true,
    });

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = 'en-US';

    // Updated onresult handler
    recognitionRef.current.onresult = (event:any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      console.log('Final transcript: ', finalTranscript);
      if (finalTranscript.length > 0) {
        setcTranscript(finalTranscript);
        addChatLogs({ role: 'user', content: finalTranscript });
        const msg = `[Code]\n${code}\n\n [User Query & Response]\n${finalTranscript}`;
        addMessageLogs({ role: 'user', content: msg });
        handleAIResponse(msg);
      } else {
        alert('No speech detected. Please try again.');
      }
    };

    recognitionRef.current.onerror = (event:any) => {
      console.error('Speech recognition error', event.error);
      alert('Speech recognition error: ' + event.error);
      setIsRecording(false);
    };

    recognitionRef.current.onend = () => {
      console.log('Speech recognition ended');
      setIsRecording(false);
      setInterviewerState({
        isThinking: true,
        isSpeaking: false,
        isListening: false,
      });
    };
    
    recognitionRef.current.onspeechend = () => {
      recognitionRef.current.stop();
      recognitionRef.current.continuous = false;
    };

    recognitionRef.current.start();
  };

  // Stop Recording
  const stopRecording = async () => {
    if (recognitionRef.current) {
      console.log("Stopping recording")
      setIsRecording(false);
      setInterviewerState({
        isThinking: true,
        isSpeaking: false,
        isListening: false,
      });
      recognitionRef.current.stop();
    }
  };

  // Toggle Recording
  const handleRecordButton = () => {
    console.log("handleRecordButton...");
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);
```

I was really brief on the speech recognition part. If you want to learn more about it. Kindly check this tutorial: [Building a Chrome Extension from Scratch with AI/ML API, Deepgram Aura, and IndexedDB Integration](https://dev.to/abdibrokhim/building-a-chrome-extension-from-scratch-with-aiml-api-deepgram-aura-and-indexeddb-integration-25hd)


The important stuff: After `'use client'` declare a global interface to add the webkitSpeechRecognition property to the Window object. This is necessary to avoid TypeScript errors when using the `webkitSpeechRecognition` API. It will be used to enable voice input in the code editor.

```typescript
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
```

#### API Integration

Tha main part of the code is the `handleAIResponse` function. This function will handle the response from the AI model. It will prepare the chat messages, send the user query to the GPT-4o model, and convert the AI reply to speech. It's kinds wrapper function for the AI model.

```typescript
// ================================================
  // cookin ai stuff...
  // Update handleAIResponse function
  const handleAIResponse = async (userQuery:string) => {
    console.log('Handling AI response...');
    showInfoToast('Processing...');
    try {
      // Show some loading state if needed
      console.log('Current user query:', userQuery);
      console.log('Current chat logs: ', chatLogs);
      console.log('Current message logs: ', messagesLogs);

      const chatMessages = prepareChatMessages(userQuery);
      console.log('Prepared chat messages:', chatMessages);

      // Send the transcribed text to the GPT-4o model
      const aiReply = await generateReply(chatMessages);

      console.log('AI Reply:', aiReply);

      // Update chat logs
      addChatLogs({ role: 'assistant', content: aiReply });

      // Update messages logs
      addMessageLogs({ role: 'assistant', content: aiReply });

      // Convert the AI reply to speech and play it
      await textToSpeech(aiReply);
      console.log("I should be printed after textToSpeech, um..., shitt.");
    } catch (error) {
      console.error('Error handling AI response:', error);
      showErrorToast('An error occurred while processing your request.', 2000);
    } finally {
    }
  };
```

The `generateReply` function will send the user query to the GPT-4o model and return the AI reply.

```typescript
// send request to gpt-4o
  // generate reply for user query
  const generateReply = async (messages:any) => {
    console.log('Generating reply...');
    try {
      // query-model
      const response = await fetch('/api/query-gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while fetching the reply.');
      return 'No response available';
    }
  };

```

The `textToSpeech` function will convert the AI reply to speech and play it.


```typescript
// when we get reply from gpt-4o model then we will convert it to voice and play it
  // send request to elevenlabs api
  // text to speech
  const textToSpeech = async (text: string) => {
    console.log('Converting text to speech...');
    try {
      const response = await fetch('/api/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const blob = await response.blob();

      // Save to IndexedDB and play
      setInterviewerState({
        isThinking: false,
        isSpeaking: true,
        isListening: false,
      });
      await saveAndPlayAudio(blob);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while fetching the audio.');
    } finally {
      // startRecording();
    }
  };
```

#### Prompt Engineering

Above if you were pretty much following along, you should see `prepareChatMessages` function. It's a helper function to prepare chat messages for the GPT-4o model. It will format the chat messages in a way that we can send them to the model for processing.

**`This function is really important for AI Coding Interviewer.`** So, it will have a lot of information about the user, the problem, and the conversation between the user and the AI assistant. Otherwise, the AI model or `GPT-4o` will not be able to provide a meaningful response. Simply, it will be lost in the conversation.

```typescript
const prepareChatMessages = (userMessage:string) => {
    const currentUser = user?.fullName || 'Dear';
    const currentProblem = selectedProblem?.label || 'problem';
    const currentProblemContent = selectedProblem?.value || 'problem content';
    const tempInstr = `
    ${systemPrompt}\n
    You are talking to ${currentUser}.\n
    Problem: ${currentProblem}\n
    Here is Problem Statement: ${currentProblemContent}\n
    Below given Conversation between you and ${currentUser}.\n
    If user asked any question please, answer the question.\n
    Provide feedback to their code.\n
    `;
    const newMessageLog = { role: 'user', content: userMessage };
    const updatedMessagesLogs = [...messagesLogs, newMessageLog];

    const messages = [
      {
          role: "system",
          content: tempInstr
      },

      ...updatedMessagesLogs,
    ];

    return messages;
};
```

On `user?.fullName` we are getting it from the `Clerk` user object.

Next, prepare very initial prompt for speech. When user enters the page, the AI assistant will greet the user and provide some information about the problem.

```typescript
const prepareInitialPromptForSpeech = async () => {
    const currentUser = user?.firstName || 'Dear';
    const currentProblem = selectedProblem?.label || 'problem';
    const currentProblemContent = selectedProblem?.value || 'problem content';
    const tempInstr = `
    ${systemPrompt}
    \nYou will be given a [New Problem] that you should paraphrase and return. Your paraphrased problem statement should be concise and informative. It should be a clear and accurate representation of the original problem statement. If you need example paraphrases, you can refer to the examples provided below. Below you can find the [example actual Problem Statement] and [example Paraphrased Problem Statement].\n
    [example actual Problem Statement]\n${currentProblemContent}\n\n[example Paraphrased Problem Statement]\nWrite a function to calculate the sum of numbers in an array while ignoring sections starting with a 7 and ending with the next 8.
    `;

    const messages = [
      {
          role: "system",
          content: tempInstr
      },
      {
          role: "user",
          content: currentProblemContent
      },
    ];

    const paraphrasedProblemStatement = await generateReply(messages);
    console.log('Paraphrased Problem Statement:', paraphrasedProblemStatement);

    const initialPromptSpeech = `Welcome, ${currentUser}! I'm ${interviewerName}, and I'm currently a Senior Software Engineer at Snapchat. Today, we'll be working on the ${currentProblem} problem, where ${paraphrasedProblemStatement}. Please take a minute to read the problem and respond when you're ready to work on it.`;
    console.log('Initial Prompt Speech:', initialPromptSpeech);
    
    // update chat logs
    addChatLogs({ role: 'assistant', content: initialPromptSpeech });

    // udpate messages logs
    addMessageLogs({ role: 'assistant', content: initialPromptSpeech });

    // Convert the initial prompt to speech and play it
    await textToSpeech(initialPromptSpeech);
  };
```

Function to add new log and trigger update

```typescript
  // Function to add new log and trigger update
  const addChatLogs = (newMessage:any) => {
    setChatLogs((prevLogs) => [...prevLogs, newMessage]);
  };
```

```typescript
const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      window.removeEventListener('click', handleUserInteraction);
    };
  
    window.addEventListener('click', handleUserInteraction);
  
    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (userInteracted) {
      setInterviewerState({
        isThinking: true,
        isSpeaking: false,
        isListening: false,
      });
      prepareInitialPromptForSpeech();
    }
  }, [userInteracted]);
```

> When user enters the page for the first time.

Let's add very simple yet nice `loader()`:

```typescript

  const loader = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <circle cx={4} cy={12} r={3} fill="currentColor">
        <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3" />
      </circle>
      <circle cx={12} cy={12} r={3} fill="currentColor">
        <animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3" />
      </circle>
      <circle cx={20} cy={12} r={3} fill="currentColor">
        <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3" />
      </circle>
    </svg>
  );
```

In addition, let's add welcome message when the user first time visit the page:

```typescript
  useEffect(() => {
    defineTheme("active4d").then((_) =>
      setTheme({ value: "active4d", label: "Active4D" })
    );
    showSuccessToast("Welcome to Code Editor!");
  }, []);
```

Example:

![Greetings](public/app/notification_card.png)


Next step let's quickly set up environment variables and test it locally.

### Environment Variables

Open `.env` file and add the following environment variables:

```bash
NEXT_PUBLIC_RAPID_API_URL=https://judge0-ce.p.rapidapi.com/submissions
NEXT_PUBLIC_RAPID_API_HOST=judge0-ce.p.rapidapi.com
NEXT_PUBLIC_RAPID_API_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_AIML_API_KEY=...
```

### Run Locally

Now, you can run the application locally with the following command:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the application running.

You should see something similar to this:

![Main Page](public/app/main_page.png)

Here on the bottom left side you can see your profile account:

![Profile Account](public/ui_1.png)

Feel free to solve the first problem and run the code:

![First Problem](public/ui_2.png)

Here's how real interview looks like:

![Interview](public/ui_3.png)

Watch the interview in action:

[![Watch on YouTube](https://img.shields.io/badge/Watch%20on-YouTube-red?style=for-the-badge&logo=youtube)](https://youtu.be/wyp8tRTLLfQ?si=3-oRfxNs5J5BZMoy)


If you want to learn more about Building AI powered projects or whatever. Let me know. It's FREE! 🎉 -> [Learn now!](https://topmate.io/join/abdibrokhim)

So, that's it! But, we are not done yet. We need to deploy our application to Vercel.

### Deploy to Vercel

To deploy the application to Vercel, you need to create a Vercel account. Please follow this tutorial to deploy your Next.js application to Vercel: [How to Deploy Apps to Vercel with ease](https://medium.com/@abdibrokhim/how-to-deploy-apps-to-vercel-with-ease-93fa0d0bb687).

Once you have deployed the application, you can try it out and share it with your peers. 

> ps; as i did here with my close friend:

[![Watch on YouTube](https://img.shields.io/badge/Watch%20on-YouTube-red?style=for-the-badge&logo=youtube)](https://youtu.be/wyp8tRTLLfQ?si=3-oRfxNs5J5BZMoy)

> pss; you can also watch the **Uncensored** 😂 version on Patreon here [[Uncensored]: PrepAlly, an Open Source and AI-powered Interview Preparation Platform.](https://www.patreon.com/posts/uncensored-open-116136938?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link)


### Hype it up!

Let's gooo! 🦄

#### ProductHunt

Ok, firstly we should create an account on ProductHunt here [Create an account](https://www.producthunt.com/). 

![ProductHunt](public/ph/ph_dash.png)

Then, we can submit our project there. 

Click on the `Submit` button on the top right corner. Paste the URL of the project and click on `Submit`. Next it will ask you to fill the details about the project. Take your time and fill the details.

![ProductHunt](public/ph/details.png)

More details: 😅

![ProductHunt](public/ph/more_details.png)

Then, click `Schedule for Later` button and select the date and time you want to launch the project.

Finally, click on `Schedule` button. That's it! 🎉

![ProductHunt](public/ph/done.png)

Here's the link to the project: [PrepAlly on ProductHunt](https://www.producthunt.com/posts/prepally). How about yours? Let me know in the comments below or [message me topmate.io/abdibrokhim](https://topmate.io/abdibrokhim/1291434/pay). Really, I would love to see your project. 🐐

#### X

The very effective way to promote your project is to share it on X. Just drop some postshit and voila! 🦄

For example, look at this description:

```bash
Introducing PrepAlly, an Open Source and AI-powered Interview Preparation Platform.

- Select the problem from the list.
- Choose your programming language.
- Write the code and run it instantly.
- Talk to AI and get feedback on your code.
- Feel like you are in a real interview.
```

Also, upload the video of the demo directly. (ps; don't put link to YouTube, instead upload the video directly)

![Twitter](public/x/x_post.png)

Here's the link to the post: [PrepAlly on X](https://x.com/abdibrokhim/status/1857897470577062165). How about yours? Let me know in the comments below or [message me topmate.io/abdibrokhim](https://topmate.io/abdibrokhim/1291434/pay). 

## Conclusion

In this tutorial, we built an AI-powered coding interview platform using Next.js, React, Tailwind CSS, and AI/ML API. We integrated the platform with Clerk Auth for authentication and deployed it to Vercel. We also added features like voice input, chat logs, and execution logs to enhance the user experience.

We also learned how to promote the project on ProductHunt and X to reach a wider audience. At least, we hyped it up! 🐐

> ps; now you are pretty much ready to apply YC. Here's the link on how to apply to YC: [How to Apply to Y Combinator](https://youtu.be/wCyJrv9a2Ic?si=ce6folSL1o5K88tB)

I hope you enjoyed building this project and learned something new. If you have any questions or feedback, feel free to [message me topmate.io/abdibrokhim](https://topmate.io/abdibrokhim/1291434/pay). I would love to hear from you. 🫠

---

All the code for this project is available on GitHub: [PrepAlly; AI Coding Interviewer](https://github.com/abdibrokhim/ai-coding-interviewer). Open Source 🌟.

Save this tutorial for later reference: [Let's build Startup. Step-by-Step Tutorial on Building AI Coding Interviewer (e.g., PrepAlly) with AI/ML API and Integration with Clerk Auth and Deploying to Vercel](https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-ai-coding-interviewer-with-aiml-api-and-integration-with-clerk-2cd7). (it's always available on [Medium](https://medium.com/@abdibrokhim/lets-build-startup-2eb5ddfab4af)) and [Dev Community](https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-ai-coding-interviewer-with-aiml-api-and-integration-with-clerk-2cd7) for FREE! 🎉

### Other interesting tutorials:
*with step-by-step guide and screenshots:*

on Medium:

* [Comprehensive and Step-by-Step Tutorial on Building an AI text Humanizer with AI/ML API, Next.js, Tailwind CSS and Integration with Clerk Auth and Deploying to Vercel](https://medium.com/@abdibrokhim/comprehensive-and-step-by-step-tutorial-on-building-an-ai-text-humanizer-with-ai-ml-api-next-js-d42c4850a31c)

* [Building an AI Sticker Maker Platform with AI/ML API, Next.js, React, and Tailwind CSS using OpenAI GPT-4o and DALL-E 3 Models.](https://medium.com/@abdibrokhim/building-an-ai-sticker-maker-platform-with-ai-ml-api-next-js-8b0767a7e159)

* [Building a Chrome Extension from Scratch with AI/ML API, Deepgram Aura, and IndexedDB Integration](https://medium.com/@abdibrokhim/building-a-chrome-extension-from-scratch-with-ai-ml-api-deepgram-aura-and-indexeddb-integration-2e5d1e6fbfb0)


on Dev Community:

* [Comprehensive and Step-by-Step Tutorial on Building an AI text Humanizer with AI/ML API, Next.js, Tailwind CSS and Integration with Clerk Auth and Deploying to Vercel](https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-an-ai-text-humanizer-with-aiml-api-and-integration-with-clerk-auth-and-deploying-to-vercel-moj)

* [Building an AI Sticker Maker Platform with AI/ML API, Next.js, React, and Tailwind CSS using OpenAI GPT-4o and DALL-E 3 Models.](https://dev.to/abdibrokhim/building-an-ai-sticker-maker-platform-with-aiml-api-nextjs-react-and-tailwind-css-using-openai-gpt-4o-and-dalle-3-models-46ip)

* [Building a Chrome Extension from Scratch with AI/ML API, Deepgram Aura, and IndexedDB Integration](https://dev.to/abdibrokhim/building-a-chrome-extension-from-scratch-with-aiml-api-deepgram-aura-and-indexeddb-integration-25hd)


### Try what you have built so far:

> (if you followed along 😂)

* [HumanAIze AI text tool](https://humanaize.vercel.app/), it's absolutely FREE! 🎉 and The smartest AI humanizer.
* [AI Sticker Maker Platform](https://ai-sticker-maker.vercel.app/) on [HuggingFace Spaces](https://huggingface.co/spaces/AI-ML-API-tutorials/ai-sticker-maker) 🚀. You can print them and make your life funnier.
* [Chrome Extension](https://github.com/TechWithAbee/Building-a-Chrome-Extension-from-Scratch-with-AI-ML-API-Deepgram-Aura-and-IndexDB-Integration) to Read Aloud the text on the webpage.
* Not a subscriber? Download Loom Videos for free using [lovido.lol](https://lovido.lol/). [Open Source](https://github.com/abdibrokhim/loom-dl-web/), put a star on it! ⭐️


### Helpful GPTs:

> (i did during the hackathons) 🙈

* [StoryAI](https://chatgpt.com/g/g-PRa3ZXK36-story-ai), Where Climate Data Meets Conversation 🌍
* [EcoShopAI](https://chatgpt.com/g/g-rTTibE8p9-ecoshop-ai), I help you to make eco-friendly purchasing decisions with minimal environmental impact
* [AI Sticker Maker](https://chatgpt.com/g/g-mtFtfproh-ai-sticker-maker), I will create really cutesy stickers for you 💜


## Bonus

---

> Get Started with **AI/ML API** for FREE ($0 US dollars): [Click me, let's Cook, bro!](https://aimlapi.com/?via=ibrohim) 🧑‍🍳

> **A$AP**; Use the code `IBROHIMXAIMLAPI` for 1 week FREE Access [Let's get started, bruh!](https://aimlapi.com/?via=ibrohim) 😱


Tutorial was cooked by [Ibrohim Abdivokhidov](https://www.linkedin.com/in/abdibrokhim/), (follow this 🐐 on [LinkedIn](https://www.linkedin.com/in/abdibrokhim/)). Why, umm... why not tho?

> ps: *[Uncensored]*: Founders video; Y Combinator Winter 2025 batch [be a Patron](https://www.patreon.com/collection/861737)

you need someone to guide you through the challenges? i’m here to help [Book a Call](https://topmate.io/abdibrokhim/1291447)

> pss: 1️⃣ AI/ML API Regional Ambassador in Central Asia | founder CEO at Open Community (150+ 🧑‍💻) | Hacker (60+ hackathons 🦄) | Open Source contributor at Anarchy Labs (477+ ⭐️), Langflow (31,2K+ ⭐️) | Mentor (200K+ 🧑‍🎓) | Author (5+ 📚)... umm and more stuff cookin' up -> check here to know what [imcook.in](https://imcook.in) !