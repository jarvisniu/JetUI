<template>
  <div>
    <h1>Link</h1>

    <h2>Features</h2>
    <ul>
      <li>Whether to open in new page (target="_blank").</li>
    </ul>

    <h2>Basic (Auto external)</h2>
    <jt-snippet>
      <template>
        <jt-link url="https://google.com">Google</jt-link>
        <jt-link url="#/basic/button">Button Component</jt-link>
      </template>
      <textarea slot="code">
        <jt-link url="https://google.com">Google</jt-link>
        <jt-link url="#/basic/button">Button Component</jt-link>
      </textarea>
    </jt-snippet>

    <h2>Force external or internal</h2>
    <jt-snippet>
      <template>
        <jt-link internal url="https://google.com">Google</jt-link>
        <jt-link external url="#/basic/button">Button Component</jt-link>
      </template>
      <textarea slot="code">
        <jt-link internal url="https://google.com">Google</jt-link>
        <jt-link external url="#/basic/button">Button Component</jt-link>
      </textarea>
    </jt-snippet>

    <!-- end -->
  </div>
</template>
