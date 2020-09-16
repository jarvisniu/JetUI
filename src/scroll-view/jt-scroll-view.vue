<template>
    <div class="jt-scroll-view">
      <jt-border right style="min-height: 100%;">
        <slot></slot>
      </jt-border>
    </div>
</template>

<script>
export default {
  name: 'JtScrollView',
}
</script>

<style lang="scss" scoped>
.jt-scroll-view {
  overflow-x: hidden;
  overflow-y: scroll;
  color: var(--jt-text);

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 16px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: hsl(0, 0%, 95%);
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid hsl(0, 0%, 95%);
    // transition background-color var(--jt-duration) // not work
    background-color: hsl(0, 0%, 70%);
    &:hover {
      @media (hover: hover) {
        background-color: hsl(0, 0%, 60%);
      }
    }
  }
}
</style>
