import {createMDX} from "fumadocs-mdx/next";
import {remarkInstall} from 'fumadocs-docgen';

const withMDX = createMDX({
    configPath: "./source.config.ts"
});

/** @type {import('next').NextConfig} */
const config = {
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
    reactStrictMode: true,
    remarkPlugins: [remarkInstall],
};

export default withMDX(config);
