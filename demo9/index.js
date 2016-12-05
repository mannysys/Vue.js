//在全局范围内定义组件（可以在任意Vue实例中使用）
//有2个参数第1个是组件名字，第2个是选项对象
Vue.component('ui-button', {
    template: '<button class="ui button">{{ text }}</button>',
    props: ['text']  //声明组件属性
})

//定义组件选项
// var uiButton = {
//     template: '<button class="ui button">button</button>'  //定义模板
// }
var dataSource = {
   published: false
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    // components: {
    //     'ui-button': uiButton   //定义组件
    // }
    
})


