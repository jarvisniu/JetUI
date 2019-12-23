<template>
  <div
    class="input-search"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      class="search-box"
      :class="{ 'not-empty': text !== '' }"
    >
      <div class="icon search"></div>
      <div
        :class="{
          hide: text === '' || (!hovered && !focused),
        }"
        class="icon clear"
        @click="text = ''"
      ></div>
      <input
        v-model="text"
        type="text"
        @focus="focused = true"
        @blur="focused = false"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'JtInputSearch',
  props: {
    value: { type: String, required: true },
  },
  data () {
    return {
      text: this.value,
      hovered: false,
      focused: false,
    }
  },
  watch: {
    value (val) {
      this.text = val
    },
    text (val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-search {
  box-sizing: border-box;
  margin: 4px;
  min-width: 100px;
}
.search-box {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border: solid 1px;
  border-radius: 100px;
  width: 100%;
  height: 22px;

  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
  background-color: var(--jt-bg-input);
  border-color: var(--jt-bg-input-border);
  &.not-empty {
    background-color: var(--jt-bg-input-warning);
  }
  /* &:hover {
    background-color: var(--jt-bg-input-hover);
    border-color: var(--jt-bg-input-border-hover);
  } */
  &:focus {
    transition: background-color 0.1s;
    background-color: hsl(0, 0%, 100%);
  }
  &:focus-within {
    border-color: var(--jt-primary);
  }

  input[type="text"] {
    box-sizing: border-box;
    vertical-align: top;
    border: none;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    border-radius: 10px;
    font-size: 14px;
    color: inherit;
    background-color: transparent;
  }
}

.icon {
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 16px;
  background-size: 12px 12px;
  background-position: 2px 2px;
  background-repeat: no-repeat;
  margin: 2px;
  border-radius: 50%;
  line-height: 14px;
  text-align: center;

  &.clear {
    right: 0;
    transition: background-color 0.15s, opacity 0.15s;
    &:hover {
      background-color: #ccc;
    }
    &:active {
      background-color: #aaa;
    }

    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }

  &.search {
    left: 0;
    background-image: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAACNklEQVRYR+3XOYgUQRSH8fHCC8818gBNzAQ1UIwVVww20UgQFAMxMdFEBEHMFC8QVDAw8wAjr9Vok0VURI28DYzEA+8j8Po+2AdF09hd3cOY+IdfUtv15s10d1Vt538aZhTGjOhZ5mIHruAFPuIDnuAcNmMaup45OI0f+F3BpvZhMrqSAbxD+iG/8BYP8AifkP5dj7EIrbIFPxFF32AvFmI0ImOxDCfxHXH9e6xAo/Qj/fCzmImq2NwtxDx/qfnIygy8RBQ5iJxMxHXE/CH41tTOAcTki8iaPJKpeIqosx614tPrq+Wkz5iNpvE2RgM3HKgTO41JPlRt4i93F9byeXIdqcxRRAOrHGiZ3Yh6Gx2oyiC82EVnigMtk94GF6jK3IYXu7j4frfNEkQDxxyoyjC8+BvGOdAyyxENHHagKucRE7IXkJJsQNTb6UBVdiEmbHWgZU4h6q10oCqLERNuoskiFJmOWFPcF8ajVu4gmljnQMPsR9Q54UDduAXHxNdYgNysRpwfviL7ebqAaOIZ3OXqZg3SM8I9TEBW3BE9cEQRTzrb8bdCfTiEdBsPLnDZTbgR3UdayFvi/dwEV7m12AbPC64d6bVFV5HdxCS4KXkMKyta5gvSBzllE7XfhjRLcQYWLyusVziCefCbenouu+4yGjVhLOwu6fPg+XAPXLBccov/I3it37isiUto3ERO/JDYYYtq7Q3diGfEayg28BA9S/GgKp+pnsYmjuM53HVn4V+n0/kD9BLfYXkLf0AAAAAASUVORK5CYII=');
  }
  &.clear {
    background-image: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAABDUlEQVRYR+2VPQoCMRCF159K7ETwADaCCJ7AytIL2HsFK72EHsJexE69mm9YH0iIZpJJxGI/+NgYWN8zLrNVQ8MX2nBaL8304Lhe6mjBLbzBpWwYkPAjvMCJbISQXy7hj5eWEgznd6lKdOAO8qbUEm64eIUzGMRawhROUktkCSexJbKGE22JIuEkVKJoOJESe/geIiVWsHg48Z2Ea7Fw4juJn4WTPjxDt8AGFkceuAN0w0XNnDDhC787n4uV8IXLfz6HKRMzik/hfOC0wyoJ7ZApUkIbTrKWiA0nWUqkhhNTiS7MMdulhO/dsYBB1tASTtyTOMERVCElLOGEJxEVToavqxUpMaiXDX9FVT0BNYeWI1H0U6sAAAAASUVORK5CYII=');
  }
}

</style>
