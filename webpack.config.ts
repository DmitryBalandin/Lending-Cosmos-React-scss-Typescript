import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {buildWebpack} from "./config/build/build/buildWebpack";
import { BuildPaths } from './config/build/build/types/types';
import { BuildMode } from './config/build/build/types/types';


interface EnvVariables {
  mode: BuildMode,
  port: number
}



export default (env: EnvVariables) => {

  const isDev = env.mode === "development";
  const paths: BuildPaths = {
    output:path.resolve(__dirname,"build"),
    entry:path.resolve(__dirname,"src","index.tsx"),
    html: path.resolve(__dirname,'public','index.html'),
  }
  
  
  const config: webpack.Configuration = buildWebpack({
    port:env.port ?? 3000,
    mode:env.mode ?? 'development',
    paths
  })
  return config;
}




