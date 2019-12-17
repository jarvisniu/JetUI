<template lang="pug">
.jt-button
  slot
</template>

<script>
export default {
  name: 'JtButton',
}
</script>

<style lang="scss" scoped>
.jt-button {
  display: inline-block;
  border: solid 1px silver;
  box-sizing: border-box;
  background-color: #eee;
  height: 24px;
  line-height: 24px;
  /* min-width: 40px;
  text-align: center; */
  font-size: 14px;
  padding: 0 8px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s, border-color 0.2s;
  &:hover {
    @media (hover: hover) {
      background-color: white;
    }
  }
  &:active {
    background-color: #c0c0c0;
    transition: background-color 0.02s, border-color 0.02s;
  }
}
.jt-theme-dark {
  .jt-button {
    color: #e0e0e0;
    background-color: #555;
    border-color: black;
    &:hover {
      @media (hover: hover) {
        background-color: #666;
      }
    }
    &:active {
      background-color: #444;
      transition: background-color 0.02s, border-color 0.02s;
    }
  }
}
</style>
