new Vue({
    el: '#app',
    data:{
        title:'Hello Nigel!',
        link: 'www.google.com',
        textColour: 'red',
        finishedLink:'<a href="http://google.com">Google</a>'
    },
    methods:{
        sayHello : function(){
            return this.title;
        }
    }
});