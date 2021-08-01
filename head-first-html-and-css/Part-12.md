### HTML5标记

- HTML5

```
1.增加了一些新元素表示一些用div认为定义的结构，如导航
```

- time

```html
<time datetime="2020-12-26">26/12/2020</time>
<!--
  -- datetime使用官方时间格式
-->
```

- video

```html
<video controls autoplay width="512" height="288" src="./video/tweetsip.mp4"></video>
<!--
  -- 1.autoplay(自动播放)
  -- 2.controls(播放控件)
  -- 3.poster(未播放时显式海报)
  -- 4.视频格式要视浏览器来确定
-->
<video controls width="512" height="288">
  <source src="./video/tweetsip.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <source src="./video/tweetsip.webm" type='video/webm; codecs="vp8, vorbis"'>
  <source src="./video/tweetsip.ogv"  type='video/ogg; codecs="theora, vorbis"'>
  <p>Sorry, your brower doesn't support the video element</p>
</video>
<!--
  -- 可以通过source兼容不同的浏览器，通过type可以告知浏览器文件元信息
-->
```

- HTML5部份新元素标签

```
1.aside：放在主内容旁边的内容
2.mark：突出显式某些文本
3.audio：声音媒体
4.progress：进度显式
5.footer：页脚
6.meter：显示度量
7.article：显式文章
8.canvas：显式Javascript绘制的图像
9.section：文档区块
10.header：区块的首部或者文档的页眉
11.nav：导航
12.figure：定义类似图片、图片等独立的内容
```
