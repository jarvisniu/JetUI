<template>
  <a
    class="jt-link"
    :href="url"
    :target="open == 'new' ? '_blank' : '_self'"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'JtLink',
  props: {
    url: { type: String, default: null },
    open: { type: String, default: 'new' }, // can be 'current'
  },
}
</script>

<style lang="scss" scoped>
.jt-link {
  color: var(--jt-text);
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 1px;
  text-decoration: none;
  border-bottom: solid 1px hsla(0, 0%, 0%, 0.25);

  transition: background-color var(--jt-duration);
  background-color: var(--jt-link-bg);

  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-link-bg-hover);
    }
  }
}
</style>
