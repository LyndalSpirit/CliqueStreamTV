# Firebase Studio - CliqueStream

## Project Overview

CliqueStream is a Next.js starter project built within Firebase Studio, designed to provide a foundation for building a modern streaming service. It leverages the Next.js App Router for improved performance and maintainability, Server Components for reduced client-side JavaScript, and ShadCN UI components for a consistent and professional user interface. The application also includes GenAI features implemented using Genkit, providing AI-powered functionalities like script generation and image creation.

## Project Structure

The project is structured as follows:

-   `.env`: Environment variables (currently empty, but can be used for API keys, etc.).
-   `README.md`: This file, providing an overview of the project.
-   `components.json`: Configuration file for ShadCN UI components.
-   `next.config.ts`: Next.js configuration file.
-   `package.json`: Node.js package manifest, containing dependencies and scripts.
-   `src/`: Source code directory.
    -   `ai/`: Contains AI-related code, leveraging Genkit.
        -   `ai-instance.ts`: Initializes and configures the Genkit AI instance.
        -   `components/`: React components for AI features.
            -   `ai-image-generation.tsx`: Component for generating images using AI.
            -   `ai-scripting.tsx`: Component for generating video scripts using AI.
        -   `dev.ts`: Imports all Genkit flows to make them available.
        -   `flows/`: Genkit flows for AI functionalities.
            -   `generate-thumbnail-image.ts`: Flow to generate thumbnail images from text descriptions.
            -   `generate-video-script.ts`: Flow to generate video scripts from user prompts.
    -   `app/`: Next.js App Router directory, defining the application's routes and UI.
        -   `dashboard/page.tsx`: Dashboard page with creator monetization features.
        -   `globals.css`: Global CSS file, including Tailwind CSS configuration and custom styles.
        -   `layout.tsx`: Root layout component, defining the overall page structure.
        -   `page.tsx`: Home page with a form for user input.
    -   `components/`: Reusable React components.
        -   `icons.ts`: Definitions for icons used throughout the application (using `lucide-react`).
        -   `monetization/`: Components related to creator monetization.
            -   `TipButton.tsx`: Component for sending tips to creators.
        -   `ui/`: ShadCN UI components.
            -   (Various components like `accordion.tsx`, `alert-dialog.tsx`, `button.tsx`, etc.)
    -   `hooks/`: Custom React hooks.
        -   `use-mobile.tsx`: Hook to detect mobile devices.
        -   `use-toast.ts`: Hook for displaying toast notifications.
    -   `lib/`: Utility functions.
        -   `utils.ts`: Utility functions (e.g., for class name merging).
    -   `services/`: API service definitions.
        -   `monetization.ts`: API for monetization features.
    -   `tailwind.config.ts`: Tailwind CSS configuration file.
    -   `tsconfig.json`: TypeScript configuration file.

## UI Styling

The UI styling of CliqueStream is based on ShadCN UI components and Tailwind CSS. To customize the appearance of the application, follow these guidelines:

### Modifying the Color Scheme

