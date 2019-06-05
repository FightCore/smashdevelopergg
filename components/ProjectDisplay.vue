<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="project-card">
      <v-img v-if="project.bannerUrl" v-bind:src="project.bannerUrl" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div class="header">
          <v-avatar class="left-header" :size="70" tile v-if="project.imageUrl">
            <img v-bind:src="project.imageUrl" alt="avatar">
          </v-avatar>
          <div class="right-header">
            <fa class="fa-3x" :icon="getIcon()"/>
          </div>
          <div class="center-header">
            <h3 class="headline mb-0">{{ project.name }}</h3>
            <div>By {{ project.owner }}</div>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="project-text">
        <p>{{ project.description }}</p>
      </v-card-text>
      <v-card-actions class="project-action">
        <v-btn v-bind:href="project.sourceLink" v-if="project.sourceLink" color="info">Source code</v-btn>
        <v-btn v-bind:href="project.releaseLink" v-if="project.releaseLink" color="info">Release</v-btn>
        <div class="game-chip">
          <v-chip>{{ getGameName() }}</v-chip>
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Project } from "~/models/project";
import { Game } from "~/models/game";
import { fab } from "@fortawesome/free-brands-svg-icons";

@Component({})
export default class ProjectDisplay extends Vue {
  @Prop() project!: Project;

  protected getGameName() {
    if (this.project.game) {
      return Game[this.project.game];
    }

    return "";
  }

  protected getIcon(): string[] {
    if (this.project.type === "discord") {
      return ["fab", "discord"];
    }
    if (this.project.type === "sdk") {
      return ["fas", "wrench"];
    }
    if (this.project.type === "website") {
      return ["fas", "globe"];
    }
    if (this.project.type === "app") {
      return ["fas", "mobile-alt"];
    }

    return ["fas", "clock"];
  }
}
</script>

<style scoped>
.header {
  width: 100%;
}

.left-header {
  float: left;
  margin-right: 0.5em;
}

.center-header {
  float: center;
  width: 80%;
}

.right-header {
  float: right;
}

.project-card {
  height: 100%;
}

.project-text {
  padding-bottom: 3.5em;
  white-space: pre-line;
}

.project-action {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.game-chip {
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
}
</style>