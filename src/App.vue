<template>
  <div id="app">
    <h2>-------App内容---------</h2>
    <h1>{{ $store.state.counter }}</h1>
    <!--    <button @click="$store.state.counter++">+</button>-->
    <!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-------App内容:getters相关信息---------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>
    <h2>-------App内容:info对象的内容是否是响应式---------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h2>-------Hello Vuex内容---------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex";
import {INCREMENT} from './store/mutation-types'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件',
    }
  },
  // computed:{
  //   more20stu(){
  //     return this.$store.state.students.filter(s=>s.age > 20)
  //   }
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    substraction() {
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload:负载
      //1.普通的提交风格
      // this.$store.commit('incrementCount',count)


      // 2.特殊的提交风格
      this.$store.commit({
        type:'incrementCount',
        counts:count
      })
    },
    addStudent(){
      const stu={id:114,name:'alan',age:99}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      //传递函数 传递字符串
      // this.$store.dispatch('aUpdateInfo',()=>{
      //   console.log('完成了')
      // })
      //传递对象    还是不够优雅
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带信息',
      //   success:()=>{
      //     console.log('完成了');
      //   }
      // })
      this.$store.dispatch('aUpdateInfo','我是携带的信息')
      .then(res => {
        console.log('里面完成了提交');
        console.log(res)
      })

    }
  }
}
</script>

<style>

</style>
