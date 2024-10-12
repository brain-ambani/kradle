import { Metadata } from "next";
import Image from "next/image";
import signUpImage from "@/assets/signup-image.jpg";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign Up to kradle</h1>
            <p className="text-muted-foreground">
              A place where even <span className="italic">you</span> can find a
              friend.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <form>
              <Link
                href="/signin"
                className="block text-center hover:underline"
              >
                Already have an account? Sign in.
              </Link>
            </form>
          </div>
        </div>
        <Image
          src={signUpImage}
          alt="Sign Up"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
