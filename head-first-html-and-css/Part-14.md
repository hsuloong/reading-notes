### HTML表单

-  表单HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Enter the Contest</title>
</head>
<body>
    <form action="www.baidu.com" method="POST">
        <p>
            FirstName:<input type="text" name="firstName" value=""><br>
            LastName :<input type="text" name="lastName" value=""><br>
            <input type="submit">
        </p>
    </form>
</body>
</html>
<!--
  -- form元素可以放大部分块元素
  -- 有专门的元素input控件
  -- action代表Web服务URL
  -- method代表请求方法
  -- input可以通过type来选择空间种类，比如text、submit、radio、checkbox、range
  -- 除了input，还有textarea、select/option控件
-->
```

- 表单元素name属性

```html
<input type="text" name="xxx" value="">
<!--
  -- name属性在提交表单的时候将会使用属性值来打包
  -- 比如上面输入yyy后提交，则页面会收到xxx=yyy的数据
-->
```

- value属性

```html
<select name="beans">
    <option value="House Blend">House Blend</option>
    <option value="Bolivia">Shade Grown Bolivia Supremo</option>
    <option value="Guatemala">Organic Guatemala</option>
    <option value="Kenya">Kenya</option>
</select>
<input type="radio" name="beantype" value="whole">
<!--
  -- 对于value属性，再提交表单的时候，将会传这个值
-->
```

- radio

```html
<input type="checkbox" name="extras[]" value="catalog" checked>
<!--
  -- checked加上以后会默认勾选
-->
```

- number

```html
<input type="number" name="bags" min="1" max="10">
<!--
  -- 支持设置最大最小值
-->
```

- POST 和 GET

```
POST打包数据在后台发送给服务器
GET则是追加到URL中
```

- label元素

```html
<label for="beans">
  Choose your beans:
</label>
<select id="beans" name="beans">
  <option value="House Blend">House Blend</option>
  <option value="Bolivia">Shade Grown Bolivia Supremo</option>
  <option value="Guatemala">Organic Guatemala</option>
  <option value="Kenya">Kenya</option>
</select>
<!--
  -- label可以提供更多的页面结构
-->
```

- 表单中的其他元素

```html
<fieldset>
  <legend>Ship to</legend>
  <div class="tableRow">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="" placeholder="Buckaroo Banzai" required> 
  </div>
</fieldset>
<input type="passwords" placeholder="xxx" required>
<input file="passwords">
<select id="beans" name="beans" multiple>
  <option value="House Blend">House Blend</option>
  <option value="Bolivia">Shade Grown Bolivia Supremo</option>
  <option value="Guatemala">Organic Guatemala</option>
  <option value="Kenya">Kenya</option>
</select>
<!--
  -- fieldset 和 legend可以提供视觉上的分组
  -- input  passwords 可以输入密码，file可以上传文件
  -- select 增加 multiple 可以支持多选
  -- input 增加 placeholder 可以提供一个提示，增加 required 表示必填域
-->
```