"use client";

import { signIn } from "next-auth/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-[360px] p-6 text-center space-y-6">
        <CardHeader>
          <h1 className="text-xl font-bold">Sign in</h1>
          <p className="text-sm text-muted-foreground">
            Use your Google account to continue
          </p>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
