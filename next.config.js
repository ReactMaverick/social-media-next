/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000',
        userName: 'priyamwebsadroit',
        password: 'HdNJ1R1HBNSxXBQV',
        dbName: 'socialMediaNextDev',
    }
}

const nextConfigProduction = {
    env: {
        // BASE_URL: 'https://social-media-next.onrender.com',
        BASE_URL: 'http://localhost:3000',
        userName: 'priyamwebsadroit',
        password: 'HdNJ1R1HBNSxXBQV',
        dbName: 'socialMediaNextProduction',
    },
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}