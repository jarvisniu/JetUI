<template>
  <div class="jt-contain-view">
    <div class="contain-wrapper" :style="wrapperStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtContainView',
  props: {
    ratio: { type: Number, default: 1 },
    padding: { type: Number, default: 20 },
  },
  data() {
    return {
      containerWidth: 0,
      containerHeight: 0,
    }
  },
  computed: {
    wrapperStyle() {
      let limitWidth = this.containerWidth - this.padding * 2
      let limitHeight = this.containerHeight - this.padding * 2
      let limitRatio = limitWidth / limitHeight // 容器宽高比
      if (limitRatio > this.ratio) {
        // 高度充满
        let imageWidth = limitHeight * this.ratio
        let PADDING = (limitWidth - imageWidth) / 2
        return {
          left: this.padding + PADDING + "px",
          top: this.padding + "px",
          width: limitWidth - PADDING * 2 + "px",
          height: limitHeight + "px",
        }
      } else {
        // 宽度充满
        let imageHeight = limitWidth / this.ratio
        let PADDING = (limitHeight - imageHeight) / 2
        return {
          left: this.padding + "px",
          top: this.padding + PADDING + "px",
          width: limitWidth + "px",
          height: limitHeight - PADDING * 2 + "px",
        }
      }
    },
  },
  mounted () {
    this.refreshContainerSize()
    window.addEventListener("resize", this.onResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    refreshContainerSize() {
      let containerStyle = getComputedStyle(this.$el)
      this.containerWidth = parseFloat(containerStyle.width)
      this.containerHeight = parseFloat(containerStyle.height)
    },
    onResize() {
      this.refreshContainerSize()
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-contain-view {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  color: var(--jt-text);
}

.contain-wrapper {
  box-sizing: border-box;
  position: absolute;

  & > * {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>
