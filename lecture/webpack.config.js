const path = require("path"); //node 깔려있으면 사용가능

module.exports = {
  name: "word-relay-setting", //웹팩설정의 이름
  mode: "development", //실서비스 : production
  devtool: "eval", //빠르게(개발), production일때는 hidden-source-map

  resolve: {
    extensions: [".jsx", ".js"], //확장자를 포함시킴으로 이 두 타입은 확장자 생략하여 entry작성 가능
  },

  //entry에 있는 file을 읽고, module을 적용한 후 output에 뺀다.
  entry: {
    //app: ["./client.jsx", "./WordRelay.jsx"] 배열안의것들을 합쳐서 아래의 app.js로 만들어준다.
    app: ["./client"], //client.jsx가 WordRelay.jsx를 불러오고있기 때문에 client.jsx만 포함시켜도 된다.
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader", //최신,실험적인 문법을 호환되는 옛날문법으로 바꿔준다
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), //__dirname : 현재 폴더 위치에서 dist
    filename: "app.js",
  }, // 출력
};
