// let a = 0;
// 设置 rem 函数
import store from '@/store'
let b = 0;
function setRem() {
    //  PC端
    // 基准大小
    let baseSize = 18;
    let basePc = baseSize / 1920; // 表示768的设计图,使用100PX的默认值
    //1rem = 10px
    let width = window.innerWidth; // 当前窗口的宽度
    /*
    1.超小屏幕 <768px
    2.小屏幕 768-992
    3.中等屏幕 992-1200
    4.大屏幕
    */
    if (width < 576 && store.state.resize > 576) {
        store.state.resize = window.innerWidth
    } else if (width < 768 && store.state.resize > 768) {
        store.state.resize = window.innerWidth
    } else if (width < 992 && store.state.resize > 992) {
        store.state.resize = window.innerWidth
    } else if (width < 1200 && store.state.resize > 1200) {
        store.state.resize = window.innerWidth
    } else if (width < 1400 && store.state.resize > 1400) {
        store.state.resize = window.innerWidth
    } else {
        store.state.resize = window.innerWidth
    }


    let rem = parseInt(width * basePc); // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    if (width > 768) {
        document.documentElement.style.fontSize = rem + "px";
        // console.log('1rem='+rem+'px')
    } else {
        // console.log('1rem=16px')
        document.documentElement.style.fontSize = "16px";
    }
    // b = width;
    // if () {
    // }

}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', () => {
    setRem()
})