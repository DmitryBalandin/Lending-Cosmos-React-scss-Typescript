import { Configuration } from "webpack";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === "development";

    return [
        isDev && new MiniCssExtractPlugin(
            // {
            //     filename: 'css/[name].[contenthash:8].css',
            //     chunkFilename: 'css/[name].[contenthash:8].css'
            // }
        ),
        new HtmlWebpackPlugin({ template: options.paths.html }),


    ].filter(Boolean)
}

