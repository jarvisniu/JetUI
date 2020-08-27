<template>
  <div>
    <h2>Scroll View</h2>

    <h4>Features</h4>
    <ul>
      <li>Universal appearance.</li>
      <li>Always show scroll bar.</li>
      <li>Border between content and scroll bar.</li>
    </ul>

    <h4>TODO</h4>
    <ul>
      <li>Dark theme.</li>
      <li>Direction x.</li>
    </ul>

    <h4>Basic</h4>
    <jt-border all>
      <jt-scroll-view style="height: 150px; background: var(--jt-bg-container);">
        <div style="padding: 5px;">
          <div v-for="i in 15" :key="i">{{ i }}</div>
        </div>
      </jt-scroll-view>
    </jt-border>

    <h4>Invalid</h4>
    <jt-border all>
      <jt-scroll-view style="height: 150px; background: var(--jt-bg-container); ">
        <div style="padding: 5px;">
          <div v-for="i in 2" :key="i">{{ i }}</div>
        </div>
      </jt-scroll-view>
    </jt-border>

  </div>
</template>

<style lang="scss" scoped>
.child-1,
.child-2,
.child-3 {
  padding: 10px;
}
.child-1 {
  background-color: pink;
}
.child-2 {
  background-color: lightblue;
}
.child-3 {
  background-color: lightgreen;
}
</style>
