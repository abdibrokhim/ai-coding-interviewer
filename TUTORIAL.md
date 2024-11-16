# Let's build Startup. Step-by-Step Tutorial on Building AI Coding Interviewer (e.g., PrepAlly) with AI/ML API and Integration with Clerk Auth and Deploying to Vercel

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
* **Judge0 API Key**; i will show you how to get it later.

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
6. [Record Button](#record-button)


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

# biggest_diff([10, 3, 5, 6]) → 7
# biggest_diff([7, 2, 10, 9]) → 8
# biggest_diff([2, 10, 7, 2]) → 8

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

# cat_dog('catdog') → True
# cat_dog('catcat') → False
# cat_dog('1cat1cadodog') → True

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

# sum78([1, 2, 2]) → 5
# sum78([1, 2, 2, 7, 99, 99, 8]) → 5
# sum78([1, 1, 7, 8, 2]) → 4

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

#### Record Button

Let's add a record button to record the user's voice input. So, the user can feel the vibe of interviewing with a real human.

```javascript
// components/RecordButton.jsx
import React from "react";
import { classnames } from "../utils/general";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecordButton = ({ handleRecord, processing }) => {
    return (
        <button
            onClick={handleRecord}
            className={classnames("border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",)}
        >
            {processing ? "Recording... " : "Record "} <FontAwesomeIcon icon={faMicrophone} />
      </button>
    )
}
    
export default RecordButton;
```






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
![Main Page](public/main_page.png)

<add something>

If you want to learn more about Building AI powered projects or whatever. Let me know. It's FREE! 🎉 -> [Learn now!](https://topmate.io/join/abdibrokhim)

So, that's it! But, we are not done yet. We need to deploy our application to Vercel.

### Deploy to Vercel

To deploy the application to Vercel, you need to create a Vercel account. Please follow this tutorial to deploy your Next.js application to Vercel: [How to Deploy Apps to Vercel with ease](https://medium.com/@abdibrokhim/how-to-deploy-apps-to-vercel-with-ease-93fa0d0bb687).

Once you have deployed the application, you can try it out and share it with your friends.


## Conclusion
will be added later...

---

All the code for this project is available on GitHub: [HumanAIze AI text tool](https://github.com/abdibrokhim/humanaize/).

Save this tutorial for later reference: [](). (it's always available on [Medium]()) and [Dev Community](https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-an-ai-text-humanizer-with-aiml-api-and-integration-with-clerk-auth-and-deploying-to-vercel-moj) for FREE! 🎉

### Other interesting tutorials:
*with step-by-step guide and screenshots:*

on Medium:

* [Comprehensive and Step-by-Step Tutorial on Building an AI text Humanizer with AI/ML API, Next.js, Tailwind CSS and Integration with Clerk Auth and Deploying to Vercel](https://medium.com/@abdibrokhim/comprehensive-and-step-by-step-tutorial-on-building-an-ai-text-humanizer-with-ai-ml-api-next-js-d42c4850a31c)

* [Building an AI Sticker Maker Platform with AI/ML API, Next.js, React, and Tailwind CSS using OpenAI GPT-4o and DALL-E 3 Models.](https://medium.com/@abdibrokhim/building-an-ai-sticker-maker-platform-with-ai-ml-api-next-js-8b0767a7e159)

* [Building a Chrome Extension from Scratch with AI/ML API, Deepgram Aura, and IndexedDB Integration](https://medium.com/@abdibrokhim/building-a-chrome-extension-from-scratch-with-ai-ml-api-deepgram-aura-and-indexeddb-integration-2e5d1e6fbfb0)


on Dev Community:

* [Comprehensive and Step-by-Step Tutorial on Building an AI text Humanizer with AI/ML API, Next.js, Tailwind CSS and Integration with Clerk Auth and Deploying to Vercel]()

* [Building an AI Sticker Maker Platform with AI/ML API, Next.js, React, and Tailwind CSS using OpenAI GPT-4o and DALL-E 3 Models.](https://dev.to/abdibrokhim/building-an-ai-sticker-maker-platform-with-aiml-api-nextjs-react-and-tailwind-css-using-openai-gpt-4o-and-dalle-3-models-46ip)

* [Building a Chrome Extension from Scratch with AI/ML API, Deepgram Aura, and IndexedDB Integration](https://dev.to/abdibrokhim/building-a-chrome-extension-from-scratch-with-aiml-api-deepgram-aura-and-indexeddb-integration-25hd)


### Try live demo:
* [HumanAIze AI text tool](https://humanaize.vercel.app/), it's absolutely FREE! 🎉 and The smartest AI humanizer.
* [AI Sticker Maker Platform](https://ai-sticker-maker.vercel.app/) on [HuggingFace Spaces](https://huggingface.co/spaces/AI-ML-API-tutorials/ai-sticker-maker) 🚀. You can print them and make your life funnier.
* [Chrome Extension](https://github.com/TechWithAbee/Building-a-Chrome-Extension-from-Scratch-with-AI-ML-API-Deepgram-Aura-and-IndexDB-Integration) to Read Aloud the text on the webpage.
* Not a subscriber? Download Loom Videos for free using [lovido.lol](https://lovido.lol/). [Open Source](https://github.com/abdibrokhim/loom-dl-web/), put a star on it! ⭐️


### my GPTs:
* [StoryAI](https://chatgpt.com/g/g-PRa3ZXK36-story-ai), Where Climate Data Meets Conversation 🌍
* [EcoShopAI](https://chatgpt.com/g/g-rTTibE8p9-ecoshop-ai), I help you to make eco-friendly purchasing decisions with minimal environmental impact
[AI Sticker Maker](https://chatgpt.com/g/g-mtFtfproh-ai-sticker-maker), I will create really cutesy stickers for you 💜

---

> Get Started with **AI/ML API** for FREE ($0 US dollars): [Click me, let's Cook, bro!](https://aimlapi.com/?via=ibrohim) 🧑‍🍳

> **A$AP**; Use the code `IBROHIMXAIMLAPI` for 1 week FREE Access [Let's get started, bruh!](https://aimlapi.com/?via=ibrohim) 😱


Tutorial was cooked by [Ibrohim Abdivokhidov](https://www.linkedin.com/in/abdibrokhim/), (follow this 🐐 on [LinkedIn](https://www.linkedin.com/in/abdibrokhim/)). Why, umm... why not tho?

> ps: 1️⃣ AI/ML API Regional Ambassador in Central Asia | founder CEO at Open Community (150+ 🧑‍💻) | Hacker (60+ hackathons 🦄) | Open Source contributor at Anarchy Labs (477+ ⭐️), Langflow (31,2K+ ⭐️) | Mentor (200K+ 🧑‍🎓) | Author (5+ 📚)... umm and more stuff cookin' up -> [imcook.in](https://imcook.in) !