import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
};

export default withMDX(config);
