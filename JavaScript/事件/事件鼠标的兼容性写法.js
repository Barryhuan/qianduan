// 获取事件对象Event
function getEvent(event) {
    return event || window.event
}
// 获取事件对象的横坐标

function getEventPageX(event) {
    return event.pageX || event.clientX + document.documentElement.scrollX
}

// 获取事件对象的纵坐标
function getEventPageY(event) {
    return evemt.pageY || event.client + document.documentElement.scrollY
}

// 添加监听对象
function addListener(obj, eventName, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(eventName, fn, false)
    } else if(obj.attchEvent) {
        obj.attchEvent('on' + eventName, fn)
    } else {
        obj['on' + eventName] = fn
    }
}

// 移除监听对象
function removeListener(obj, eventName, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(event, fn, false)
    } else if (obj.detchEvent) {
        obj.detchEvent('on' + event, fn)
    } else {
        obj['on' + eventName] = fn
    }
} 

// 设置阻止冒泡
function setStopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation()
    } else {
        event.cancelBubble = true;
    }
}

// 获取事件对象目标
function getTarget(event) {
    return event.target || event.srcElment // srcElement=事件源
}