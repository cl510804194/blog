---
title: Jest
lang: en-US
---

## 概念

- 账号
  类似于存折
  拥有各种信息账号、密码、交易记录等等
- 私钥
  作用 1. 签名 2.生成公钥
- 公钥
  1. 验签
- 地址
- 助记词
  1. 私钥经过多个算法生成的单词，用来找回私钥，也可以理解为另外一种私钥
- 钱包
  1. 硬件钱包 安全性高
  2. 软件钱包

## gas 如何计算

基础费加小费
当 gas Used 100%时，基础费用大概会增加 12.5%

## 以太坊网络和节点或客户端

节点越多 网络越安全
环境分为 主网 、 测试网 、 私有网络

## modifier 用于判断某个函数是否符合条件

```c
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract ExampleModifier{
    address public owner;
    uint256 public account;

    constructor(){
        owner=msg.sender;
        account=0;
    }

    modifier onlyOwner(){
      require(msg.sender==owner,"Only owner");
      _;
    }

    modifier valid100(uint256 _account){
        require(_account>100,"Valid 100");
        _;
    }
    function updateAccount(uint256 _account) public  valid100(_account) {
        account=_account;
    }
}
```

##
