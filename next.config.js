/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000',
        dbName: 'socialMediaNextDev'
    }
}

const nextConfigProduction = {
    env: {
        BASE_URL: 'http://194.163.131.163:8000',
        // BASE_URL: 'http://localhost:8000',
        dbName: 'socialMediaNextProduction',
    }
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}