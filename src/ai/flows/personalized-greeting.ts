'use server';

/**
 * @fileOverview Generates a personalized greeting for website visitors based on their likely technical expertise.
 *
 * - generatePersonalizedGreeting - A function that generates the personalized greeting.
 * - PersonalizedGreetingInput - The input type for the generatePersonalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the generatePersonalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  likelyExpertise: z
    .enum(['technical', 'non-technical', 'unknown'])
    .describe("The visitor's likely technical expertise, inferred from browsing history or general web browsing patterns."),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function generatePersonalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `You are a portfolio website bot that greets visitors with a personalized message.

  Based on the visitor's likely technical expertise, create a greeting that is both welcoming and engaging.

  If the expertise is 'technical', use technical terms and demonstrate an understanding of DevOps concepts.
  If the expertise is 'non-technical', use simpler language and focus on the value and benefits of the portfolio owner's skills.
  If the expertise is 'unknown', use a general greeting that appeals to a broad audience.

  Here are some example greetings:

  Technical: "Welcome, fellow DevOps enthusiast! Explore my portfolio to see how I'm automating the future."
  Non-technical: "Hello! I create solutions that make technology work for you. Check out my projects and let's build something amazing."
  Unknown: "Welcome to my portfolio! I'm passionate about technology and innovation. Take a look around and see what I can do for you."

  Likely Expertise: {{{likelyExpertise}}}

  Greeting:`,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
