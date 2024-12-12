import {
  defineDocs,
} from "fumadocs-mdx/config";
import { defineConfig } from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkInstall,
        {
          persist: {
            id: "persist-install",
          },
        },
      ],
    ],
  },
});



export const { docs, meta } = defineDocs({
  dir: "./content/docs",
});