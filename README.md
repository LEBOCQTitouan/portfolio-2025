# Portfolio 2025

My portfolio built with Next.js utilizing React Three Fiber for 3D rendering and interactive web experiences.

## Installation

1. **Clone the repository**

   ```bash
   git https://github.com/LEBOCQTitouan/portfolio-2025.git
   cd portfolio-2025
   ```

2. **Install dependencies**

   This project requires Node.js and npm. Install all required dependencies:

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add necessary environment variables specific to your project setup. Example:

   ```plaintext
   NOTHING yet here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   This will start the server locally at `http://localhost:3000`. You can view and interact with your project here.

## Usage

1. **Running in Development Mode**

   Run the development server to get hot reloading and fast refresh.

   ```bash
   npm run dev
   ```

2. **Building for Production**

   To optimize and prepare the project for deployment, build it with:

   ```bash
   npm run build
   ```

   This command creates an optimized production build in the `.next` folder.

## Features

- **3D Visualization with React Three Fiber**: Create and display 3D models, animations, and scenes using React Three Fiber.

## Technologies

### General

- React Framework : Next JS
- Typescript : Used to add type safety and enhance code quality and maintainability.

### Front-end

- 3D Graphics: React Three Fiber – A React renderer for Three.js, enabling the integration of 3D models, animations, and interactive scenes.

### Back-end

Nothing here.

## Project Structure

```plaintext
portfolio-2025/
├── public/                 # Static assets like images, icons, etc.
├── src/                    # Source code for the application
│   ├── app/                # Main application setup, including global styling and layout
│   │   ├── fonts/          # Font assets used across the application
│   ├── components/         # Reusable components that make up the building blocks of the application
│   │   ├── layout/         # Layout-related components, such as header, footer, or sidebar components
│   │   ├── three/          # Components related to 3D rendering using React Three Fiber
│   │   │   ├── objects/    # Contains 3D objects used within scenes, enabling modular and reusable 3D elements
│   │   │   └── scene/      # Scene-related components, which bring together 3D objects to create interactive environments
│   │   └── ui/             # General UI components like buttons, forms, and other interface elements
```

## upgrade to make to the project

[] Upgrade Next.js version
