<template>
  <div>
    <h1>Input</h1>

    <h2>Basic</h2>
    <jt-input v-model="name" @press-enter="onPressEnter"></jt-input>
    <div style="margin-top: 10px;">
      <span v-if="!name">Enter your name please.</span>
      <span v-else>Hello {{ name }}.</span>
    </div>

    <h2>Number Type (value={{ age }})</h2>
    <jt-input v-model.number="age"></jt-input>

    <h2>Clearable</h2>
    <!-- <jt-input v-model="name" clearable></jt-input> -->
    <div>TODO</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: 18,
    }
  },
  methods: {
    onPressEnter() {
      alert('press-enter')
    },
  },
}
</script>
