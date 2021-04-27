<template>
  <div>
    <SidebarMenu
      :menu="menu"
      :collapsed="collapsed"
      @toggle-collapse="onCollapse"
    >
      <font-awesome-icon :icon="['fa', 'chevron-right']" slot="dropdown-icon" />
      <font-awesome-icon :icon="['fa', 'arrows-alt-h']"  slot="toggle-icon" />
    </SidebarMenu>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    SidebarMenu
  },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          header: true,
          title: 'メニュー',
          hiddenOnCollapse: true
        },
        {
          href: { name: 'dog' },
          title: '犬',
          icon: {
            element: 'font-awesome-icon',
            attributes: { icon: 'dog' }
          }
        },
        {
          href: { name: 'cat' },
          title: '猫',
          icon: {
            element: 'font-awesome-icon',
            attributes: { icon: 'cat' }
          }
        },
        {
          href: { name: 'login' },
          title: 'ログアウト',
          icon: {
            element: 'font-awesome-icon',
            attributes: { icon: 'sign-out-alt' }
          }
        }
      ]
    }
  },
  methods: {
    onCollapse(c) {
      this.collapsed = c
      this.$emit('oncollapse', c)
    }
  }
}
</script>
