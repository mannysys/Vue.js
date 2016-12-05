
var dataSource = {
    counter: 0
   
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    methods: {
        // like(event){
        //     this.counter += 1
        //     // event事件对象
        //     console.log(event)
        // },

        process(event){
            console.log(event.target.value)
        }
    }
})


