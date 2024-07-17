"use client";
import { useEffect } from "react";
import { logAllInteractions } from "../lib/onInteraction";

export default function InteractionMonitor() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("InteractionMonitor mounted in browser");
      logAllInteractions();
    } else {
      console.log("InteractionMonitor mounted on server");
    }
  }, []);

  return null;
}
