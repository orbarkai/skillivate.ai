"use client";

import { useSession } from "next-auth/react";

export function Greeting() {
  const { data } = useSession();
  const name = data?.user?.name ?? "there";
  return <p className="text-2xl font-semibold">Hello {name}</p>;
}
