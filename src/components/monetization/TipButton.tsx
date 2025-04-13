"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { processTip } from "@/services/monetization";

interface TipButtonProps {
  creatorId: string;
}

const TipButton: React.FC<TipButtonProps> = ({ creatorId }) => {
  const [open, setOpen] = useState(false);
  const [tipping, setTipping] = useState(false);
  const [tipAmount, setTipAmount] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleTip = async () => {
    setTipping(true);
    try {
      const tip = {
        amount: tipAmount,
        currency: "USD",
        tipperId: "currentUser",
        creatorId: creatorId,
      };
      const result = await processTip(tip);
      if (result) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Failed to process tip:", error);
    } finally {
      setTipping(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Send Tip</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Send a Tip</AlertDialogTitle>
          <AlertDialogDescription>
            Support this creator by sending a tip.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-2">
          <label htmlFor="tip-amount">Tip Amount ($):</label>
          <input
            type="number"
            id="tip-amount"
            value={tipAmount}
            onChange={(e) => setTipAmount(Number(e.target.value))}
            className="border rounded px-2 py-1 text-background"
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleTip} disabled={tipping}>
            {tipping ? "Tipping..." : "Send Tip"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TipButton;
