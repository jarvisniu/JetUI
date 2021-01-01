<template>
  <a
    class="jt-link"
    :href="url"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noreferrer noopener' : null"
  >
    <slot>{{ url }}</slot
    ><jt-icon
      v-if="showExternalIcon && isExternal"
      size="10"
      class="icon-external"
      name="externalLink"
    ></jt-icon>
  </a>
</template>

<script>
const RE_URL_DOMAIN = /^https?:/i

export default {
  name: 'JtLink',
  props: {
    url: { type: String, required: true },
    internal: { type: Boolean, default: undefined },
    external: { type: Boolean, default: undefined },
    showExternalIcon: { type: Boolean, default: true },
  },
  computed: {
    isExternal() {
      if (this.external) return true
      else if (this.internal) return false
      else return RE_URL_DOMAIN.test(this.url)
    },
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

  .icon-external {
    vertical-align: top;
    margin-top: 2px;
    margin-left: 3px;
  }
}
</style>
