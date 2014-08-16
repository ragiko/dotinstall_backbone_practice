module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './src', //ライブラリの配置先のディレクトリ
          layout: 'byType', // レイアウト、説明は後述します
          install: true, //grunt実行時にbower installを実行するかどうか
          verbose: false, // ログの詳細を出すかどうか
          cleanTargetDir: true, // targetDirを削除するかどうか
          cleanBowerDir: false // bowerのcomponentsディレクトリを削除するかどうか
        }
      }
    },

    // ファイルの結合
    concat: {
      dist: {
        src: [
          'src/jquery/jquery.js',
          'src/underscore/underscore.js',
          'src/backbone/backbone.js',
          'src/backbone.localStorage/backbone.localStorage.js',
        ],
        dest: "dist/built.js",
      },
    },

    // ファイルの圧縮
    uglify: {
        dist: {
            files: {
                // 出力ファイル: 元ファイル
                'dist/built.min.js': 'dist/built.js'
            }
        }
    },

    // ファイルの監視
    // watch: {
    //     js: {
    //         files: 'src/*/*.js', // 監視対象ファイル
    //         tasks: ['concat', 'uglify'] // 実行させるタスク
    //     }
    // }

  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify']);
};
