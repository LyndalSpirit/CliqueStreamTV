import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold">CliqueStream</h1>
        <p className="text-muted-foreground">
          The future of streaming is here.
        </p>
      </header>

      <section className="p-8 text-center">
        <p className="mb-4">
          CliqueStream is a pioneering streaming service, re-imagined for the
          modern creator.
        </p>
        <Button>Get Started</Button>
      </section>
    </div>
  );
}
