// source.config.ts
import {
  defineDocs
} from "fumadocs-mdx/config";
import { defineConfig } from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkInstall,
        {
          persist: {
            id: "persist-install"
          }
        }
      ]
    ]
  }
});
var { docs, meta } = defineDocs({
  dir: "./content/docs"
});
export {
  source_config_default as default,
  docs,
  meta
};
