import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types'
//1.安装插件
Vue.use(Vuex)

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
            // state.info.name='kuang'
            // state.info['address']='LA'  非响应式
            // Vue.set(state.info,'address','LA')  响应式

            // delete state.info.age 非响应式
            Vue.delete(state.info,'age')
        }
    },
    actions: {},
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
    modules: {}
})

//3.导出store对象
export default store
