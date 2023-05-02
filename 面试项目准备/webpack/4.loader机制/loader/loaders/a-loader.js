//a-loader.js
function ALoader(content, map, meta) {
    console.log("执行 a-loader 的normal阶段");
    return content + "//给你加点注释(来自于Aloader)";
  }

  
ALoader.pitch = function () {
  console.log("ALoader的pitch阶段");
};
  module.exports = ALoader;