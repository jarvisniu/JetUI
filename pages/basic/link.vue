<template>
  <div>
    <h1>Link</h1>

    <h2>Features</h2>
    <ul>
      <li>Open in new(default) or current</li>
    </ul>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-link url="https://google.com">Google</jt-link>
      </template>
      <textarea slot="code">
        <jt-link url="https://google.com">Google</jt-link>
      </textarea>
    </jt-snippet>

    <h2>Open in current</h2>
    <jt-snippet>
      <template>
        <jt-link url="#/basic/button" open="current">Jet UI Button</jt-link>
      </template>
      <textarea slot="code">
        <jt-link url="#/basic/button" open="current">Jet UI Button</jt-link>
      </textarea>
    </jt-snippet>

    <!-- end -->
  </div>
</template>
