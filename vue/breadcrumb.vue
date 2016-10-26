<style>
  @import "vue/breadcrumb.css";
</style>

<template>
    <div class="breadcrumb">
        <div class="breadcrumb-container">
            <icon-label v-for="item in items" :model="item"></icon-label>
        </div>
    </div>
</template>

<script>

  export default {
    data: function() {
      return {
        items: [
//        {
//          icon: 'file.png',
//          label: "three.js"
//        }
        ]
      }
    },
    events: {
    }
  }

</script>
