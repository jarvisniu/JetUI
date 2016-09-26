<style>
  @import "vue/horizontal-splitter.css";
</style>

<template>
  <div class="horizontal-splitter"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp">
    <div class="panel">
      <slot name="left"></slot>
    </div>
    <div class="splitter-handle" v-ref:handle>
      <div class="splitter-line"></div>
    </div>
    <div class="panel">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        downOnSplitter: false,
        domHandle: null,
        domLeftPanel: null,
        domRightPanel: null
      }
    },
    props: ['theme'],
    methods: {
        onMouseDown: function(ev) {
            if (this.isDomOn(ev.target, this.domHandle)) {
                this.downOnSplitter = true;
            }
        },
        onMouseMove: function(ev) {
            if (this.downOnSplitter) this.moveSplitter(ev.movementX);
        },
        onMouseUp: function(ev) {
            this.downOnSplitter = false;
        },
        isDomOn: function(child, parent) {
			if (child == parent) return true;

			var p = child.parentNode;
			while (!(p instanceof HTMLBodyElement)) {
				if (p == parent) return true;
				p = p.parentNode;
			};
			return false;
        },
        getPxStyle: function (dom, style) {
			return parseFloat(getComputedStyle(dom)[style]);
		},
        moveSplitter: function(delta) {
			var widthLeft = this.getPxStyle(this.domLeftPanel, "width");
			var widthRight = this.getPxStyle(this.domRightPanel, "width");

			widthLeft += delta;
			widthRight -= delta;

			this.domLeftPanel.style.flex = widthLeft / (widthLeft + widthRight);
			this.domRightPanel.style.flex = widthRight / (widthLeft + widthRight);
		}
    },
    ready: function() {
        this.domHandle = this.$el.querySelector(".splitter-handle");
        this.domLeftPanel = this.$el.querySelectorAll(".panel")[0];
        this.domRightPanel = this.$el.querySelectorAll(".panel")[1];
    }
  }

</script>
