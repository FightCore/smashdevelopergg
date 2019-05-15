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
        return project.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      }

      return false;
    });
  }
}