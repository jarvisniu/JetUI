<template>
  <div>
    <h1>Input Search</h1>

    <h2>Basic</h2>
    <jt-border inline all style="background-color: var(--jt-bg-container-dark);">
      <jt-input-search v-model="keyword" @press-enter="onPressEnter"></jt-input-search>
    </jt-border>

  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    onPressEnter() {
      alert('press-enter')
    },
  },
}
</script>
