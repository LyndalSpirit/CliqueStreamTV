'use server';
/**
 * @fileOverview An AI agent to generate a thumbnail image based on a text description.
 *
 * - generateThumbnailImage - A function that handles the thumbnail image generation process.
 * - GenerateThumbnailImageInput - The input type for the generateThumbnailImage function.
 * - GenerateThumbnailImageOutput - The return type for the generateThumbnailImage function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateThumbnailImageInputSchema = z.object({
  description: z.string().describe('The text description of the desired thumbnail image.'),
});
export type GenerateThumbnailImageInput = z.infer<typeof GenerateThumbnailImageInputSchema>;

const GenerateThumbnailImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated thumbnail image.'),
});
export type GenerateThumbnailImageOutput = z.infer<typeof GenerateThumbnailImageOutputSchema>;

export async function generateThumbnailImage(input: GenerateThumbnailImageInput): Promise<GenerateThumbnailImageOutput> {
  return generateThumbnailImageFlow(input);
}

const generateThumbnailImagePrompt = ai.definePrompt({
  name: 'generateThumbnailImagePrompt',
  input: {
    schema: z.object({
      description: z.string().describe('The text description of the desired thumbnail image.'),
    }),
  },
  output: {
    schema: z.object({
      imageUrl: z.string().describe('The URL of the generated thumbnail image.'),
    }),
  },
  prompt: `You are an AI that generates thumbnail images based on text descriptions.

  Generate a URL for a thumbnail image based on the following description: {{{description}}}.
  The URL should point to a publicly accessible image.
  `,
});

const generateThumbnailImageFlow = ai.defineFlow<
  typeof GenerateThumbnailImageInputSchema,
  typeof GenerateThumbnailImageOutputSchema
>({
  name: 'generateThumbnailImageFlow',
  inputSchema: GenerateThumbnailImageInputSchema,
  outputSchema: GenerateThumbnailImageOutputSchema,
}, async input => {
  const {output} = await generateThumbnailImagePrompt(input);
  return output!;
});
