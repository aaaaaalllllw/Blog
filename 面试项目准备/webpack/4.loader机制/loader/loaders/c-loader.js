function CLoader(content, map, meta) {
    console.log("执行 c-loader 的normal阶段");
    return content + "//给你加点注释(来自于CLoader)";
  }
  CLoader.pitch = function () {
    console.log("CLoader的pitch阶段");
  };
  module.exports = CLoader;