<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ count }}</div>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    console.log(123)
    const count = ref(0)
    const add = () => count.value++
    return {
      count,
      add
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
