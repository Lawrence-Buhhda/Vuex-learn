import {INCREMENT} from "@/store/mutation-types";

export default  {
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
}
