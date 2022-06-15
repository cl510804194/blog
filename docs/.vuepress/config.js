module.exports = {
  themeConfig: {
    nav: [
      { text: "博客", link: "/mysql/" }, // 内部链接 以docs为根目录
      // { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
      // // 下拉列表
      // {
      //   text: 'GitHub',
      //   items: [
      //     { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
      //     {
      //       text: '算法仓库',
      //       link: 'https://github.com/OBKoro1/Brush_algorithm'
      //     }
      //   ]
      // }
    ],
    // sidebar: ['/accumulate', '/git', '/vue']
    sidebar: [
      { title: "Mysql", path: "/mysql/" },
      // { title: 'Jest', path: '/jest/' },
      // { title: '性能优化', path: '/performance/' }
    ],
    // sidebar: {
    //   // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
    //   '/accumulate/': [
    //     // accumulate文件夹的README.md 不是下拉框形式
    //     {
    //       title: 'Mysql',
    //       collapsable: false
    //       // children: ['/accumulate/mysql/README']
    //     }
    //   ]
    //   // // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
    //   // '/algorithm/': [
    //   //   '/algorithm/',
    //   //   {
    //   //     title: '第二组侧边栏下拉框的标题1',
    //   //     children: ['/algorithm/simple/test']
    //   //   }
    //   // ]
    // }
  },
};
