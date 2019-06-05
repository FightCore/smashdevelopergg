<template>
<v-app :dark="isDark">
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>SmashDeveloper</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/projects" nuxt>Projects</v-btn>
      <v-btn flat to="/resources" nuxt>Resources</v-btn>
      <v-btn flat>Contributors</v-btn>
      <v-btn flat v-on:click="isDark = !isDark">Switch Theme</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <nuxt/>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>FightCore &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</v-app>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({})
export default class extends Vue {
  isDark: boolean = false;
}
</script>