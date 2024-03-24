const path = require('path');

module.exports = (env) => {
      const isProduction = env.production === 'true';

      return{
            // ビルドのモード: 'development' or 'production'
            mode: isProduction ? 'production' : 'development',
            // エントリーポイント（ビルドを開始するファイル）
            entry: path.resolve(__dirname, `index.js`),
            // 出力設定
            output: {
                  // 出力ファイル名
                  filename: 'index.js',
                  // 出力ディレクトリの絶対パス
                  path: path.resolve(__dirname, 'dist'),
                  library: 'changeImgLibrary',
                  libraryTarget: 'umd'
            },
      }
      
    
};
