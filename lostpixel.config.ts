import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
    pageShots: {
        pages: [{ path: "/", name: "landing" }],
        // baseUrl: "http://172.17.0.1:3000",
    },
    lostPixelProjectId: "clmrneb1b6nzmj40ee4p7x86h",
    apiKey: process.env.LOST_PIXEL_API_KEY,
};
