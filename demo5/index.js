
var dataSource = {
    message: 'hello',
    loggedIn: true,
    items: [
        { text: 'nice' },
        { text: 'great' },
        { text: 'awesome' }
    ]
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
  
})



// vm.items.unshift({text:'wonderful'}) 可以将增加数据显示在最前面
// reverse()  颠倒数组内的顺序   shift() 删除数组内第一个元素  pop 删除最后一个  splice(1, 0, {text: 'amazing'}) 指定位置插入数据
