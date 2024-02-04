/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000',
        userName: 'priyamwebsadroit',
        password: 'HdNJ1R1HBNSxXBQV',
        dbName: 'socialMediaNextDev',
        PORT: '5000'
    }
}

const nextConfigProduction = {
    env: {
        // BASE_URL: 'https://social-media-next-nu.vercel.app/',
        BASE_URL: 'http://localhost:3000',
        userName: 'priyamwebsadroit',
        password: 'HdNJ1R1HBNSxXBQV',
        dbName: 'socialMediaNextProduction',
        PORT: '5000'
    },
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}