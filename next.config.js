const data = [
    {
        path: '/'
    },
    {
        path: '/meet-the-team'
    },
    {
        path: '/contact'
    },
    {
        path: '/about'
    }
];
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const webpack = require('webpack')
const path = require('path');
const runtimeCaching = require('next-pwa/cache');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === 'production'
module.exports = withPlugins([
    [
        optimizedImages, {
        optimizeImagesInDev: true,
        optimizeImages: true,
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        removeOriginalExtension: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75,
        },


        /* config for next-optimized-images */
        images: {
            domains:
                [
                    'source.unsplash.com', 'images.unsplash.com', 'matchthemes.com'

                ],
        },
        compress: true,
        TrailingSlash: true,

        exportPathMap: async function () {
            //you can get route by fetch
            const paths = {
                '/': { page: '/' }
            };

            data.forEach((project) => {
                paths[`${project.path}`] = {
                    page: project.path,
                };
            });
            return paths;
        }
    },

    ],

    [withPWA, {
        pwa: {
            dest: 'public',
            runtimeCaching,
            register: true,
            disable: process.env.NODE_ENV === 'development'
        },

        // This is not required to make it into a PWA, but is a nice way to clean up your imports
        webpack: (config) => {
            config.resolve.modules.push(path.resolve('./'));
            return config;
        }
    }],
]);