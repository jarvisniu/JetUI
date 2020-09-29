<template>
  <div></div>
</template>

<script>
export default {
  name: 'JtTableColumn',
  props: {
    label: { type: String, default: '' },
    prop: { type: [String, Function], default: null },
    sortable: { type: Boolean, default: false },
    width: { type: [Number, String], default: -1 }, // 150, '20%', 'auto'
    align: { type: String, default: 'left' }, // 'center', 'right'
  },
}
</script>
