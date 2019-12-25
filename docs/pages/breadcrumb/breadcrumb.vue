<template>
  <div>
    <h2>Breadcrumb</h2>
    <div style="margin-bottom: 10px;">
      <jt-button @click="selectedIndex = -1">Clear</jt-button>
      <span>Selected Index: {{ selectedIndex }}</span>
    </div>
    <jt-border inline all>
      <jt-breadcrumb
        :labels="labels"
        v-model="selectedIndex"
      ></jt-breadcrumb>
    </jt-border>
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
