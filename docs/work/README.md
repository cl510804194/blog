---
title: 性能
lang: en-US
---

### 在 react-hooks 中绑定防抖

```js
import { debounce } from "lodash";
const handleSubmit = debounce((v, e) => {
  console.log(e);
  if (e) {
    return;
  }
}, 300);
```

### textarea 阻止默认事件，ctrl+enter 发送，enter 换行

```js
const changeInput = (e) => {
  if (e.keyCode === 13 && !e.ctrlKey) {
    console.log("你点击了回车键");
  } else if (e.ctrlKey && e.keyCode === 13) {
    e.preventDefault();
    console.log("提交代码");
    setinputValue("");
  } else {
    setinputValue(e.target.value);
  }
};
```
