<template>
  <div>
    <h1>Icon</h1>

    <h2>Features</h2>
    <ul>
      <li>Color</li>
      <li>Size, Width, Height</li>
      <li>Custom Path and ViewBox</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-icon name="plus"></jt-icon>
      </template>
      <textarea slot="code">
        <jt-icon name="plus"></jt-icon>
      </textarea>
    </jt-snippet>

    <h2>Color</h2>
    <jt-snippet>
      <template>
        <jt-icon name="minus" color="red"></jt-icon>
        <jt-icon name="plus" style="color: orange;"></jt-icon>
      </template>
      <textarea slot="code">
        <jt-icon name="minus" color="red"></jt-icon>
        <jt-icon name="plus" style="color: orange;"></jt-icon>
      </textarea>
    </jt-snippet>

    <h2>Size</h2>
    <jt-snippet>
      <template>
        <jt-icon name="plus" size="32"></jt-icon>
      </template>
      <textarea slot="code">
        <jt-icon name="plus" size="32"></jt-icon>
      </textarea>
    </jt-snippet>

    <h2>Not Square</h2>
    <jt-snippet>
      <template>
        <jt-icon name="plus" width="28" height="14" style="border: dashed 1px silver;"></jt-icon>
      </template>
      <textarea slot="code">
        <jt-icon name="plus" width="28" height="14" style="border: dashed 1px silver;"></jt-icon>
      </textarea>
    </jt-snippet>

    <h2>Custom Path</h2>
    <jt-snippet>
      <template>
        <jt-icon view-box="0 0 40 40" path="M19,4 C27,4 34,10 34,19 C34,22 33,25 31,27 L36,32 L32,37 L26,31 C24,33 21,34 19,34 C10,34 4,27 4,19 C4,10 10,4 19,4 Z M19,10 C14,10 10,14 10,19 C10,23 14,28 19,28 C23,28 28,23 28,19 C28,14 23,10 19,10 Z"></jt-icon>
      </template>
      <textarea slot="code">
        <jt-icon view-box="0 0 40 40" path="M19,4 C27,4 34,10 34,19 C34,22 33,25 31,27 L36,32 L32,37 L26,31 C24,33 21,34 19,34 C10,34 4,27 4,19 C4,10 10,4 19,4 Z M19,10 C14,10 10,14 10,19 C10,23 14,28 19,28 C23,28 28,23 28,19 C28,14 23,10 19,10 Z"></jt-icon>
      </textarea>
    </jt-snippet>

    <h2>In Button</h2>
    <jt-snippet>
      <template>
        <jt-button>
          <jt-icon name="plus"></jt-icon>
          <span>Open</span>
        </jt-button>
      </template>
      <textarea slot="code">
        <jt-button>
          <jt-icon name="plus"></jt-icon>
          <span>Open</span>
        </jt-button>
      </textarea>
    </jt-snippet>

    <h2>All Icons</h2>
    <div v-for="name in sortedIconNames" :key="name" class="icon-card">
      <div class="icon">
        <jt-icon :name="name" size="48"></jt-icon>
      </div>
      <div class="name" :title="name">{{ name }}</div>
    </div>

  </div>
</template>

<script>
import allIcons from '../../src/icon/icon-paths'

export default {
  data() {
    return {
      allIcons,
    }
  },
  computed: {
    sortedIconNames() {
      return Object.keys(this.allIcons).sort()
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-card {
  display: inline-block;
  width: 64px;
  margin: 5px;
  border: solid 1px var(--jt-border);
  text-align: center;

  .icon {
    padding: 4px;
    background-color: var(--jt-bg-container);
  }

  .name {
    font-size: 12px;
    padding: 4px 2px;
    border-top: solid 1px var(--jt-border);
    background-color: var(--jt-bg-container-dark);
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
