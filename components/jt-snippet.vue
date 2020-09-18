<template>
  <div class="jt-snippet">
    <!-- Preview -->
    <div class="preview">
      <slot></slot>
    </div>
    <!-- Hidden Codes -->
    <div class="hidden-codes">
      <slot name="code"></slot>
    </div>
    <!-- Highlight Codes -->
    <div class="highlighted-codes" :class="{ expanded: expanded }">
      <div class="codes" :class="lang"></div>
    </div>
    <!-- Toggle Button -->
    <div
      class="toggle-bar"
      :class="{ expanded: expanded }"
      @click="expanded = !expanded"
    >
      <jt-icon :name="expanded ? 'triangleUp' : 'triangleDown'"></jt-icon>
      <span>{{ expanded ? 'Hide' : 'Show' }} Codes</span>
      <jt-icon :name="expanded ? 'triangleUp' : 'triangleDown'"></jt-icon>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/vs2015.css'
import _min from 'lodash/min'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('scss', scss)
hljs.configure({ useBR: true })

export default {
  props: {
    lang: { type: String, defualt: 'html' },
  },
  data() {
    return {
      expanded: false,
    }
  },
  mounted() {
    const codes = this.$el.querySelector('.hidden-codes textarea').value.trimEnd()
    const lines = codes.split('\n')
    const minIndent = _min(lines.map(line => /( *)/.exec(line)[0].length))
    const dedentedCoded = lines.map(line => line.substr(minIndent)).join('\n')
    const highlightDestEl = this.$el.querySelector('.codes')
    highlightDestEl.innerText = dedentedCoded
    hljs.highlightBlock(highlightDestEl)
  },
}
</script>

<style lang="scss" scoped>
.preview {
  border: solid 1px var(--jt-border);
  padding: 10px;
}
.hidden-codes {
  display: none;
}
.highlighted-codes {
  border: solid 1px var(--jt-border);
  border-top: none;
  overflow: hidden;
  transition: height var(--jt-duration);
  display: none;
  &.expanded {
    display: block;
  }
}
.codes {
  font-size: 14px;
  font-family: inconsolata;
  white-space: pre-wrap;
  padding: 10px;
  background-color: #234;
}
.toggle-bar {
  border: solid 1px var(--jt-border);
  border-top: none;
  padding: 4px 10px;
  color: var(--jt-text-sub);
  text-align: center;
  cursor: pointer;

  transition: background-color var(--jt-duration);
  background-color: var(--jt-bg-button);
  &:hover {
    @media (hover: hover) {
      background-color: var(--jt-bg-button-hover);
    }
  }
  &:active {
    transition: background-color var(--jt-duration-active);
    background-color: var(--jt-bg-button-active);
  }
}
</style>
