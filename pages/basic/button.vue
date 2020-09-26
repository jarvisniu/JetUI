<template>
  <div>
    <h1>Button</h1>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-button>确定</jt-button>
        <jt-button>Confirm</jt-button>
        <jt-button icon="plus"></jt-button>
      </template>
      <textarea slot="code">
        <jt-button>确定</jt-button>
        <jt-button>Confirm</jt-button>
        <jt-button icon="plus"></jt-button>
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
          <jt-button icon="plus" style="width: 100px;">Set Width</jt-button>
          <jt-button icon="minus" style="height: 40px;">Set Height</jt-button>
          <jt-button icon="search" style="width: 100px; height: 40px;">Set Both</jt-button>
        </div>
      </template>
      <textarea slot="code">
        <div>
          <jt-button style="width: 100px;">Set Width</jt-button>
          <jt-button style="height: 40px;">Set Height</jt-button>
          <jt-button style="width: 100px; height: 40px;">Set Both</jt-button>
        </div>
        <div style="margin-top: 10px;">
          <jt-button icon="plus" style="width: 100px;">Set Width</jt-button>
          <jt-button icon="minus" style="height: 40px;">Set Height</jt-button>
          <jt-button icon="search" style="width: 100px; height: 40px;">Set Both</jt-button>
        </div>
      </textarea>
    </jt-snippet>

    <h2>Type Primary</h2>
    <jt-snippet>
      <template>
        <jt-button type="primary" icon="search">Search</jt-button>
      </template>
      <textarea slot="code">
        <jt-button type="primary" icon="search">Search</jt-button>
      </textarea>
    </jt-snippet>

    <h2>Type Flat</h2>
    <jt-snippet>
      <template>
        <jt-button type="flat" icon="search">Search</jt-button>
      </template>
      <textarea slot="code">
        <jt-button type="flat" icon="search">Search</jt-button>
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

    <h2>Squared</h2>
    <jt-snippet>
      <template>
        <jt-button squared icon="search"></jt-button>
        <jt-button type="flat" icon="search" squared></jt-button>
      </template>
      <textarea slot="code">
        <jt-button squared icon="search"></jt-button>
        <jt-button type="flat" icon="search" squared></jt-button>
      </textarea>
    </jt-snippet>

    <h2>Selected (Click to toggle)</h2>
    <jt-snippet>
      <template>
        <jt-button :selected="isOn" style="width: 40px" @click="isOn = !isOn">
          {{ isOn ? 'Off' : 'On' }}
        </jt-button>
        <jt-button :selected="isOn" :icon="isOn ? 'minus' : 'plus'" @click="isOn = !isOn"></jt-button>
      </template>
      <textarea slot="code">
        <jt-button :selected="isOn" style="width: 40px" @click="isOn = !isOn">
          {${ isOn ? 'Off' : 'On' }}
        </jt-button>
        <jt-button :selected="isOn" :icon="isOn ? 'minus' : 'plus'" @click="isOn = !isOn"></jt-button>
      </textarea>
    </jt-snippet>

    <h1>Button Group</h1>

    <h2>Basic</h2>
    <jt-snippet>
      <template>
        <jt-button-group>
          <jt-button
            v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
            :key="city"
            :selected="selCity == city"
            @click="selCity = city"
          >{{ city }}</jt-button>
        </jt-button-group>
      </template>
      <textarea slot="code">
        <jt-button-group>
          <jt-button
            v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
            :key="city"
            :selected="selCity == city"
            @click="selCity = city"
          >{${ city }}</jt-button>
        </jt-button-group>
      </textarea>
    </jt-snippet>

    <h2>Equal Width</h2>
    <jt-snippet>
      <template>
        <jt-button-group>
          <jt-button
            v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
            :key="city"
            width="100"
            :selected="selCity == city"
            @click="selCity = city"
          >{{ city }}</jt-button>
        </jt-button-group>
      </template>
      <textarea slot="code">
        <jt-button-group>
          <jt-button
            v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
            :key="city"
            width="100"
            :selected="selCity == city"
            @click="selCity = city"
          >{${ city }}</jt-button>
        </jt-button-group>
      </textarea>
    </jt-snippet>

    <h2>Only One</h2>
    <jt-snippet>
      <template>
        <jt-button-group>
          <jt-button>Beijing</jt-button>
        </jt-button-group>
      </template>
      <textarea slot="code">
        <jt-button-group>
          <jt-button>Beijing</jt-button>
        </jt-button-group>
      </textarea>
    </jt-snippet>

    <h2>With Icon</h2>
    <jt-snippet>
      <template>
        <jt-button-group>
          <jt-button
            v-for="icon in ['plus', 'minus', 'search']"
            :key="icon"
            :selected="selIcon == icon"
            :icon="icon"
            @click="selIcon = icon"
          ></jt-button>
        </jt-button-group>
      </template>
      <textarea slot="code">
        <jt-button-group>
          <jt-button
            v-for="icon in ['plus', 'minus', 'search']"
            :key="icon"
            :selected="selIcon == icon"
            :icon="icon"
            @click="selIcon = icon"
          ></jt-button>
        </jt-button-group>
      </textarea>
    </jt-snippet>

    <h2>Dock (remove borders of three sides)</h2>
    <jt-snippet>
      <template>
        <jt-border all>
          <jt-button-group dock="right" style="float: right">
            <jt-button
              v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
              :key="city"
              :selected="selCity == city"
              @click="selCity = city"
            >{{ city }}</jt-button>
          </jt-button-group>
          <jt-button-group dock="left">
            <jt-button
              v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
              :key="city"
              :selected="selCity == city"
              @click="selCity = city"
            >{{ city }}</jt-button>
          </jt-button-group>
        </jt-border>
      </template>
      <textarea slot="code">
        <jt-border all>
          <jt-button-group dock="right" style="float: right">
            <jt-button
              v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
              :key="city"
              :selected="selCity == city"
              @click="selCity = city"
            >{${ city }}</jt-button>
          </jt-button-group>
          <jt-button-group dock="left">
            <jt-button
              v-for="city in ['Beijing', 'Shanghai', 'Hong Kong']"
              :key="city"
              :selected="selCity == city"
              @click="selCity = city"
            >{${ city }}</jt-button>
          </jt-button-group>
        </jt-border>
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
