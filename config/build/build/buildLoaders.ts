import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === "development";
    const localClassName = isDev ? '[path][name]__[local]' :
        '[hash:base64:8]';


    const assetLoaders = {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource'
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    };

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                auto: true,
                localIdentName: localClassName,
            }
        },


    };

    const loaderCss = {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", cssLoaderWithModules, "sass-loader",],
    };

    const loaderTsx = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        svgLoader,
        assetLoaders,
        loaderCss,
        loaderTsx
    ]
}