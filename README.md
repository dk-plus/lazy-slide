# lazy-slide
> 简单就是美，只需要修改`html`就能做出ppt。[示例](https://dk-plus.github.io/lazy-slide/)

## Usage
1. `.slide`代表一张ppt，只需要在里面加入html元素即可，js会自动判断ppt的页数进行播放。
2. `index.js`的`_opt`代表配置，其中`animation`代表ppt过渡动画，关联`css`的动画相关规则，又需要可以自行修改。
3. 键盘上和左为上一页，下和右为下一页，手机端往屏幕左边点为上一页，往屏幕右边点为下一页。