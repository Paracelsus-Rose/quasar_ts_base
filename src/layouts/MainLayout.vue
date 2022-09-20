<script setup lang="ts">

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Typescript-Quasar Repo with Pinia-ORM / VueAuth / VueUse + Component Testing with Cypress
        </q-toolbar-title>

        <a href="https://quasar.dev"><div>Quasar v{{ $q.version }}</div></a>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
