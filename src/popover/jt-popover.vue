<docs>
<jt-popover>
  <button>Hover Me</button>
  <div slot="content">
    Content
  </div>
</jt-popover>
Props:
to="bottom"
</docs>

<template>
  <div class="jt-popover" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
  :style="{'--slide-dist': slideDist + 'px', '--gap': gap + 'px'}">
    <slot></slot>
    <transition name="fade">
      <div v-if="show" class="jt-popover-content" :class="'to-' + to">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'JtPopover',
  props: {
    to: { type: String, default: 'bottom' },
    showDelay: { type: Number, default: 0.2 },
    hideDelay: { type: Number, default: 0.2 },
    slideDist: { type: Number, default: 10 },
    gap: { type: Number, default: 2 },
  },
  data() {
    return {
      show: false,
      showTimeout: -1,
      hideTimeout: -1,
    }
  },
  methods: {
    onMouseEnter() {
      this.showTimeout = setTimeout(() => {
        this.show = true
      }, this.showDelay * 1000)
      clearTimeout(this.hideTimeout)
    },
    onMouseLeave() {
      this.hideTimeout = setTimeout(() => {
        this.show = false
      }, this.hideDelay * 1000)
      clearTimeout(this.showTimeout)
    },
  },
}
</script>

<style lang="scss" scoped>
.jt-popover {
  position: relative;
  display: inline-block;

  .jt-popover-content {
    position: absolute;
    border: solid 1px var(--jt-border);
    background-color: var(--jt-bg-container);
    padding: 6px 8px;
    border-radius: 5px;
    z-index: 1;

    &.to-bottom {
      left: 50%;
      top: 100%;
      transform: translate(-50%, var(--gap));
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(-50%, calc(var(--slide-dist) / -1));
      }
    }
    &.to-bottom-left {
      left: 0%;
      top: 100%;
      transform: translate(0%, var(--gap));
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(0%, calc(var(--slide-dist) / -1));
      }
    }
    &.to-bottom-right {
      left: 100%;
      top: 100%;
      transform: translate(-100%, var(--gap));
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(-100%, calc(var(--slide-dist) / -1));
      }
    }

    &.to-top {
      left: 50%;
      top: 0%;
      transform: translate(-50%, calc(-100% - var(--gap)));
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(-50%, calc(-100% + var(--slide-dist)));
      }
    }
    &.to-top-left {
      left: 0%;
      top: 0%;
      transform: translate(0%, calc(-100% - var(--gap)));
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(0%, calc(-100% + var(--slide-dist)));
      }
    }
    &.to-top-right {
      left: 100%;
      top: 0%;
      transform: translate(-100%, calc(-100% - var(--gap)));
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(-100%, calc(-100% + var(--slide-dist)));
      }
    }

    &.to-right {
      left: 100%;
      top: 50%;
      transform: translate(var(--gap), -50%);
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(calc(var(--slide-dist) / -1), -50%);
      }
    }
    &.to-right-top {
      left: 100%;
      top: 0%;
      transform: translate(var(--gap), 0%);
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(calc(var(--slide-dist) / -1), 0%);
      }
    }
    &.to-right-bottom {
      left: 100%;
      top: 100%;
      transform: translate(var(--gap), -100%);
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(calc(var(--slide-dist) / -1), -100%);
      }
    }

    &.to-left {
      left: 0%;
      top: 50%;
      transform: translate(calc(-100% - var(--gap)), -50%);
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(calc(-100% + var(--slide-dist)), -50%);
      }
    }
    &.to-left-top {
      left: 0%;
      top: 0%;
      transform: translate(calc(-100% - var(--gap)), 0%);
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(calc(-100% + var(--slide-dist)), 0%);
      }
    }
    &.to-left-bottom {
      left: 0%;
      top: 100%;
      transform: translate(calc(-100% - var(--gap)), -100%);
      &.fade-enter,
      &.fade-leave-to {
        transform: translate(calc(-100% + var(--slide-dist)), -100%);
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--jt-duration) ease-out, transform var(--jt-duration);
  pointer-events: none;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
