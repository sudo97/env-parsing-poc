"use client";

import { useEffect, useState } from "react";
// import { NEXT_PUBLIC_VARIABLE } from "./public_env"; <- this is importable, but not as convenient as doing it on server;

export function ClientComponent({ label }: { label: string }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((x) => Math.min(x + 1, 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <code className="font-mono font-bold">
      {label} {counter}
    </code>
  );
}
