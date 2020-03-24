<template>
  <div class="jt-toolbar-divider"
    :class="{ 'through': through }"
  ></div>
</template>

<script>
export default {
  name: 'JtToolbarDivider',
  props: {
    through: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.jt-toolbar-divider {
  display: inline-block;
  width: 1px;
  margin: 2px 2px;
  &.through {
    margin: -2px 2px;
  }

  transition: background-color 0.2s;
  background-color: var(--jt-border);
}

.jt-toolbar.vertical .jt-toolbar-divider {
  display: block;
  height: 1px;
  margin: 4px 2px;
  width: calc(100% - 4px);
  &.through {
    margin: 4px -2px;
    width: calc(100% + 4px);
  }
}
</style>
