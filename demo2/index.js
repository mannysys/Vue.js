
var dataSource = {
    message: 'hello',
    loggedIn: false
}
var vm = new Vue({
    el: '#app',
    data: dataSource,
  
})
// var vm = new Vue({
//     el: '#app',
//     data: dataSource,
//     //实例销毁之前执行的方法
//     beforeDestroy(){
//         console.log('要被干掉了.')
//     },
//     //实例销毁之后执行的方法
//     destroyed(){
//         console.log('bye bye ...')
//     }
// })

//使用$watch这个方法去监视 message这个属性，newValue是新值
// vm.$watch('message', function(newValue, oldValue){
//     console.log(newValue, oldValue)
// })