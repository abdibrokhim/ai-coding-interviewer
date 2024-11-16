// src/page.tsx
'use client';

import Image from "next/image";
import Landing from "./components/Landing";
import { useUser } from '@clerk/nextjs';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  return (
    <>
    <Landing />
          {/* Account settings */}
          <div className="absolute bottom-[20px] left-[20px]">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
