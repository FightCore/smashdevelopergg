import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/projects/project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  protected get projects(): Project[] {
    return this.projectService.getProjects();
  }

}
