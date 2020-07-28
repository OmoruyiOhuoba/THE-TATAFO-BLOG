const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        "babel-polyfill", "./src/index.js"
    ],

    output:{
        publicPath: "/",
        filename: "./main.js"
    },

    resolve:{
        extensions: [".js",".jsx"],
    },

    modules:{
        rules: [ 
            {
            test: /\.(js|jsx)$/,
            use: {
            loader: "babel-loader",
            },
            exclude: /node_modules/
            
        },

        { 
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: { 
            loader: "file-loader",
             options:{
                name: "public/img/[name].[ext]",
                outputPath: "dist/img"
             } 

        }
           
        },

        {
            test: /\.scss$/,
            use: miniCssExtractPlugin.extract({
                fallback: "style-loader",
                use: [ 
                        {
                         loader:"css-loader", 
                         options: {minimize: true}
                        }
                        ,"sass-loader"
                    ]
            })
                
        },

        {
            test: /\.html$/,
            use: htmlWebpackPlugin.extract({
                use: {
                    loader:"html-loader",
                     options:{minimize: true}
                }
            })
        },

        {
            test: /\.(otf|ttf|eot|woff|woff2)$/,
            use:{
                loader: "file-loader",
                options: {
                    name: "/public/fonts/[name].[ext]",
                    outputPath:"dist/fonts/",
                }
            }
        }
           
        ]
    
    },

    plugins:[
        miniCssExtractPlugin({filename: "style.css"}),
        htmlWebpackPlugin({
            hash: true,
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
       
    devServer: {
        historyApiFallBack: true,
        publicPath:"/",
        contentBase: "./dist"
    }

}