1.  **Edit `src/app/globals.css`**: This file contains the Tailwind CSS configuration and custom styles, including the color scheme defined using HSL CSS variables.
2.  **Update HSL Variables**: Modify the `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, and other color variables to match your desired color palette.
3.  **Avoid Overriding Tailwind Colors**: Instead of using inline styles or custom CSS classes that override Tailwind's default colors (e.g., `text-red-500`), rely on the theme generated in `globals.css` to maintain consistency.

### Using ShadCN UI Components

-   **Import Components**: Import ShadCN UI components from the `@/components/ui` directory.
-   **Customize Components**: Use Tailwind CSS classes to customize the appearance of ShadCN UI components.
-   **Maintain Consistency**: Follow the existing styling conventions to ensure a consistent look and feel throughout the application.

## GenAI Features

CliqueStream incorporates AI-powered features using Genkit. The AI-related code is located in the `src/ai` directory.

### Understanding Genkit Flows

-   **Flows**: Genkit flows are defined in the `src/ai/flows` directory. Each flow represents a specific AI task, such as generating a thumbnail image or creating a video script.
-   **Prompts**: Flows typically wrap a call to a Large Language Model (LLM) using Genkit prompts. Prompts are defined in the `src/ai/flows` directory and contain instructions for the LLM.
-   **Schemas**: Each flow and prompt has an input and output schema defined using Zod. The schemas specify the data types and descriptions for the input and output parameters.

### Modifying GenAI Functionality

1.  **Edit Flow Files**: Modify the flow files in the `src/ai/flows` directory to customize the AI functionalities.
2.  **Update Prompts**: Adjust the prompts to change the behavior of the LLM. Use Handlebars templating to dynamically insert data into the prompts.
3.  **Modify Schemas**: Update the input and output schemas to match the new data requirements.
4.  **Register Changes**: Ensure that all Genkit flows are imported in `src/ai/dev.ts` so that Genkit recognizes the changes.

### Example: Modifying the `generate-thumbnail-image.ts` Flow

To modify the `generate-thumbnail-image.ts` flow, follow these steps:

1.  **Open `src/ai/flows/generate-thumbnail-image.ts`**.
2.  **Update the Prompt**: Change the prompt string to modify the instructions given to the LLM. For example, you could add more specific details about the desired thumbnail image.
3.  **Modify the Schema**: Update the input or output schema if you need to change the data types or descriptions of the input or output parameters.
4.  **Save the File**: Genkit will automatically detect the changes and update the flow.

## Other Components

### Dashboard (`src/app/dashboard/page.tsx`)

The dashboard page (`src/app/dashboard/page.tsx`) displays a simple dashboard with a creator monetization section. To modify the dashboard, follow these steps:

1.  **Open `src/app/dashboard/page.tsx`**.
2.  **Modify the JSX**: Change the JSX code to add, remove, or modify the components displayed on the dashboard.
3.  **Update the Logic**: Update the component logic to change the behavior of the dashboard.

### Tip Button (`src/components/monetization/TipButton.tsx`)

The `TipButton` component (`src/components/monetization/TipButton.tsx`) allows users to send tips to creators. To modify the tip button, follow these steps:

1.  **Open `src/components/monetization/TipButton.tsx`**.
2.  **Modify the JSX**: Change the JSX code to update the appearance of the tip button.
3.  **Update the Logic**: Update the component logic to change the behavior of the tip button, such as modifying the tip amount or currency.
4.  **Update the `processTip` function**: The `processTip` function in `src/services/monetization.ts` is a placeholder.  Implement this function by calling an API.

### Icons (`src/components/icons.ts`)

The `icons.ts` file (`src/components/icons.ts`) defines the icons used throughout the application. The icons are imported from the `lucide-react` library. To add or remove icons, follow these steps:

1.  **Install Icon**: If the icon is not part of lucide, you will need to find an alternative or use an inline SVG.
2.  **Import Icon**: Import the icon from the `lucide-react` library.
3.  **Add Icon**: Add the icon to the `Icons` object with a descriptive name.
4.  **Use Icon**: Use the icon in your components by referencing it from the `Icons` object.

## Making Code Changes

When making code changes, follow these guidelines:

-   **Use TypeScript**: Ensure that all code is written in TypeScript to enhance code quality and type safety.
-   **Create Reusable Components**: Create isolated, reusable components with default props for maintainability.
-   **Leverage Server Actions**: Use Server Actions for form submissions and data mutations without building API endpoints.
-   **Apply Error Handling**: Implement proper error handling with error.js boundary files at appropriate route segments.
-   **Optimize Images**: Optimize images with the built-in `next/image` component.
-   **Ensure Responsiveness**: Ensure that the application is responsive and accessible on different devices and browsers.
-   **Write Clean Code**: Prioritize clean, readable, well-organized, and performant code.

By following these guidelines, you can effectively customize and extend CliqueStream to meet your specific requirements.
