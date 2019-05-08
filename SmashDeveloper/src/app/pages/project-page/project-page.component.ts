import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/projects/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  private projectList: Project[];
  private displayData: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projectList = projects;
      this.displayData = this.projectList;
    });
  }

  protected get projects(): Project[] {
    return this.displayData;
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
