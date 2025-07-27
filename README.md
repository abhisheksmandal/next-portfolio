# DevOps Virtuoso - A Next.js Portfolio

This is a dynamic and interactive portfolio website built with Next.js, React, Tailwind CSS, and ShadCN UI. It's designed to showcase the skills, projects, and journey of a DevOps professional in a modern, engaging way. The project is fully data-driven, with all content managed through simple JSON files.

## Live Demo

A live version of the site is available here: [your-live-site-url.com](https://your-live-site-url.com)

## Key Features

-   **Fully Responsive Design:** Looks great on all devices, from mobile to desktop.
-   **Data-Driven Content:** All text, projects, skills, and journey information are loaded from JSON files in the `src/data` directory, making customization easy.
-   **Interactive Elements:** Features like a CI/CD pipeline visualization and an interactive terminal dialog enhance user engagement.
-   **Dark/Light Mode:** Includes a theme toggler for user preference.
-   **Modern UI:** Built with ShadCN UI components for a clean and professional look.
-   **Optimized for Performance:** Leverages Next.js App Router and Server Components for fast load times.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** Google Fonts (`Poppins` and `Source_Code_Pro`)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Navigate to the project directory
    ```sh
    cd your_repository
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run:
```sh
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Customization

This portfolio is designed to be easily customized. All content is stored in JSON files within the `src/data` directory.

-   `src/data/header.json`: Modify navigation links.
-   `src/data/home.json`: Change all text content for the homepage sections.
-   `src/data/footer.json`: Update social media links and copyright text.
-   `src/data/skills.json`: Add or remove skills and their corresponding icons.
-   `src/data/projects-list.json`: Manage the list of your projects.
-   `src/data/journey-events.json`: Add, edit, or remove events from your professional timeline.
-   `src/data/posts.json`: Write or update your blog articles.

To change images, replace the placeholder URLs in the JSON files with your own image paths or URLs and update the `next.config.ts` file to allow your image hostnames if necessary.

## License

Distributed under the MIT License. See `LICENSE` for more information.
