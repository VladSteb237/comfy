import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button variant="default" size="lg" className="capitalize m-8">
        Click me
      </Button>
    </div>
  );
}
