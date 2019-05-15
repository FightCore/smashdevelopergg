<template>
  <section>
    <v-layout row>
      <v-flex xs12 md12>
        <v-toolbar>
          <v-text-field v-model="searchTerm" label="Search" @change="search"></v-text-field>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout class="project-row" row wrap>
      <v-flex v-for="project in displayData" :key="project.id" class="project-item" xs12 md4>
        <project-display :project="project"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ProjectDisplay from "~/components/ProjectDisplay.vue";
import { Project } from "~/models/project";

@Component({
  components: {
    ProjectDisplay
  }
})
export default class extends Vue {
  projects: Project[] = require("~/static/projects.json");
  displayData: Project[] = this.projects;
  searchTerm: string = "";

  protected search() {
    this.displayData = this.projects.filter(project => {
      if (project && project.name) {
        project.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      }

      return false;
    });
  }
}
</script>

<style scoped>
.row {
  overflow: hidden;
}
.project-item {
  margin-bottom: -99999px;
  padding-bottom: 99999px;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 1em;
}
</style>
