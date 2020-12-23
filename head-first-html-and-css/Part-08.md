### 增加字体和颜色样式

- 字体系列

```css
body {
    font-family: Verdana, Geneva, Arial, sans-serif;
    font-size: 14px;
    color: silver;
    font-weight: bold;
    text-decoration: underline;
}
/*
 * 每个font-family包含一组有共同特征的字体
 * 字体系列有sans-serif、serif、monospace、cursive和fantasy
 * sans-serif字体没有衬线
 * serif字体有衬线
 * monospace包含固定宽度的字符
 * cursive字体包括看似手写的字体
 * fantasy包含某种风格的装饰字体
 * font-family可以指定多个，按照顺序选择一个用户计算机上存在的
*/
```

- Web Font(Web字体)

```css
/*
 * 1.woff：Web open font format
 * 2.ttf：TrueType
 * 3.otf：OpenType
 * 4.eot：Embedded OpenType
 * 5.svg
*/
@font-face {
    font-family: "Emblema one";
    src: url("EmblemaOne-Regular.woff"),
         url("EmblemaOne-Regular.ttf");
}
/*
 * 浏览器会顺序加载直至遇到第一个支持的额文件格式
 * https://fonts.google.com/ 谷歌Web字体服务
*/
```

- font-size(字体大小)

```css
body {
    font-size: 14px;
    font-size: 150%;
    font-size: small;
    font-size: 1.2em;
}
/*
 * 指定像素尺寸则代表像素高度
 * 百分比相对于正常字体的大小百分比
 * em也是一种相对度量单位相当于正常字体大小的x倍
 * 一般推荐使用关键字指定body规则
 * 指定其他元素相对于body的百分比或者em
*/
```

- font-weight

```css
body {
    font-weight: bold;
}
/*
 * 用来控制文本的粗细
*/
```

- font-style

```css
body {
    font-style: italic;
}
/*
 * 设置文本斜体
*/
```

- Web颜色

```css
body {
    color: red;
    color: rgb(80%,40%,0%);
    color: rgb(204, 102, 0);
    color: #cc6000;
}
/*
 * 1.Web颜色是按照颜色构成红、绿、蓝三个分量所占数量来制定的(0~100%)
 * 2.白色=(100%,100%,100%)
 * 3.黑色=(0%,0%,0%)
 * 4.指定颜色方式：名称、rgb分量、十六进制
 * 5.十六进制每两位代表颜色分量
*/
```

- text-decoration

```css
h1, h2 {
    text-decoration: underline;
}
/*
 * 文本装饰符
*/
```