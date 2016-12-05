
// var app = new Vue({
//     el: '#app',
//     methods: {
//         logMessage(){
//             console.log(this.message)
//         }
//     },
//     data: {
//         message: 'hello',
//         title: 'hello',
//         welcome: true
//     }
// })

//定义组件
Vue.component('comment', {
    props: ['comment'],  //属性
    template: '<li>{{ comment.content }}</li>' //模板
    
})
var app = new Vue({
    el: '#app',
    data: {
        comments: [
            {content: 'nice ~'},
            {content: 'great ~'},
            {content: 'awesome ~'},
        ]
    }
})