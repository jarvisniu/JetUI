<template>
  <div class="jt-toolbar-divider"></div>
</template>

<script>
export default {
  name: 'JtToolbarDivider',
}
</script>

<style lang="scss" scoped>
.jt-toolbar-divider {
  display: inline-block;
  width: 1px;
  margin: 2px;

  transition: background-color 0.2s;
  background-color: var(--jt-border);
}

.jt-toolbar.vertical .jt-toolbar-divider {
  display: block;
  height: 1px;
  width: calc(100% - 4px);
}
</style>
