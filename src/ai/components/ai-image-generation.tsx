"use client";

import React, { useState } from "react";
import { generateThumbnailImage } from "@/ai/flows/generate-thumbnail-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const AIImageGeneration: React.FC = () => {
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const result = await generateThumbnailImage({ description });
      setImageUrl(result.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>AI Image Generation</CardTitle>
        <CardDescription>Generate images for thumbnails and promotional content using AI.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="image-description">Image Description:</label>
          <Input
            type="text"
            id="image-description"
            placeholder="Enter image description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button onClick={handleGenerateImage} disabled={loading}>
          {loading ? (
            <>
              Generating <Icons.loader className="ml-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            "Generate Image"
          )}
        </Button>
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="Generated Image" className="rounded-md" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIImageGeneration;
