// app/sign-up/[[…sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs'
import '../../globals.css';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 relative text-white bg_style">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <SignUp />
      </div>
    </div>
  );
}