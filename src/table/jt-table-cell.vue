<script>
export default {
  props: {
    index: { type: Number, required: true },
    row: { type: Object, required: true },
    column: { type: Object, required: true },
  },
  methods: {
    getContent () {
      let instance = this.column.componentInstance
      let prop = this.column.componentOptions.propsData.prop
      if (instance.$scopedSlots.default) {
        return instance.$scopedSlots.default(this)
      } else if (instance.$slots.default) {
        return instance.$slots.default
      } else if (typeof prop === 'string') {
        return this.row[prop]
      } else if (typeof prop === 'function') {
        return prop(this)
      }
    },
  },
  render (h) {
    return h('div', this.getContent())
  },
}
</script>
