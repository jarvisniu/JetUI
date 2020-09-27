<template>
  <div>
    <h1>Scroll View</h1>

    <h2>Features</h2>
    <ul>
      <li>Universal appearance.</li>
      <li>Always show scroll bar.</li>
      <li>Border between content and scroll bar.</li>
      <li>Dark theme.</li>
      <li>Scroll direction, y(default), x, both.</li>
    </ul>

    <h2>Limitations</h2>
    <ul>
      <li>Not working on touch screens.</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-border all>
          <jt-scroll-view style="height: 150px; background: var(--jt-bg-container)">
            <div style="padding: 10px">
              <div v-for="i in 15" :key="i">{{ i }}</div>
            </div>
          </jt-scroll-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all>
          <jt-scroll-view style="height: 150px; background: var(--jt-bg-container)">
            <div style="padding: 10px">
              <div v-for="i in 15" :key="i">{${ i }}</div>
            </div>
          </jt-scroll-view>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Not Scrollable Style</h2>
    <jt-snippet>
      <template>
        <jt-border all>
          <jt-scroll-view style="height: 150px; background: var(--jt-bg-container)">
            <div style="padding: 10px">
              <div v-for="i in 2" :key="i">{{ i }}</div>
            </div>
          </jt-scroll-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all>
          <jt-scroll-view style="height: 150px; background: var(--jt-bg-container)">
            <div style="padding: 10px">
              <div v-for="i in 2" :key="i">{${ i }}</div>
            </div>
          </jt-scroll-view>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Horizontal Direction</h2>
    <jt-snippet>
      <template>
        <jt-border all>
          <jt-scroll-view scroll="x" style="height: 150px; background: var(--jt-bg-container)">
            <div class="content" style="width: 3000px; height: 100%">I am so wide.</div>
          </jt-scroll-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all>
          <jt-scroll-view scroll="x" style="height: 150px; background: var(--jt-bg-container)">
            <div class="content" style="width: 3000px; height: 100%">I am so wide.</div>
          </jt-scroll-view>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Both Direction</h2>
    <jt-snippet>
      <template>
        <jt-border all>
          <jt-scroll-view scroll="both" style="height: 150px; background: var(--jt-bg-container)">
            <div class="content" style="width: 3000px; height: 300px">I am so large.</div>
          </jt-scroll-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all>
          <jt-scroll-view scroll="both" style="height: 150px; background: var(--jt-bg-container); ">
            <div class="content" style="width: 3000px; height: 300px">I am so large.</div>
          </jt-scroll-view>
        </jt-border>
      </textarea>
    </jt-snippet>

  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 10px;
  background-color: var(--jt-bg-container-darker);
}
</style>
