<template>
  <div></div>
</template>

<script>
export default {
  name: 'JtTableColumn',
  props: {
    label: { type: String, required: true },
    prop: { type: [String, Function], default: null },
    sortable: { type: Boolean, default: false },
    width: { type: Number, default: -1 },
  },
}
</script>
