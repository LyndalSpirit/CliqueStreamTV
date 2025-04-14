import Dashboard from "@/components/ui/dashboard";
import TipButton from "@/components/monetization/TipButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <Dashboard>
        <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p>Welcome to your dashboard!</p>

            <section>
                <h3 className="text-xl font-semibold mb-2">Creator Monetization</h3>
                <TipButton creatorId="exampleCreatorId" />
            </section>
            <section>
                <h3 className="text-xl font-semibold mb-2">Monetization Store</h3>
                <Link href="/store">
                    <Button>Go to Store</Button>
                </Link>
            </section>
        </div>
    </Dashboard>
  );
}
