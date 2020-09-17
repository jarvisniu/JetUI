<template>
  <div>
    <h1>Input</h1>

    <h2>Features</h2>
    <ul>
      <li>Rounded</li>
      <li>Show Clear</li>
    </ul>

    <h2>Events</h2>
    <ul>
      <li>@press-enter</li>
    </ul>

    <h2>Basic</h2>
    <jt-border inline all>
      <jt-toolbar>
        <jt-input width="200" v-model="keyword"></jt-input>
      </jt-toolbar>
    </jt-border>

    <h2>Type Password</h2>
    <jt-border inline all>
      <jt-toolbar>
        <jt-input width="200" type="password" v-model="keyword"></jt-input>
      </jt-toolbar>
    </jt-border>

    <h2>Search Box: rounded & icon="search" & show-clear & show-not-empty</h2>
    <jt-border inline all>
      <jt-toolbar>
        <jt-input
          width="200" v-model="keyword"
          rounded icon="search" show-clear show-not-empty
        ></jt-input>
      </jt-toolbar>
    </jt-border>

  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    onPressEnter() {
      alert('press-enter')
    },
  },
}
</script>
