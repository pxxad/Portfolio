import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Automate rename of loader asset during config load
try {
  const filesToRename = [
    { src: "loading-pikachu.gif.jfif", dest: "thunder-pikachu-loader.gif" },
    { src: "hero-bg-light.jfif", dest: "hero-bg-light.jpg" },
    { src: "hero-laptop.jfif", dest: "hero-laptop.jpg" }
  ];
  filesToRename.forEach(({ src, dest }) => {
    const sourcePath = path.join(process.cwd(), "public/images/pokemon", src);
    const destPath = path.join(process.cwd(), "public/images/pokemon", dest);
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, destPath);
      console.log(`Successfully renamed ${src} to ${dest}`);
    }
  });
} catch (err) {
  console.error("Error renaming assets in next.config.ts:", err);
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

