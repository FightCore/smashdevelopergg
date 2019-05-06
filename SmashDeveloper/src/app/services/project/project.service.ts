import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/projects/project';

/**
 * Service used to load projects from the given data source.*
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor() { }
  /**
   * Gets a list of known projects.
   */
  public getProjects(): Project[] {
    return [this.generateFightCore()];
  }

  /**
   * Generates a project to represent FightCore for a simple test.
   */
  private generateFightCore(): Project {
    const project = new Project();
    project.id = 1;
    project.name = 'FightCore';
    project.releaseLink = 'https://www.FightCore.org';
    project.description = 'Core for the fighting community.';
    project.sourceLink = 'https://github.com/FightCore/FightCore';
    project.owner = 'Bort';
    project.imageUrl = 'https://github.com/FightCore/FightCore/blob/feature/cleanup/Frontend/src/assets/images/FC.png?raw=true';

    return project;
  }
}
