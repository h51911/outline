# Vue

* 配置参数
```js
    <div id="app">
        内容
    </div>

    let vm = new Vue({
        el:'#app',
        
        // render(createElement){
        //     return createElement('div',{id:'app'},xxx)
        // }

        // data -> 存储器属性(getter&setter) -> 根实例
        data:{
            qty:10
        }, 
        computed:{
            // 本身就是getter和setter
            username(){
                return 'laoxie'
            },
            username:{
                get(){

                },
                set(){

                }
            }
        },
        methods:{
            getUsername(){

            }
        },

        // 监听实例属性
        watch:{
            
        }

        // 注入属性
        router,
        store,

        // 生命周期函数(名字->什么时候触发->如何使用)
        beforeCreate(){},
        created(){},

        beforeMount(){},
        mounted(){},

        beforeUpdate(){},
        updated(){},

        beforeDestroy(){},
        destroyed(){},
        
    });

    console.log(vm);
    vm.username;

    vm.qty = 10 ;// 10 -> 不修改


    <template>
        <div>
            // 这里的变量/方法其实就是实例下的属性
            {{qty}} - {{ getUsername()}}
        </div>

    <template>

```

* 组件(组件就是Vue实例, 创建一个标签)
    * 有什么用
        * 复用
        * 维护方便
    * 特点
        * data必须为函数
        * 无el
    * 定义
        * 全局 Vue.Component()
            * MyHome
        * 局部 components

        ```js
            <home></home>
            <my-home></my-home>
        ```
    * 组件通信
        * 父->子: props
        * 子->父: $emit()
        * 兄弟->兄弟:
        * 深层次组件传参
            * Bus事件总线
                * Vue实例
                    * $on() 自定义事件
                    * $emit() 触发事件
            * Vuex