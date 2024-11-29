'use client';

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
        <SignIn />
    </div>
  )
}

export default SignInPage