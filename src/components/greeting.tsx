"use client";

import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";

export function Greeting() {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Loading...</span>
      </div>
    );
  }

  const name = data?.user?.name ?? "there";
  return <p className="text-2xl font-semibold">Hello {name}</p>;
}
