import { useEffect } from "react";

export default function useUselessHook(): void {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Hello! I am a pretty useless hook!");
    // eslint-disable-next-line no-console
    return () => console.log("So long!");
  }, []);
}
