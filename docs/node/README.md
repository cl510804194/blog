---
title: 性能
lang: en-US
---

## common 规范

1. script 标签
   脚本变多时，需要手动管理加载顺序
2. require
   模块默认输出一个空对象 也可以使用
   `js export.xxx='world;`
   挂载任何东西
3. module.exports
   如果使用了 module.exports,将会覆盖掉 exports
4. EventEmitter
   - 观察者模式
   - 调用 vs 抛事件
5. 非阻塞 I/O
   - 排队打饭是阻塞，
     `js glob.sync()`
   - 餐馆吃饭是非阻塞
     `js glob(__dirname,XXX)`

## RPC 调用

Remote Procedure Call 远程过程调用
服务器与服务器之间的通信
特点：

1. 不一定使用 DNS 作为寻址服务
2. 应用层协议一般不使用 HTTP
3. 基于 TCP 或者 UDP
4. TCP 通信方式
   - 单工通信
   - 双工通信
   - 全双工通信
5. 二进制协议
   - 更小的数据包体积
   - 更快的编解码速率
6. Node.js buffer
   Buffer 对象用于以字节序列的形式表示二进制数据
   每一位都是 16 进制
7. net

## 异步

1. async await
   async 只是 promise 的语法糖
   await 可以将 promise 的错误抛到 catch 里面

## 性能

1. 压力测试工具
   - ab: apache bench
     -c 同时多少个服务
     -n 总共多少个服务
     Requests per second 每秒最多的请求量
   - webbench
   - top 测试 cpu 以及内存
   - iostat 检测各个硬盘 io 的性能
     nodeJs 字符串拼接是 js 的性能缺陷瓶颈
2. node 自带工具 profile
   `node --prof 文件名`
3. Chrome devtool
4. Clinic.js
5. javascript 性能优化
   - 尽量在中间件中的计算移出去
   - 减少不必要的计算
   - 空间换时间
   - 思考：在用户能感知的时间内，哪些计算是不需要的
6. 内存优化
   减少内存使用，以及避免内存泄露
   减少内存使用的最好方式是建立池
   - 垃圾回收
     `新生代`:容量小，垃圾回收更快
     `老生代`:容量大，垃圾回收更慢
   - node.js Buffer 的内存分配策略
     小于 8kB 的 buffer 在一个 8kb 的 char 数组切出小块给这个 buffer 使用，一旦有一个小的 buffer 在该 char 数组中不够用，就新生成一个 char 数组，
7. 代码优化
   - node 模块 C++Addons
   - node-gyp 将 js 编译成 c++模块
8. 多进程优化
   - 进程
     操作系统挂载运行程序的单元
     拥有一些独立的资源，如内存等
   - 线程
     进行运算调度的单元
     进程内的线程共享进程内的资源
   - child_process 模块
     1. process 是一个全局变量
     2. 父子进程可以相互交流
   - Worker Threads 模块
   - cluster 模块(重要)
     1. 使用 os 模块获取 cpu 个数
9. 进程守护与管理
   - `process.on('uncaughtException)` 进行错误监控
   - `process.memoryUsage().ress` 内存泄露
10. 动静分离
    - 静态内容
      基本不会变动，也不会因为请求参数不同而变化
      ->CDN 分发，HTTP 缓存等
    - 动态内容
      各种因为请求参数不同而变动，且变种的数量几乎不可枚举
      -> 用大量的源站机器承载，结合反响代理进行负载均衡
11. 反向代理
    -
