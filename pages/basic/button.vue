<template>
  <div>
    <h1>Button</h1>

    <h2>Basic</h2>
    <jt-button>确定</jt-button>
    <jt-button>Confirm</jt-button>
    <jt-button>
        <jt-icon name="plus"></jt-icon>
    </jt-button>

    <h2>Height & Width</h2>
    <jt-button style="width: 100px;">Set Width</jt-button>
    <jt-button style="height: 40px;">Set Height</jt-button>
    <jt-button style="width: 100px; height: 40px;">Set Both</jt-button>

    <h2>Primary</h2>
    <jt-button type="primary">Search</jt-button>

    <h2>Disabled</h2>
    <jt-button disabled>Search</jt-button>

    <h2>Selected (Click to toggle)</h2>
    <jt-button :selected="isOn" @click="isOn = !isOn" style="width: 40px">
      {{ isOn ? 'Off' : 'On' }}
    </jt-button>
    <jt-button :selected="isOn" @click="isOn = !isOn">
        <jt-icon name="plus"></jt-icon>
    </jt-button>

    <h2>Button Group</h2>
    <jt-button-group>
      <jt-button :selected="selCity == 'Beijing'"
        @click="selCity = 'Beijing'">Beijing</jt-button>
      <jt-button :selected="selCity == 'Shanghai'"
        @click="selCity = 'Shanghai'">Shanghai</jt-button>
      <jt-button :selected="selCity == 'Hong Kong'"
        @click="selCity = 'Hong Kong'">Hong Kong</jt-button>
    </jt-button-group>

    <h2>Button Group with Icon</h2>
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
