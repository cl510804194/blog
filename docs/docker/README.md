---
title: docker
lang: en-US
---

## 容器命令

`docker run`

- -d 后台运行
- -it 前台运行
- docker logs -f -t --tail 容器 ID
  - -t 加入时间戳
  - -f 不停追加
  - --tail 倒数三行
  - -p 指定端口
  - -P 随机端口
- docker top 容器 ID 查看该容器的进程
- dokcer inspect 容器 ID 查看容器内部细节
- docker exec -it 容器 ID 进入容器

## 镜像原理

- 底层 UnionsFs 联合文件系统 由一层一层的文件系统组成 洋葱圈模型
- 公用内核 rootFs

## 镜像 commit

docker commit 提交容器副本使之成为一个新的镜像

-

## 容器数据卷

容器间数据+共享数据

- docker cp 容器 Id：容器内路径 目的主机路径
- docker run -it -v /宿主机的绝对路径:/容器内目录 镜像名

1. 数据卷可在容器之间共享
2. 持久化
3. 容器内添加 直接命令添加和 DockerFile 添加
4. 容器停止退出后，数据依然同步

## DockerFile

`scratch` 基础镜像元
每条保留命令后面不能为空，且必须为大写
每条指令都会创建新的镜像层，并对镜像进行提交

1. FROM 基础镜像，当前新镜像是基于哪个镜像
2. MAINTAINER 镜像维护者的姓名和邮箱地址

## DockerFile

1. 多个CMD只执行最后一条CMD命令，ENTRYPOINT跟CMD一样，会追加