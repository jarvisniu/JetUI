<template>
  <div>
    <h2>Contain View</h2>
    <div>Make an element in a container that has features of fixed aspect ratio, adaptive size, vertical&horizontal align center, padding. Just like the <code>object-fit: contain;</code> CSS style.</div>

    <h4>Tip</h4>
    <ul>
      <li>Resize the window to see the effects.</li>
    </ul>

    <h4>Props</h4>
    <ul>
      <li>ratio, default is 1</li>
      <li>padding, default is 20</li>
    </ul>

    <h4>Basic</h4>
    <jt-border all style="width: 50vw; height: 50vh;">
      <jt-contain-view>
        <div class="body">Body</div>
      </jt-contain-view>
    </jt-border>

    <h4>Padding</h4>
    <jt-border all style="width: 50vw; height: 50vh;">
      <jt-contain-view :padding="50">
        <div class="body">Body</div>
      </jt-contain-view>
    </jt-border>

    <h4>Ratio</h4>
    <jt-border all style="width: 50vw; height: 50vh;">
      <jt-contain-view :ratio="1.5">
        <div class="body">Body</div>
      </jt-contain-view>
    </jt-border>

  </div>
</template>

<style lang="scss" scoped>
.body {
  border: solid 1px silver;
  background-color: var(--jt-bg-container);
  padding: 10px;
}
</style>
