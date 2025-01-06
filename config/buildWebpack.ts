import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolver } from "./buildResolver";
import { BuildOptions } from "./types/types";



export function buildWebpack(options:BuildOptions): webpack.Configuration {
    const isDev = options.mode === "development";
    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolver(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined

    }
}