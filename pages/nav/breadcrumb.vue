<template>
  <div>
    <h1>Breadcrumb</h1>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <div style="margin-bottom: 10px;">
          <jt-button @click="selectedIndex = -1">Clear</jt-button>
          <jt-label>Selected Index: {{ selectedIndex }}</jt-label>
        </div>

        <jt-border inline all>
          <jt-breadcrumb
            :labels="labels"
            v-model="selectedIndex"
          ></jt-breadcrumb>
        </jt-border>
      </template>
      <textarea slot="code">
        <div style="margin-bottom: 10px;">
          <jt-button @click="selectedIndex = -1">Clear</jt-button>
          <jt-label>Selected Index: {${ selectedIndex }}</jt-label>
        </div>

        <jt-border inline all>
          <jt-breadcrumb
            :labels="labels"
            v-model="selectedIndex"
          ></jt-breadcrumb>
        </jt-border>
      </textarea>
    </jt-snippet>

  </div>
</template>

<script>
export default {
  data () {
    return {
      labels: [
        '1. Question',
        '2. Answer',
        '3. Review',
        '4. Score',
      ],
      selectedIndex: 3,
    }
  },
}
</script>
