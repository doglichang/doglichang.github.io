// 更新当前时间
function updateCurrentTime() {
    var now = new Date();
    var currentTime = now.toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' });
    document.getElementById('current-time').innerHTML = currentTime;
}

// 每秒更新时间
setInterval(updateCurrentTime, 1000);

// 页面加载时执行时间更新
window.onload = function() {
    updateCurrentTime();
};

// 处理点击遮罩事件，显示 UIN
document.addEventListener('DOMContentLoaded', function() {
    var mask = document.querySelector('.mask');
    mask.addEventListener('click', function() {
        document.getElementById('uin').style.visibility = 'visible';
        this.style.display = 'none'; // 或者使用 this.remove(); 直接移除遮罩元素
    });
});
