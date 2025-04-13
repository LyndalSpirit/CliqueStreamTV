"use client";

import React, { useState } from "react";
import { generateVideoScript } from "@/ai/flows/generate-video-script";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const AIScripting: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [script, setScript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateScript = async () => {
    setLoading(true);
    try {
      const result = await generateVideoScript({ prompt });
      setScript(result.script);
    } catch (error) {
      console.error("Error generating script:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>AI Scripting</CardTitle>
        <CardDescription>Generate video scripts based on user prompts.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="script-prompt">Script Prompt:</label>
          <Textarea
            id="script-prompt"
            placeholder="Enter script prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <Button onClick={handleGenerateScript} disabled={loading}>
          {loading ? (
            <>
              Generating <Icons.loader className="ml-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            "Generate Script"
          )}
        </Button>
        {script && (
          <div>
            <label>Generated Script:</label>
            <pre className="whitespace-pre-wrap">{script}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIScripting;
