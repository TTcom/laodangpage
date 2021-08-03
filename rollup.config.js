import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "@rollup/plugin-babel";
import html from "@rollup/plugin-html";
// import { terser } from "rollup-plugin-terser"; 
import postcss from 'rollup-plugin-postcss'  //处理css文件
import serve from 'rollup-plugin-serve'  //开启本地服务器
import livereload from 'rollup-plugin-livereload'  //开启热更新
export default [
    // 第一个入口文件
    {    
        	input: {
                index:'./index.js',
                first:'./first.js',
                partner:'./partner.js',
                contact:'./contact.js',
                news:'./news.js',
                recruitment:'./recruitment.js'
            },
            output:{
                dir: 'dist',
                format: 'es',
                name: 'laotang'
            },
            plugins: [  // 注意这里是plugins!!!，我就是写成了plugin，结果插件都无效
        		resolve(),   //解决引入依赖的第三方库进行合并的问题
        		commonjs(), //解决大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm模块不能直接编译使用的问题
        	    babel({ babelHelpers: 'bundled' }),
                postcss(),
                livereload(),
                serve({
                    open:true,
                    port:8888,
                    contentBase:""
        
                }),
                html()
            ],
            external: [], //不想在最终生成的打包文件中出现的第三方依赖
        }
    // 第二个入口文件
    // {
    //   input: "./news.js",
    //   output: [
    //     // 多个输出文件
    //     {
    //       file: "dist/bundle-b1.js",
    //       format: "cjs"
    //     },
    //     {
    //       file: "dist/bundle-b2.js",
    //       format: "esm"
    //     }
    //   ]
    // },
  ];
  //（注意顺序,resolve应当放在commonjs之前）
// export default{    
// 	// input: {
//     //     index:'./index.js',
//     //     first:'./first.js',
//     //     partner:'./partner.js',
//     //     contact:'./contact.js',
//     //     news:'./news.js',
//     //     recruitment:'./recruitment.js'
//     // },
//     // output:{
//     //     dir: 'dist',
//     //     format: 'es',
//     //     name: 'laotang'
//     // },
//     // output:[
//     //     {
//     //         format: 'umd',
//     //         name: 'Vue',  // 如果format是umd, name必填否则报错
//     //         file: 'dist/index.js',
//     //     },
//     //     {
//     //         format: 'umd',
//     //         name: 'Vue',  // 如果format是umd, name必填否则报错
//     //         file: 'dist/index.min.js',
//     //         plugins: [
//     //             terser({
//     //                 compress: {
//     //                   pure_funcs: ['console.log'], // 去掉console.log函数
//     //                 }
//     //               })
//     //         ]
//     //     },
//     // ],
    
//     plugins: [  // 注意这里是plugins!!!，我就是写成了plugin，结果插件都无效
// 		resolve(),   //解决引入依赖的第三方库进行合并的问题
// 		commonjs(), //解决大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm模块不能直接编译使用的问题
// 	    babel({ babelHelpers: 'bundled' }),
//         postcss(),
//         serve({
//             open:false,
//             port:8888,
//             contentBase:""

//         }),
//         html()
//     ],
//     external: [], //不想在最终生成的打包文件中出现的第三方依赖
// }
