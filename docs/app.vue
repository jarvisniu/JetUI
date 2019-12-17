<template lang="pug">
.app(:class="`jt-theme-${ theme }`")
  .side
    h2 JetUI Docs
    label
      input(v-model="theme" type="radio" value="light")
      span Light
    label
      input(v-model="theme" type="radio" value="dark")
      span Dark
    div(v-for="(pageGroup, groupIndex) in pageGroups" :key="groupIndex")
      label {{ pageGroup.name }}
      ul
        li(v-for="(page, pageIndex) in pageGroup.pages" :key="pageIndex")
          router-link(:to="page.path") {{ page.name }}
  .content
    router-view
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      pageGroups: [
        {
          name: 'Basic',
          pages: [
            { name: 'Button', path: '/button' },
            { name: 'Image Button', path: '/image-button' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #fefefe;
  height: 100vh;
  overflow: auto;

  &.jt-theme-dark {
    color: white;
    background-color: #222;
  }
}
.side,
.content {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow-y: auto;
  vertical-align: top;
}
.side {
  width: 200px;
  border-right: solid 1px silver;
  background-color: #f8f8f8;
}
.jt-theme-dark .side {
  background-color: #111;
}
.content {
  width: calc(100% - 200px);
  padding: 0 10px;
}
</style>
