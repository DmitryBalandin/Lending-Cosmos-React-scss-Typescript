import { Configuration } from "webpack";
import webpack  from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/types";


export function buildPlugins(options: BuildOptions):Configuration['plugins']{
    const isDev = options.mode === "development";

    return [new HtmlWebpackPlugin({ template: options.paths.html }),
    isDev && new webpack.ProgressPlugin(),

    ].filter(Boolean)
}