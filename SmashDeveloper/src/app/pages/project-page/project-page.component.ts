import { Component, OnInit, Input } from "@angular/core";
import { ProjectService } from "src/app/services/project/project.service";
import { Project } from "src/app/models/projects/project";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"]
})
export class ProjectPageComponent implements OnInit {
  private projectList: Project[];
  private displayData: Project[];
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.setProjects(projects);
    });
  }

  protected get projects(): Project[] {
    return this.displayData;
  }

  protected setProjects(projects: Project[]) {
    this.projectList = [];
    for (let y = 0; y < 10; y++) {
      for (let i = 0; i < projects.length; i++) {
        this.projectList.push(projects[i]);
      }
    }

    // this.projectList = projects;
    this.displayData = this.projectList;
  }

  protected search(item: string) {
    if (item) {
      this.displayData = this.projectList.filter(project => {
        return project.name.toLowerCase().includes(item.toLowerCase());
      });

      return;
    }

    this.displayData = this.projectList;
  }
}
