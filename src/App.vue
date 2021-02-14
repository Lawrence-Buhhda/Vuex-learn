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
    <h2>-------Hello Vuex内容---------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex";

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
      this.$store.commit('increment')
    },
    substraction() {
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload:负载
      this.$store.commit('incrementCount',count)
    },
    addStudent(){
      const stu={id:114,name:'alan',age:99}
      this.$store.commit('addStudent',stu)
    }
  }
}
</script>

<style>

</style>
