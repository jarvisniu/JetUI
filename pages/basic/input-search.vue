<template>
  <div>
    <h2>Input Search</h2>

    <h4>Basic</h4>
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
