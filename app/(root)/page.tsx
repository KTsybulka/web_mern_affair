import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Affair</h1>
      <Button variant="destructive" className="px-10">
        Delete
      </Button>
    </main>
  );
}
