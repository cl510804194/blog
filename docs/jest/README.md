---
title: Jest
lang: en-US
---

## 常用方法

- test 方法：Jest 封装的测试方法，一般填写两个参数，描述和测试方法

- expect 方法 ：预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么(代码中详细讲解)

```js
const dabaojian = require("./dabaojian.js");
const { baojian1, baojian2 } = dabaojian;

test("保健1 300元", () => {
  expect(baojian1(300)).toBe("至尊享受");
});

test("保健2  2000元", () => {
  expect(baojian2(2000)).toBe("双人服务");
});
```

## 单元测试和集成测试的区别

- 单元测试：英文是(unit testing) 单,是指对软件中的最小可测试单元进行检查和验证。前端所说的单元测试就是对一个模块进行测试。也就是说前端测试的时候，你测试的东西一定是一个模块
- 集成测试：也叫组装测试或者联合测试。在单元测试的基础上，将所有模块按照涉及要求组装成为子系统或系统，进行集成测试。

## 匹配器

- toBe
  toBe()匹配器，是在工作中最常用的一种匹配器，简单的理解它就是相等。这个相当是等同于===的，也就是我们常说的严格相等。
- toEqual
  使用 toEqual()匹配器。可以把它理解成只要内容相等，就可以通过测试
- toBeNull
  toBeNul()匹配器只匹配 null 值，需要注意的是不匹配 undefined 的值
- toBeUndifined
  要匹配 undefined 时，就可以使用 toBeUndifined()匹配器
- toBeDefined
  toBeDefined()匹配器的意思是只要定义过了，都可以匹配成功
- toBeTruthy
  这个是 true 和 false 匹配器，就相当于判断真假的
- toBeFalsy
  这个匹配器只要是返回的 false 就可以通过测试
- toBeGreaterThan
  这个是用来作数字比较的，大于什么数值，只要大于传入的数值，就可以通过测试
- toBeLessThan
  toBeLessThan 跟 toBeGreaterThan 相对应的，就是少于一个数字时，就可以通过测试
- toBeGreaterThanOrEqual
  当测试结果数据大于等于期待数字时，可以通过测试
- toMatch
  字符串包含匹配器，比如象牙山洗脚城有三个美女：谢大脚、刘英和小红，这时候我们要看看字符串中有没有谢大脚就可以使用 toMatch()匹配器
- toContain
  toMatch 是字符，但是 toContain 是数组

  ```js
  test("toContain匹配器", () => {
    const arr = ["谢大脚", "刘英", "小红"];
    const data = new Set(arr);
    expect(data).toContain("谢大脚");
  });
  ```

## 异步代码测试

- 使用 promise

```js
export const fetchTwoData = () => {
  return axios.get("http://a.jspang.com/jestTest.json");
};
```

测试代码

```js
test("FetchTwoData 测试", () => {
  return fetchTwoData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});
```

- async await

```js
export const fetchFourData = () => {
  return axios.get("http://a.jspang.com/jestTest.json");
};
```

```js
test("FetchFourData 测试", async () => {
  const response = await fetchFourData();
  expect(response.data).toEqual({
    success: true,
  });
});
```
