<style>
@import "vue/tab-bar.css";
</style>

<template>
<div class="tab-bar">
    <div class="tab-bar-container">
        <tab-button v-for="tab in tabs" :model="tab"></tab-button>
        <div class="tabbar-filler"></div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            tabs: [
                //        {
                //          icon: 'js',
                //          label: "three.js",
                //          selected: false
                //        }
            ]
        }
    },
    events: {
        tabClick: function(child) {
            var tabs = this.$children;
            for (var i in tabs) {
                if (!tabs.hasOwnProperty(i)) continue;
                if (tabs[i] !== child) {
                    tabs[i].model.selected = false
                } else {
                    tabs[i].model.selected = true;
                    this.$dispatch("tabChanged", tabs[i].model.key);
                }
            }
        }
    },
    methods: {
        getTabButtonIndex: function(child) {
            return Array.prototype.indexOf.call(this.$children, child);
        },
        isFirst: function(child) {
            return this.getTabButtonIndex(child) == 0;
        },
        isLast: function(child) {
            return this.getTabButtonIndex(child) == this.tabs.length - 1;
        },
        swapTabs: function(idx1, idx2) {
            if (idx2 == undefined) idx2 = idx1 + 1;
            if (idx1 == idx2 || idx1 < 0 || idx2 < 0 || Math.max(idx1, idx2) > this.tabs.length) return;

            var tabs = [];
            for (var i = 0; i < this.tabs.length; i++) tabs[i] = this.tabs[i];

            var t = tabs[idx1];
            tabs[idx1] = tabs[idx2];
            tabs[idx2] = t;

            this.tabs = tabs;
        },
        closeTab: function(button) {
            var index = this.getTabButtonIndex(button);

            var tabs = [];
            for (var i = 0; i < this.tabs.length; i++) tabs[i] = this.tabs[i];

            tabs.splice(index, 1);
            this.tabs = tabs;
        },
        swapWithLeft: function(button) {
            var index = this.getTabButtonIndex(button);
            this.swapTabs(index, index - 1);
        },
        swapWithRight: function(button) {
            var index = this.getTabButtonIndex(button);
            this.swapTabs(index, index + 1);
        }
    }
}
</script>
