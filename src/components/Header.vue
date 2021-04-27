<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand>
        {{ display_name }}
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    display_name() {
      return document.title
    }
  }
}
</script>
