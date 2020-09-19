<template>
  <div>
    <h1>Contain View</h1>
    <div>Make an element in a container that has features of fixed aspect ratio, adaptive size, vertical&horizontal align center, padding. Just like the <code>object-fit: contain;</code> CSS style.</div>

    <h2>Tip</h2>
    <ul>
      <li>Resize the window to see the effects.</li>
    </ul>

    <h2>Props</h2>
    <ul>
      <li>ratio, default is 1</li>
      <li>padding, default is 20</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-border all style="width: 50vw; height: 50vh;">
          <jt-contain-view>
            <div class="body">Body</div>
          </jt-contain-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all style="width: 50vw; height: 50vh;">
          <jt-contain-view>
            <div class="body">Body</div>
          </jt-contain-view>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Padding</h2>
    <jt-snippet>
      <template>
        <jt-border all style="width: 50vw; height: 50vh;">
          <jt-contain-view :padding="50">
            <div class="body">Body</div>
          </jt-contain-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all style="width: 50vw; height: 50vh;">
          <jt-contain-view :padding="50">
            <div class="body">Body</div>
          </jt-contain-view>
        </jt-border>
      </textarea>
    </jt-snippet>

    <h2>Ratio</h2>
    <jt-snippet>
      <template>
        <jt-border all style="width: 50vw; height: 50vh;">
          <jt-contain-view :ratio="1.5">
            <div class="body">Body</div>
          </jt-contain-view>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all style="width: 50vw; height: 50vh;">
          <jt-contain-view :ratio="1.5">
            <div class="body">Body</div>
          </jt-contain-view>
        </jt-border>
      </textarea>
    </jt-snippet>

  </div>
</template>

<style lang="scss" scoped>
.body {
  border: solid 1px silver;
  background-color: var(--jt-bg-container);
  padding: 10px;
}
</style>
