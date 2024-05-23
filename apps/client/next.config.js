/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// import { NextFederationPlugin } from "@module-federation/nextjs-mf";

await import('./src/environments/env.js')

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdttbznbakm1xdhq.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // webpack(config, options) {
  //   const { isServer } = options;
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: "host",
  //       filename: "static/chunks/remoteEntry.js",
  //       remotes: {
  //         remote: `remote@http://localhost:8000/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
  //       },
  //       exposes: {},
  //       shared: {},
  //       extraOptions: {
  //         debug: true,
  //       },
  //     }),
  //   );

  //   return config;
  // },
}

export default nextConfig
