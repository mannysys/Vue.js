//在全局范围内定义组件（可以在任意Vue实例中使用）有2个参数第1个是组件名字，第2个是选项对象
Vue.component('ui-button', {
    template: '<button class="ui button">{{ text }}</button>',
    props: {
        text: { //添加text属性
            type: String,
            default: 'button', //指定默认属性值
            required: true,   //指定这个属性必须填写的
            validator(value){  //添加自定义属性验证
                return value.length > 3
            }
        }
    }
})


var dataSource = {
   published: false
}

var vm = new Vue({
    el: '#app',
    data: dataSource
  
})


//自定义一个监听事件hi
//vm.$on('hi', function(msg){ console.log(msg) })

//触发一个事件hi
//vm.$emit('hi', 'hello')