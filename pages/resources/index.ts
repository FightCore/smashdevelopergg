import { Component, Vue } from "nuxt-property-decorator";
import ResourceSectionDisplay from "~/components/ResourceSectionDisplay.vue";
import { ResourceSection } from "~/models/resourceSection";

@Component({
  components: {
    // ResourceSectionDisplay
  }
})
export default class extends Vue {
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Maintainer', value: 'maintainer' },
        { text: 'Game', value: 'game' },
        { text: 'Description', value: 'description' },
        { text: 'Open Source', value: 'openSource' },
      ],
      desserts: [
        {
          name: 'Test Resource',
          maintainer: 'Bort',
          game: 'Super Smash Bros. Ultimate',
          description: 'Testing Resource but this is a much longer sentence than the other items in this table.',
          openSource: true,
          sourceLink: 'https://test.com'
        },
        {
          name: 'Test Resource',
          maintainer: 'Bort',
          game: 'Super Smash Bros. Ultimate',
          description: 'Testing Resource but this is a much longer sentence than the other items in this table.',
          openSource: true,
          sourceLink: 'https://test.com'
        },
        {
          name: 'Test Resource',
          maintainer: 'Bort',
          game: 'Super Smash Bros. Ultimate',
          description: 'Testing Resource but this is a much longer sentence than the other items in this table.',
          openSource: true,
          sourceLink: 'https://test.com'
        },
        {
          name: 'Test Resource',
          maintainer: 'Bort',
          game: 'Super Smash Bros. Ultimate',
          description: 'Testing Resource but this is a much longer sentence than the other items in this table.',
          openSource: true,
          sourceLink: 'https://test.com'
        },
        {
          name: 'Test Resource',
          maintainer: 'Bort',
          game: 'Super Smash Bros. Ultimate',
          description: 'Testing Resource but this is a much longer sentence than the other items in this table.',
          openSource: true,
          sourceLink: 'https://test.com'
        }
      ]}}
  // resourceSections = require("~/static/resources.json");
}