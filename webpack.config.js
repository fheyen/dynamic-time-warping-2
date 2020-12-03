const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/dynamic-time-warping.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dynamic-time-warping.min.js",
        library: "$",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    mode: "development",
    // mode: "production",
};
