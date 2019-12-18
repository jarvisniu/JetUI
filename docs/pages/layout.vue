<template>
  <div class="app" :class="`jt-theme-${ theme }`">
    <div class="side">
      <div class="title">jet-ui docs</div>
      <label>
        <input v-model="theme" type="radio" value="light"/>
        <span>Light</span>
      </label>
      <label>
        <input v-model="theme" type="radio" value="dark"/>
        <span>Dark</span>
      </label>
      <div v-for="(pageGroup, groupIndex) in pageGroups" :key="groupIndex">
        <div class="section-title">{{ pageGroup.name }}</div>
        <div
          class="page-link"
          v-for="(page, pageIndex) in pageGroup.pages"
          :key="pageIndex"
        >
          <router-link
            :to="page.path"
            :class="{selected: $route.path == page.path}"
          >
            {{ page.name }}
          </router-link>
        </div>
      </div>
    </div><div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      pageGroups: [
        {
          name: 'Basic',
          pages: [
            { name: 'Button', path: '/button' },
            { name: 'Image Button', path: '/image-button' },
            { name: 'Toolbar', path: '/toolbar' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #fefefe;
  height: 100vh;
  overflow: auto;

  &.jt-theme-dark {
    color: white;
    background-color: #222;
  }
}
.side,
.content {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow-y: auto;
  vertical-align: top;
}
.side {
  width: 200px;
  border-right: solid 1px silver;
  background-color: #f8f8f8;
  padding: 10px;
  font-family: Inconsolata, Monaco, Consolas, STHeiti, DengXian, monospace, 'Segoe UI Emoji';

  .title {
    font-size: 24px;
    padding-bottom: 10px;
  }
  .section-title {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0;
    color: #7090b0;
  }
  .page-link {
    font-size: 16px;
    line-height: 24px;
    a {
      text-decoration: none;
      color: black;
      transition: color 0.05s;
      &:hover {
        color: #049EF4;
      }
      &.selected {
        color: #049EF4;
        text-decoration: underline;
      }
    }
  }
}
.jt-theme-dark .side {
  color: white;
  background-color: #111;
  a {
    color: white;
  }
}
.content {
  width: calc(100% - 200px);
  padding: 0 10px;
}
</style>
