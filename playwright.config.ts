import {devices, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    expect: {
        timeout: 20 * 1000,
    },
    use: {
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome ']}
        },
        {
            name: 'Mobile Android',
            use: {
                ...devices['Galaxy S9+'],
            },
        },

    ]
};

export default config;
