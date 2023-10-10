/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "oaidalleapiprodscus.blob.core.windows.net",
        ]
    },
    webpack:(config)=>{
        config.resolve.alias = {
            ...config.resolve.alias,
            "sharp$":false,
            "onnxruntime-node$":false
        }
        return config;
    }
}

module.exports = nextConfig
