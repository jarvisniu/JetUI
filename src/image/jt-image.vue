<template>
  <div class="jt-image" :class="{ loading: loading, error: hasError }">
    <img
      :src="src"
      alt="image"
      class="jt-image"
      :style="{ 'object-fit': fit }"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script>
export default {
  name: 'JtImage',
  props: {
    src: { type: String, default: '' },
    fit: { type: String, default: 'contain' },
  },
  data() {
    return {
      loading: false,
      hasError: false,
    }
  },
  watch: {
    src() {
      this.hasError = false
      this.loading = true
    },
  },
  methods: {
    onLoad() {
      this.loading = false
    },
    onError(e) {
      console.log('onError', e)
      this.hasError = true
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-image {
  min-height: 1em;

  img {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity var(--jt-duration);
  }

  &.loading {
    background-color: var(--jt-bg-container-darker);
  }
  &.error {
    background-color: hsl(0, 50%, 92%);
  }

  &.error,
  &.loading {
    img {
      opacity: 0;
    }
  }
}
</style>
