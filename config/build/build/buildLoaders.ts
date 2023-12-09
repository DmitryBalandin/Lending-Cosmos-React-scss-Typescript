import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === "development";

    const loaderCss = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    };

    const loaderTsx = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        loaderCss,
        loaderTsx
    ]
}