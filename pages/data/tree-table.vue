<template>
  <div>
    <h2>Tree Table</h2>

    <h3>TODO</h3>
    <ul>
      <li>Customize Columns</li>
      <li>Unlimited Levels</li>
    </ul>

    <h3>Basic</h3>
    <jt-tree-table :data="data"></jt-tree-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { fullName: 'Frameworks', children: [
          { nickname: 'yyx', fullName: 'Evan You', github: 'yyx990803', twitter: '', works: ['Vue'] },
          { nickname: 'tj', fullName: 'TJ Holowaychuk', github: 'tj', twitter: '', works: ['Express', 'Pug', 'Stylus'] },
          { nickname: 'mrdoob', fullName: 'Ricardo Cabello', github: 'mrdoob', twitter: '', works: ['Three.js'] },
          { nickname: '-', fullName: 'John Resig', github: 'jeresig', twitter: 'jeresig', works: ['jQuery'] },
        ] },
        { fullName: 'Libraries', children: [
          { nickname: 'ashkenas', fullName: 'Jeremy Ashkenas', github: 'jashkenas', twitter: '', works: ['CoffeeScript', 'Underscore', 'Backbone'] },
        ] },
        { fullName: 'Language', children: [
          { nickname: '-', fullName: 'Anders Hejlsberg', github: 'ahejlsberg', twitter: '', works: ['C#', 'TypeScript'] },
        ] },
        { fullName: 'OS', children: [
          { nickname: 'linus', fullName: 'Linus Torvalds', github: 'mrdoob', twitter: '', works: ['Linux', 'Git'] },
        ] },
      ],
    }
  },
}
</script>
