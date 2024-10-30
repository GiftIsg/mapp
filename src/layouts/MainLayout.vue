<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="$route.name !== 'splash'">
      <q-toolbar>
        <q-toolbar-title>MASM App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
