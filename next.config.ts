import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Lets you hotlink the client's existing images while you work.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
