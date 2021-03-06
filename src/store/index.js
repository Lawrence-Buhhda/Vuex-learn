import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types'
//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA ={
    state:{
        name:'zhangsan'
    },
    mutations:{
        updateName(state,payload){
            state.name = payload
        }
    },
    actions:{
            aUpdateName(context){
                setTimeout(()=>{
                    context.commit('updateName','wangwu')
                },1000)
        }
    },
    getters:{
        fullname(state){
            return state.name + '1111'
        },
        fullname2(state,getters){
            return getters.fullname + '2222'
        },
        fullname3(state,getters,rootState){
            //根的state中的count
            return getters.fullname2+rootState.counter
        }
    }
}

//2.创建对象
const store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        //方法
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state,payload){
            // console.log(count)
            // state.counter +=count
            state.counter += payload.counts
        },
        addStudent(state,stu){
            state.students.push(stu)
        },
        updateInfo(state){
            state.info.name='kuang'

            //模拟异步操作 错误的代码：不能在这里进行异步操作
            // setTimeout(()=>{
            //     state.info.name='ying'
            // },1000)

            // state.info['address']='LA'  非响应式
            // Vue.set(state.info,'address','LA')  响应式

            // delete state.info.age 非响应式
            // Vue.delete(state.info,'age')
        }
    },
    actions: {
        //context:上下文 不够优雅
        // aUpdateInfo(context,payload){
        //     setTimeout(()=>{
        //         context.commit('updateInfo')
        //         // payload()
        //         console.log(payload.message);
        //         payload.success()
        //     },1000)
        // }

        aUpdateInfo(context,payload){
            return new Promise((resolve) => {
                    setTimeout(()=>{
                        context.commit('updateInfo')
                        console.log(payload);
                        resolve('111')
                    },1000)
            })
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state,getters){
            return getters.more20stu.length
        },
        moreAgeStu(state){
            return age => {
                // return state.students.filter( s => s.age > age)
                return state.students.filter( s => s.age > age)
            }
        }
    },
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
