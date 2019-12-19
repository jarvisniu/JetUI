<template>
  <div>
    <h2>Toggle Bar</h2>

    <h4>Basic (Horizontal)</h4>
    <jt-border inline all>
      <jt-toggle-bar>
        <jt-toggle-bar-button
          v-for="(button, index) in toggleBarButtons"
          :key="index"
          :icon="button.icon"
          :label="button.label"
          :value="button.value"
          :tip="button.tip"
          :selected="selButtonValue === button.value"
          @click="selButtonValue = button.value"
        ></jt-toggle-bar-button>
      </jt-toggle-bar>
    </jt-border>

  </div>
</template>

<script>
import iconDatabase from '../../assets/database.png'
import iconTable from '../../assets/table.png'

export default {
  data() {
    return {
      toggleBarButtons: [
        { icon: iconDatabase, value: 'database', label: 'Database', tip: 'Manage Database' },
        { icon: iconTable, value: 'table', label: 'List', tip: 'Manage List' },
      ],
      selButtonValue: 'database',
    }
  },
}
</script>
