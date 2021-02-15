import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";
//1.安装插件
Vue.use(Vuex)

//2.创建对象


const state =  {
    counter: 1000,
    students: [
        {id: 110, name: 'why', age: 18},
        {id: 111, name: 'kobe', age: 24},
        {id: 112, name: 'james', age: 30},
        {id: 113, name: 'curry', age: 9},
    ],
    //这些属性(state中的)都会被加入到响应式系统中，而响应式系统会监听属性的变化，
    //当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发实刷新
    info:{
        name:'kobe',
        age:40,
        height:1.98
    }
}

//2.创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a:moduleA,
        b:{
            state:{},
            mutations:{},
            actions:{},
            getters:{}
        }
    }
})

//3.导出store对象
export default store

//es6 对象的解构
// const obj = {
//     name:'why',
//     age:18,
//     height:1.88
// }
//
// // const name = obj.name;
//
// const {name,age,height} = obj;  //按照名字分配
// console.log(name)
