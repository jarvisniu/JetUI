<template>
  <div>
    <h1>Button</h1>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-button>确定</jt-button>
        <jt-button>Confirm</jt-button>
        <jt-button>
          <jt-icon name="plus"></jt-icon>
        </jt-button>
      </template>
      <textarea slot="code">
        <jt-button>确定</jt-button>
        <jt-button>Confirm</jt-button>
        <jt-button>
          <jt-icon name="plus"></jt-icon>
        </jt-button>
      </textarea>
    </jt-snippet>

    <h2>Height & Width</h2>
    <jt-snippet>
      <template>
        <div>
          <jt-button style="width: 100px;">Set Width</jt-button>
          <jt-button style="height: 40px;">Set Height</jt-button>
          <jt-button style="width: 100px; height: 40px;">Set Both</jt-button>
        </div>
        <div style="margin-top: 10px;">
          <jt-button style="width: 100px;">
            <jt-icon name="plus"></jt-icon>
            <span>Set Width</span>
          </jt-button>
          <jt-button style="height: 40px;">
            <jt-icon name="minus"></jt-icon>
            <span>Set Height</span>
          </jt-button>
          <jt-button style="width: 100px; height: 40px;">
            <jt-icon name="search"></jt-icon>
            <span>Set Both</span>
          </jt-button>
        </div>
      </template>
      <textarea slot="code">
        <div>
          <jt-button style="width: 100px;">Set Width</jt-button>
          <jt-button style="height: 40px;">Set Height</jt-button>
          <jt-button style="width: 100px; height: 40px;">Set Both</jt-button>
        </div>
        <div style="margin-top: 10px;">
          <jt-button style="width: 100px;">
            <jt-icon name="plus"></jt-icon>
            <span>Set Width</span>
          </jt-button>
          <jt-button style="height: 40px;">
            <jt-icon name="minus"></jt-icon>
            <span>Set Height</span>
          </jt-button>
          <jt-button style="width: 100px; height: 40px;">
            <jt-icon name="search"></jt-icon>
            <span>Set Both</span>
          </jt-button>
        </div>
      </textarea>
    </jt-snippet>

    <h2>Primary</h2>
    <jt-snippet>
      <template>
        <jt-button type="primary">
          <jt-icon name="search"></jt-icon>
          <span>Search</span>
        </jt-button>
      </template>
      <textarea slot="code">
        <jt-button type="primary">
          <jt-icon name="search"></jt-icon>
          <span>Search</span>
        </jt-button>
      </textarea>
    </jt-snippet>

    <h2>Disabled</h2>
    <jt-snippet>
      <template>
        <jt-button disabled>Search</jt-button>
      </template>
      <textarea slot="code">
        <jt-button disabled>Search</jt-button>
      </textarea>
    </jt-snippet>

    <h2>Selected (Click to toggle)</h2>
    <jt-snippet>
      <template>
        <jt-button :selected="isOn" style="width: 40px" @click="isOn = !isOn">
          {{ isOn ? 'Off' : 'On' }}
        </jt-button>
        <jt-button :selected="isOn" @click="isOn = !isOn">
            <jt-icon name="plus"></jt-icon>
        </jt-button>
      </template>
      <textarea slot="code">
        <jt-button :selected="isOn" style="width: 40px" @click="isOn = !isOn">
          {${ isOn ? 'Off' : 'On' }}
        </jt-button>
        <jt-button :selected="isOn" @click="isOn = !isOn">
            <jt-icon name="plus"></jt-icon>
        </jt-button>
      </textarea>
    </jt-snippet>

    <h2>Button Group</h2>
    <jt-snippet>
      <template>
        <jt-button-group>
          <jt-button
            v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
            :key="city"
            :selected="selCity == city"
            @click="selCity = city"
          >Beijing</jt-button>
        </jt-button-group>
      </template>
      <textarea slot="code">
        <jt-button-group>
          <jt-button
            v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
            :key="city"
            :selected="selCity == city"
            @click="selCity = city"
          >Beijing</jt-button>
        </jt-button-group>
      </textarea>
    </jt-snippet>

    <h2>Button Group with Icon</h2>
    <jt-snippet>
      <template>
        <jt-button-group>
          <jt-button
            v-for="icon in ['plus', 'minus', 'search']"
            :key="icon"
            :selected="selIcon == icon"
            @click="selIcon = icon">
            <jt-icon :name="icon"></jt-icon>
          </jt-button>
        </jt-button-group>
      </template>
      <textarea slot="code">
        <jt-button-group>
          <jt-button
            v-for="icon in ['plus', 'minus', 'search']"
            :key="icon"
            :selected="selIcon == icon"
            @click="selIcon = icon">
            <jt-icon :name="icon"></jt-icon>
          </jt-button>
        </jt-button-group>
      </textarea>
    </jt-snippet>

    <!-- end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn: true,
      selCity: 'Beijing',
      selIcon: 'plus',
    }
  },
}
</script>
