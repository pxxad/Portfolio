import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Automate rename of loader asset during config load
try {
  const source = path.join(process.cwd(), "public/images/pokemon/loading-pikachu.gif.jfif");
  const target = path.join(process.cwd(), "public/images/pokemon/thunder-pikachu-loader.gif");
  if (fs.existsSync(source)) {
    fs.renameSync(source, target);
    console.log("Successfully renamed loading-pikachu.gif.jfif to thunder-pikachu-loader.gif");
  }
} catch (err) {
  console.error("Error renaming loader asset in next.config.ts:", err);
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

