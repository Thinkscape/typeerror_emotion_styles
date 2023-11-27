const CircularDependencyPlugin = require("circular-dependency-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    /** @type {{ externals: Array<{ [x: string]: string; }>; plugins: Array<unknown> }} */ config
  ) => {
    // Prevent Node-optimised modules from importing node-fetch, use the Next.js fetch instead.
//    config.plugins.push(
//      new CircularDependencyPlugin({
//        // add errors to webpack instead of warnings
//        failOnError: false,
//        // allow import cycles that include an asyncronous import,
//        // e.g. via import(/* webpackMode: "weak" */ './file.js')
//        allowAsyncCycles: true,
//        // set the current working directory for displaying module paths
//        cwd: process.cwd(),
//      })
//    );

    return config;
  },
};

module.exports = nextConfig;
