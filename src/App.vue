<template>
  <div id="app">
    <router-view
      id="view"
      :class="[{'collapsed' : collapsed}, {'no-sidebar' : !showSidebar}]"
    />
    <router-view
      name="sidebar"
      id="sidebar" 
      @oncollapse="collapsed = $event"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      collapsed: false
    }
  },
  watch: {
    '$route' (to) {
      this.setMeta(to)
      this.switchSidebar(to)
    }
  },
  mounted() {
    this.switchSidebar(this.$route)
  },
  methods: {
    setMeta (to) {
      if(to.meta.title){
        document.title = to.meta.title
      }
    },
    switchSidebar(to) {
      if(to.meta.noSidebar) {
        this.showSidebar = false
      } else {
        this.showSidebar = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#view {
  padding-left: 350px;
  transition: padding-left .3s;
}
#view.collapsed {
  padding-left: 50px;
}

#view.no-sidebar {
  padding-left: 0px;
}

</style>
