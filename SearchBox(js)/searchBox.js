/**
 * Created by heydo on 2017/6/30 0030.
 */
window.onload = function () {
    //通过元素ID获取元素,减少编码过程
    var getDom = function (id) {
        return document.getElementById(id);
    };
    //给元素绑定事件
    var addEvent = function (id, event, fn) {
        //id，事件类型，回掉函数
        // ||document用于容错，有可能传入的元素不存在，这是就使用document作为事件绑定的对象
        var el = getDom(id) || document;
        //非IE：addEventListener ；IE：attachEvent
        if(el.addEventListener){
            el.addEventListener(event, fn ,false);
        }else if(el.attachEvent){
            el.attachEvent('on' + event, fn);
        }
        //不用.onclick()的原因，.addEvent可以为一个元素绑定多个事件
    };

    //去元素距离浏览器左边的距离
    var getElementLeft = function (element) {

        var actualLeft = element.offsetLeft;//获得距离父元素左边的距离
        var current = element.offsetParent;//获取他的父元素

        while (current !== null){
            //若存在父元素，则将父元素距离‘父元素的父元素’的Top加上当前元素距离父元素的距离，再去寻找更上一层的父元素；若current不为空，就说明已经找到最后一个父元素，此时累计得到的Left就是元素距离body的实际距离。
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return actualLeft;
    };

    var getElementTop = function (element) {
        var actualTop = element.offsetTop;
        var current = element.offsetParent;

        while (current !== null){
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    };

    //响应用户键盘事件
    addEvent('search_input','keyup',function () {
        getDom('search-suggests').style.top = getElementTop(getDom('search-from'))+ 38 + 'px';
        /*//38指输入框的高度*/
        getDom('search-suggests').style.left = getElementLeft(getDom('search-form')) + 'px';
        getDom('search-suggests').style.position = 'absolute';
        getDom('search-suggests').style.display = 'block';
    });
}