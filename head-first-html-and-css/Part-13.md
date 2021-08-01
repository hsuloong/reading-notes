### 建立表格

- table

```html
<table>
  <caption>The cities I visitedon my Segway'n USA travels</caption>
  <tr>
    <th>City</th>
  </tr>
  <tr>
    <td>Walla Walla, WA</td>
  </tr>
  <tr>
    <td>Magic City, ID</td>
  </tr>
</table>
<!--
  -- 1.table表示这个一个表格
  -- 2.tr表示这是一行
  -- 3.th表示是表头
  -- 4.td表示是单元格内容
  -- 5.caption表格标题
-->
```

- table盒模型
![](./images/table-box-model.PNG)
```
1.表格单元格有内边距和边框
2.表格单元格没有外边距
3.使用border-spacing属性定义类似外边距的东西，这个是针对整个表格定义的
```

- 表格CSS

```css
table {
  caption-side:    bottom;
  border-spacing:  0px;
  border-collapse: collapse;
}

td, th {
  border:          thin solid gray;
}

th {
  background-color: #cc6600;
}

tr:nth-child(2n+1) {
  background-color: #fcba7a;
}

caption {
  font-style:      italic;
  padding-top:     8px;
}
/*
 * 1.border-spacing表格间距
 * 2.border-collapse边框折叠
 * 3.tr:nth-child(2n+1)伪类定义不同行样式
 */
```

- 单元格跨多行或者多列

```html
<table>
  <caption>The cities I visitedon my Segway'n USA travels</caption>
  <tr>
    <th>City</th>
    <th>Date</th>
    <th>Temperature</th>
    <th>Altitude</th>
    <th>Population</th>
    <th>Diner Rating</th>
  </tr>
  <tr>
    <td rowspan="2">Truth or Consequences, NM</td>
    <td class="center">August 9th</td>
    <td class="center">93</td>
    <td rowspan="2" class="right">4,242 ft</td>
    <td rowspan="2" class="right">7,289</td>
    <td class="center">5/5</td>
  </tr>
  <tr>
    <td class="center">August 27th</td>
    <td class="center">98</td>
    <td class="center">4/5</td>
  </tr>
</table>
<!--
  -- rowspan代表占多行
  -- 跨多列可以用colspan属性，然后删去同一行中的数据元素
-->
```

- 嵌套表格

```html
<table>
  <caption>The cities I visitedon my Segway'n USA travels</caption>
  <tr>
    <th>City</th>
    <th>Date</th>
    <th>Temperature</th>
    <th>Altitude</th>
    <th>Population</th>
    <th>Diner Rating</th>
  </tr>
  <tr>
    <td rowspan="2">Truth or Consequences, NM</td>
    <td class="center">August 9th</td>
    <td class="center">93</td>
    <td rowspan="2" class="right">4,242 ft</td>
    <td rowspan="2" class="right">7,289</td>
    <td class="center">5/5</td>
  </tr>
  <tr>
    <td class="center">August 27th</td>
    <td class="center">98</td>
    <td class="center">
      <table>
        <tr>
          <th>Tess</th>
          <th>5/5</th>
        </tr>
        <tr>
          <th>Tony</th>
          <th>4/5</th>
        </tr>
      </table>
    </td>
  </tr>
</table>
<!--
  -- 直接嵌套就好了(●'◡'●)
-->
```

- 列表一些CSS属性

```css
li {
  list-style-type:     square;
  list-style-position: outside;
  list-style-image:    url("");
}
/*
 * 1.list-style-type：控制列表标记形状
 * 2.list-style-position：控制列表文本回绕
 * 3.list-style-image：自定义列表标记形状
 */
```
