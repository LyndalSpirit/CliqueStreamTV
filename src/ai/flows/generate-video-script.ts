'use server';
/**
 * @fileOverview A video script generation AI agent.
 *
 * - generateVideoScript - A function that handles the video script generation process.
 * - GenerateVideoScriptInput - The input type for the generateVideoScript function.
 * - GenerateVideoScriptOutput - The return type for the generateVideoScript function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateVideoScriptInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate a video script from.'),
});
export type GenerateVideoScriptInput = z.infer<typeof GenerateVideoScriptInputSchema>;

const GenerateVideoScriptOutputSchema = z.object({
  script: z.string().describe('The generated video script.'),
});
export type GenerateVideoScriptOutput = z.infer<typeof GenerateVideoScriptOutputSchema>;

export async function generateVideoScript(input: GenerateVideoScriptInput): Promise<GenerateVideoScriptOutput> {
  return generateVideoScriptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVideoScriptPrompt',
  input: {
    schema: z.object({
      prompt: z.string().describe('The prompt to generate a video script from.'),
    }),
  },
  output: {
    schema: z.object({
      script: z.string().describe('The generated video script.'),
    }),
  },
  prompt: `You are an AI video script writer. Generate a video script based on the following prompt: {{{prompt}}}`,
});

const generateVideoScriptFlow = ai.defineFlow<
  typeof GenerateVideoScriptInputSchema,
  typeof GenerateVideoScriptOutputSchema
>(
  {
    name: 'generateVideoScriptFlow',
    inputSchema: GenerateVideoScriptInputSchema,
    outputSchema: GenerateVideoScriptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
