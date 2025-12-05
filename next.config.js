/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000',
        dbName: 'socialMediaNextDev'
    },
    compiler: { styledComponents: true, }
}

const nextConfigProduction = {
    env: {
        BASE_URL: 'https://reactmavrick.online/friend-finder',
        // BASE_URL: 'http://localhost:8000',
        dbName: 'socialMediaNextProduction',
    },
    compiler: { styledComponents: true, },
    assetPrefix: "https://reactmavrick.online/friend-finder",
    basePath: "/friend-finder",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "reactmavrick.online",
                port: "",
                pathname: "/friend-finder/**",
            },
        ],
    },
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}