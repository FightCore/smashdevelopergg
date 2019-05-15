<template>
  <v-layout row>
    <v-flex xs12 md12>
      <resource-section-display/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ResourceSectionDisplay from "~/components/ResourceSectionDisplay.vue";
import { ResourceSection } from "~/models/resourceSection";

@Component({
  components: {
    // ResourceSectionDisplay
  }
})
export default class extends Vue {
  // resourceSections = require("~/static/resources.json");
}
</script>