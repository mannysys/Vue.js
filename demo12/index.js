// 内容分发：slot 
// Vue.component('segment', {
//     template: '\
//         <div class="ui stacked segment">\
//             <slot>:)</slot>\
//         </div>\
//     '
// })

//带名字的 slot  
Vue.component('card', {
    template: '\
        <div class="ui card">\
            <div class="image">\
                <slot name="image">image</slot>\
            </div>\
            <div class="content">\
                <div class="header">\
                    <slot name="header">header</slot>\
                </div>\
                <div class="meta">\
                    <slot name="meta">meta</slot>\
                </div>\
            </div>\
        </div>\
    '
})



var dataSource = {
   
}   

var vm = new Vue({
    el: '#app',
    data: dataSource
    
})

