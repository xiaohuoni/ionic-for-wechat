module.exports = function (grunt) {

    // 构建任务配置
    grunt.initConfig({
        //读取package.json的内容，形成json数据
        pkg: grunt.file.readJSON('package.json'),
        // 压缩所有js并生成source map
        uglify: {
            my_target: {
                options: {
                    sourceMap: false
                },
                files: [
                    {
                        expand: true,
                        cwd: 'www/js/',
                        // 排除.min的文件
                        //src: ['**/*.js', '!*.min.js','!newsdk/**'],
                        src: ['**/*.js', '!*.min.js'],
                        // 输出和输入在同一目录
                        dest: 'www/dest/js',
                        ext: '.js'
                    }
                ]
            }
        },

        // 压缩所有css
        cssmin: {
            minify: {
                files:[{
                    expand: true,
                    cwd: 'www/css/',
                    src: ['**/*.css', '**/!*.min.css'],
                    dest: 'www/dest/css/',
                    ext: '.css'
                },{
                    expand: true,
                    cwd: 'www/lib/ionic/css/',
                    src: ['**/*.css', '**/!*.min.css'],
                    dest: 'www/lib/ionic/css/',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [
                    {
                        expand: true,
                        cwd: 'www/img/',
                        src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: 'www/dest/img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                ]
            }
        },
        copy: {
            main: {
                files: [
                    //{expand: true,cwd:'www/lib/ionic/css/', src: ['ionic.min.css'], dest: 'www/dest/lib/ionic/css/', filter: 'isFile'},
                    {expand: true,cwd:'www/lib/', src: ['**'], dest: 'www/dest/lib/', filter: 'isFile'},
                    //{expand: true,cwd:'www/lib/ionic/fonts/', src: ['*'], dest: 'www/dest/lib/ionic/fonts/', filter: 'isFile'},
                    //{expand: true,cwd:'www/lib/ionic/js/', src: ['ionic.bundle.min.js'], dest: 'www/dest/lib/ionic/js/', filter: 'isFile'},
                    //{expand: true,cwd:'www/lib/oclazyload/dist/', src: ['ocLazyLoad.min.js'], dest: 'www/dest/lib/oclazyload/dist/', filter: 'isFile'},
                    {expand: true,cwd:'www/', src: ['*'], dest: 'www/dest/', filter: 'isFile'},
                    //{expand: true,cwd:'www/templates', src: ['**'], dest: 'www/dest/templates/', filter: 'isFile'},
                    //{expand: true,cwd:'www/js/newsdk/res/', src: ['**'], dest: 'www/dest/js/newsdk/res/', filter: 'isFile'},
                ]
            }
        },
        //jsdoc : {
        //  dist : {
        //    src: ['www/js/*/*.js'],
        //    options: {
        //      private    : true,
        //      destination: 'www/dest/doc'
        //    }
        //  }
        //}

        htmlmin: {
                 options: {
                   removeComments: true,
                   removeCommentsFromCDATA: true,
                   collapseWhitespace: true,
                   collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
              },
           html: {
               files: [
                      {expand: true, cwd: 'www/templates', src: ['**'], dest: 'www/dest/templates/',filter: 'isFile'}
                    ]
              }
        }
    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 默认执行的任务
    grunt.registerTask('default', ['uglify', 'cssmin','imagemin','copy','htmlmin']);
    //grunt.registerTask('default', ['uglify', 'cssmin','jsdoc']);
    //grunt.registerTask('default', ['uglify', 'cssmin']);
    //grunt.registerTask('default', ['uglify','copy']);
    //grunt.registerTask('default', ['copy']);
};
