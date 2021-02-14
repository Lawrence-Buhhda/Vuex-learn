import Vue from 'vue'
import Vuex from 'vuex'

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
        ]
    },
    mutations: {
        //方法
        increment(state) {
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
