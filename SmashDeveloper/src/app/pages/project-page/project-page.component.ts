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
    this.projectList = this.projectService.getProjects();
    this.displayData = this.projectList;
  }

  protected get projects(): Project[] {
    return this.displayData;
  }
}
