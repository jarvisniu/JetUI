<template>
  <div>
    <h2>Button</h2>

    <h4>Basic</h4>
    <jt-button>确定</jt-button>
    <jt-button>Confirm</jt-button>
    <jt-button>
        <jt-icon name="plus"></jt-icon>
    </jt-button>

    <h4>Height & Width</h4>
    <jt-button style="width: 100px;">Set Width</jt-button>
    <jt-button style="height: 40px;">Set Height</jt-button>
    <jt-button style="width: 100px; height: 40px;">Set Both</jt-button>

    <h4>Primary</h4>
    <jt-button type="primary">Search</jt-button>

    <h4>Disabled</h4>
    <jt-button disabled>Search</jt-button>

    <h4>Selected (Click to toggle)</h4>
    <jt-button :selected="isOn" @click="isOn = !isOn" style="width: 40px">
      {{ isOn ? 'Off' : 'On' }}
    </jt-button>
    <jt-button :selected="isOn" @click="isOn = !isOn">
        <jt-icon name="plus"></jt-icon>
    </jt-button>

    <h4>Button Group</h4>
    <jt-button-group>
      <jt-button :selected="selCity == 'Beijing'"
        @click="selCity = 'Beijing'">Beijing</jt-button>
      <jt-button :selected="selCity == 'Shanghai'"
        @click="selCity = 'Shanghai'">Shanghai</jt-button>
      <jt-button :selected="selCity == 'Hong Kong'"
        @click="selCity = 'Hong Kong'">Hong Kong</jt-button>
    </jt-button-group>

    <h4>Button Group with Icon</h4>
    <jt-button-group>
      <jt-button :selected="selCity == 'Beijing'"
        @click="selCity = 'Beijing'">
        <jt-icon name="plus"></jt-icon>
      </jt-button>
      <jt-button :selected="selCity == 'Shanghai'"
        @click="selCity = 'Shanghai'">
        <jt-icon name="minus"></jt-icon>
      </jt-button>
      <jt-button :selected="selCity == 'Hong Kong'"
        @click="selCity = 'Hong Kong'">
        <jt-icon name="search"></jt-icon>
      </jt-button>
    </jt-button-group>

    <!-- end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn: true,
      selCity: 'Beijing',
    }
  },
}
</script>
