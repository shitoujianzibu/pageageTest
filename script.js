const fs = require("fs");
const path = require("path");

// 生成导出文件
fs.readdir(path.join(__dirname, "./src/components"), function (err, files) {
  if (err) {
    console.log("目录不存在");
    return;
  }
  // 设置时间以提交git
  let content = `/*${new Date()}*/`;
  let ex = [];
  // 处理导出代码
  files.forEach((item) => {
    // 读取目录名
    content = content + `import ${item} from './components/${item}';`;
    ex.push(item);
  });
  ex = ex.join(",");
  content = content + `export { ${ex} }; `;

  fs.writeFile(
    path.join(__dirname, "./src/index.js"),
    content,
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );
});
