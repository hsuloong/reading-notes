### div与span

- div(division)

```
1.是一个块元素，用于HTML的逻辑分区
2.可以理解为是一个容器
3.默认内边距为0
```

- css width属性

```
1.指定的是内容区的宽度
2.盒子总宽度=左外边距+边框宽度+左内边距宽度+width+右外边距+边框宽度+右内边距宽度
3.不指定这个属性的话默认占满整个空间
```

- 子孙选择器

```css
#elixir h2 {
    color: black;
}
/*
 * id为elixir的所有子孙h2元素应用这个样式
 * 如果要限定直接孩子，可以增加'>'符号，如'#elixir>h2'
 * 可以使用多个排列，比如'#elixir p em'表示'p'是'elixir'子孙，而'em'是'p'子孙
*/
```

- `line-height`

```
1.line-height如果直接指定一个数字，表示行高是字体大小的一倍
```

- 简写

```css
#elixir {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}
#elixir {
    padding: 0px 20 30 10;
}
/*
 * 上面两个等价，缩写顺序为上、右、下、左
 * 如果值相同可以直接缩写为 padding: 20px;
 * 除了padding，很多属性都可以简写
*/
```

- span(范围)

```
1.span是内联元素
2.内联元素设置盒参数不一定有用
```

- 伪类(pseudo-classes)

```
1.一般主要针对a元素，样式顺序为link、visited、hover、focus、active
2.伪类之所以是“伪”，主要是元素属于哪个类是浏览器处理的
3.first-child、last-child
```

- 层叠

```
计算法则：
0 0 0
1.第一位0：在选择器每出现一个id加1
2.第二位0：在选择器每出现一个类或伪类加1
3.第三位0：在选择器每出现元素名加1
4.最后得到特性的值越大，规则就越特定
5.!important可以覆盖作者的设置
6.作者>读者>浏览器

比如 h1=001，h1.blue=011
```