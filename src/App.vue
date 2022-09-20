<script setup lang="ts">
import { authenticateRoutes } from '@vueauth/quasar-ui-auth'

authenticateRoutes()
</script>

<template>
  <router-view />
</template>
