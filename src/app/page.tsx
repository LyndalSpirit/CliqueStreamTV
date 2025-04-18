'use server';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

async function processFormData(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;

  console.log('Received form data:', name);

  toast({
    title: "Form Submitted",
    description: `You entered: ${name}`,
  });

  return {
    message: "Form submitted successfully",
  }
}


export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold">CLIQUE STREAM TV</h1>
        <p className="text-muted-foreground">
          You've just been CLIQUED!
        </p>
      </header>

      <section className="p-8 text-center">
        <p className="mb-4">
          CLIQUE STREAM TV, Fomally CLIQUE TV is a pioneering streaming service, re-imagined for the modern creator
        </p>
        <form action={processFormData} className="flex flex-col items-center space-y-4">
          <Input type="text" name="name" placeholder="Enter your name" />
          <Button type="submit">Get Started</Button>
        </form>
      </section>
    </div>
  );
}






