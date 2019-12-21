<template>
  <div class="jt-input">
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'JtInput',
}
</script>

<style lang="scss" scoped>
.jt-input {
  box-sizing: border-box;
  display: inline-block;
  border: solid 1px;

  input[type="text"] {
    box-sizing: border-box;
    display: block;
    line-height: 22px;
    padding: 0 5px;
    font-size: 12px;
    border: none;
    outline: none;
    color: inherit;
    background-color: inherit;
  }

  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  color: var(--jt-text);
  background-color: var(--jt-bg-input);
  border-color: #b8c0c8;
  &:hover {
    background-color: var(--jt-bg-input-hover);
    border-color: #a8b0b8;
  }
  &:focus-within {
    background-color: var(--jt-bg-input-hover);
    border-color: var(--jt-primary);
  }
}
</style>
