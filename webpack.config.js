const path = require("path"); //node 깔려있으면 사용가능

module.exports = {
  name: "word-relay-setting", //웹팩설정의 이름
  mode: "development", //실서비스 : production
  devtool: "eval", //빠르게

  entry: {
    //app: ["./client.jsx", "./WordRelay.jsx"] 배열안의것들을 합쳐서 아래의 app.js로 만들어준다.
    app: ["./client"], //client.jsx가 WordRelay.jsx를 불러오고있기 때문에 client.jsx만 포함시켜도 된다.
  }, // 입력
  output: {
    path: path.join(__dirname, "dist"), //__dirname : 현재 폴더 위치에서 dist
    filename: "app.js",
  }, // 출력
};
