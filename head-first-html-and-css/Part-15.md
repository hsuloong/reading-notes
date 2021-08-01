### 十大主题

- 伪元素

```css
p:first-letter {
    font-size: 3em;
}

p::first-line {
    font-style: italic;
}
/*
 * 用来选择元素的部分
 */
```

- 属性选择器

```css
img[width] {
    border: black thin solid;
}
img[height="300"] {
    border: red thin solid;
}
/*
 * 根据属性选择器来选择元素
 */
```

- 兄弟选择器

```css
h1+p {
    font-style: italic;
}
/*
 * p前面有h1元素的
 */
```

- 结合选择器

```css
.blueberry p { color: red; }
div#greenTea > blockquote { color: red; }
div#greenTea > blockquote p { color: red; }
div#greenTea > blockquote p:first-line { color: red; }
/*
 * .blueberry p：选中类为 blueberry 的子孙元素
 * div#greenTea > blockquote：选中 id=greenTea 的div元素的直接子元素
 * div#greenTea > blockquote p：选中 id=greenTea 的div元素的直接子元素为blockquote元素下面所有的所有子孙p元素
 * div#greenTea > blockquote p:first-line：选中 id=greenTea 的div元素的直接子元素为blockquote元素下面所有的所有子孙p元素的第一行
 */
```

- 浏览器开发商特定的css属性

```css
div {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
}
/*
 * -webkit-transform：Safari、Chrome
 * -moz-transform：Mozilla
 * -o-transform：Opera
 * -ms-transform：IE
 */
```

- css变换和过渡

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #box {
            position: absolute;
            top: 100px;
            left: 100px;
            width: 200px;
            height: 200px;
            background-color: red;
            transition: transform 2s;
            -webkit-transition: -webkit-transform 2s;
            -moz-transition: -moz-transform 2s;
            -o-transition: -o-transform 2s;
        }
        #box:hover {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
        }
    </style>
</head>
<body>
    <div id="box"></div>
</body>
</html>
<!--
  -- transform：变换
  -- transition：过渡
-->
```

- 交互性

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <form id="theForm" action="www.baidu.com" method="GET">
        <input type="number" id="bid" value="0"><br>
        <input type="button" id="submitButton" value="Bid!"><br>
    </form>
    <script type="text/javascript">
        window.onload = init;
        function init() {
            var submitButton = document.getElementById("submitButton");
            submitButton.onclick = validBid;
        }
        function validBid() {
            if (document.getElementById("bid").value > 0) {
                document.getElementById("theForm").submit();
            }
            else {
                return false;
            }
        }
    </script>
</body>
</html>
```