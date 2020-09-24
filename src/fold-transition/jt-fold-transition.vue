<template>
  <transition
    name="fold"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'JtFoldTransition',
  methods: {
    onBeforeEnter (el) {
      el.style.height = 0
    },
    onEnter (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    onAfterEnter (el) {
      el.style.height = `auto`
    },
    onBeforeLeave (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    onLeave (el) {
      el.style.height = 0 * el.scrollHeight // Hack: fix the leave animation loss (e.g. in <jt-snippet>)
    },
  },
}
</script>

<style lang="scss" scoped>
.fold-enter-active,
.fold-leave-active {
  transition: opacity var(--jt-duration), height var(--jt-duration);
  overflow: hidden;
}
</style>
