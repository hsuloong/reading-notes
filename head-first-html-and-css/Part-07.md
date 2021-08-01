### CSS入门

- CSS基本语法

```css
<style>
p {
    color: maroon;
}
h1,
h2 {
    font-family: sans-serif;
    color: gray;
    text-decoration: underline;
}
h1 {
    border-bottom: 1px solid black;
}
</style>
/*
 * p、h1、h2这些被称为选择器
 * 上述语句称为规则，规则包括选择器、一个或多个属性和值
 */
```

- 外部样式表

```html
<head>
    <link type="text/css" rel="stylesheet" href="css-file-path">
</head> 
<!--
link元素链接外部信息；
type指定信息类型；
rel指定HTML文件与链接文件的关系；
href指定信息地址，可以是相对或者完整URL；
-->
```

- 样式继承

```
元素可以从父元素继承样式，不过并不是所有的样式都可以继承，比如边框相关样式
```

- 覆盖继承

```
子元素定义的样式可以覆盖父元素
```

- 类选择器

```css
p.greentea {
    color: green;
}
.greentea {
    color: green;
}
/*
 * 使用class关键词定义一个类
 * 然后就可以指定类的样式了
 * 第一种代表段落里面的
 * 第二种代表所有这种类
*/
```

- CSS验证

```
https://jigsaw.w3.org/css-validator/
```

- CSS属性一览

```
1.color：文本颜色
2.font-weight：文本粗细
3.left：元素左边位置
4.line-height：文本元素行间距
5.top：元素顶部位置
6.letter-spacing：字母间距
7.background-color：元素背景颜色
8.border：元素周围加边框
7.padding：元素边缘和内容之间间距
8.font-size：文本字体大小
9.text-align：文本对齐方式
10.font-style：设置斜体
11.list-style：设置列表项外观
12.background-image：设置元素北京图像
```