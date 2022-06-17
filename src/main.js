import { task } from "./task.js";
import { tab } from "./tab.js";
task();
tab();
import "./styles/index.css";
import "./styles/index.less";
//导入图片
import gifStr from "./assets/1.gif";
const gif = document.createElement("img");
gif.src = gifStr;
document.body.appendChild(gif);
//导出字体图标
import "./assets/fonts/iconfont.css";
const fn = () => {
  console.log("你好！");
};
import app from "./app.vue";
import vue from "vue";
