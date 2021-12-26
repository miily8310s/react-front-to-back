// srcディレクトリの絶対パス指定を@に変更するとcreate-react-app側で勝手にtsconfig/webpackの設定が上書きされてしまうため、作成
// @see https://chaika.hatenablog.com/entry/2021/07/22/083000

const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
