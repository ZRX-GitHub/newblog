// JavaScript Document


var backTop = document.getElementById('myBtn');
// 当网页向下滑动 400px 出现"返回顶部" 按钮
window.onscroll = function() {
    document.getElementById("myBtn").style.display = (document.body.scrollTop || document.documentElement.scrollTop) > 400 ? "block" : "none";
};
// 返回按钮点击事件——返回顶部的动画时间
backTop.onclick = function() {
    // 说明：()=>，箭头函数
    var animateTime = setInterval(() => {

        const top = document.documentElement.scrollTop; // 每次获取页面被卷去的部分
        const speed = top / 10; // 每次滚动多少 （步长值）
        if (document.documentElement.scrollTop !== 0) {
            document.documentElement.scrollTop -= speed; // 不在顶部，每次滚动到的位置
        } else {
            clearInterval(animateTime) // 回到顶部，并清除定时器
        }
    }, 10);
};


// 图片放缩
var zooming = new Zooming();
zooming.listen('.zooming');