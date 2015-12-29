#unwisdom.message
无知的消息提示模块。

#usage
```
//创建一个消息
uw.message({
    title: 'Title',
    content: content,
    inClass: 'inClass',
    outClass: 'outClass',
    position: 'topright', // topright|lowerleft|lowerright
    color: color, // green|blue|red|yellow|black
});
```
# options
负责消息框的显示位置。
<table>
    <tr>
        <th>键名</th>
        <th>默认值</th>
        <th>介绍</th>
    </tr>
    <tr>
        <td>title</td>
        <td></td>
        <td>标题</td>
    </tr>
    <tr>
        <td>content</td>
        <td></td>
        <td>内容</td>
    </tr>
    <tr>
        <td>inClass</td>
        <td>bounce</td>
        <td>创建消息时的动画</td>
    </tr>
    <tr>
        <td>outClass</td>
        <td>bounceOut</td>
        <td>消息关闭时的动画</td>
    </tr>
    <tr>
        <td>position</td>
        <td>lowerright</td>
        <td>消息框的位置</td>
    </tr>
    <tr>
        <td>color</td>
        <td>black</td>
        <td>消息框的颜色</td>
    </tr>
</table>

# options.inClass & options.outClass
负责消息框的CSS3动画。具体的参数请参考：https://daneden.github.io/animate.css/

# options.position
<table>
    <tr>
        <td>值</td>
        <td>备注</td>
    </tr>
    <tr>
        <td>topright</td>
        <td>显示在右上角</td>
    </tr>
    <tr>
        <td>lowerleft</td>
        <td>显示在左下角</td>
    </tr>
    <tr>
        <td>lowerleft</td>
        <td>显示在右下角(默认)</td>
    </tr>
</table>

# options.color
负责消息框和颜色。
<table>
    <tr>
        <td>值</td>
        <td>备注</td>
    </tr>
    <tr>
        <td>black</td>
        <td>黑色</td>
    </tr>
    <tr>
        <td>red</td>
        <td>红色</td>
    </tr>
    <tr>
        <td>blue</td>
        <td>蓝色</td>
    </tr>
    <tr>
        <td>yellow</td>
        <td>黄色</td>
    </tr>
</table>