import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/projects/project';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';

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
    const projects = [];
    for (let i = 0; i < 30; i++){
      projects.push(this.generateFightCore());
    }
    return projects;
  }

  /**
   * Generates a project to represent FightCore for a simple test.
   */
  private generateFightCore(): Project {
    const project = new Project();
    project.id = 1;
    project.name = 'FightCore';
    project.releaseLink = 'https://www.FightCore.org';
    project.description = `Core for the fighting community. I really still need to make this description longer but right now will just fill it with garbage. Nostrud reprehenderit sint cupidatat ipsum ad velit mollit elit id Lorem velit nulla elit. Pariatur exercitation occaecat dolore consectetur aliquip tempor dolore anim culpa officia sunt dolor culpa duis. Nulla esse commodo esse non do labore consequat sit. Quis est consectetur eu ut aliquip do ad minim sit voluptate dolor proident ea sint.

Ad excepteur veniam culpa deserunt culpa et. Consectetur aliquip laboris exercitation in cupidatat in anim cupidatat Lorem cupidatat cupidatat eu commodo. Do Lorem anim duis proident consequat proident elit labore consequat eiusmod. Voluptate dolor id pariatur duis eu voluptate ex proident sit cillum cillum laboris magna. Qui est elit non voluptate.

Ex consequat qui exercitation officia labore proident velit excepteur. Ipsum do veniam anim ut commodo non consequat ut id voluptate. Aute amet sint nostrud ullamco qui ad cupidatat exercitation proident. Velit elit quis eu anim exercitation. In officia proident est duis Lorem sunt excepteur laboris. Ullamco qui proident in est anim aliquip excepteur consectetur sint elit pariatur est proident. Est sit sint cupidatat exercitation consectetur mollit anim qui.

Aliqua pariatur cillum irure fugiat. Minim ut duis labore enim aute duis adipisicing ad eiusmod qui ut ipsum. Elit veniam magna officia eu qui sunt officia elit magna.

Amet Lorem ut aliquip tempor officia amet adipisicing id amet non anim excepteur elit. Magna tempor sit minim proident. Tempor dolor velit duis est. Anim ea laboris sint cupidatat tempor amet do laborum culpa elit mollit. Ea culpa non id eu sint labore elit amet magna aute consectetur do officia.

Nisi pariatur fugiat exercitation nisi non quis reprehenderit sit commodo et eiusmod excepteur eu cupidatat. Aliquip cillum magna occaecat dolore laborum. Sit culpa ea occaecat non Lorem fugiat adipisicing. Ullamco do sint reprehenderit et aliquip ex deserunt commodo adipisicing. Voluptate amet incididunt nulla magna sit enim.

Sunt tempor aliquip voluptate occaecat ut quis anim laboris nulla amet. Pariatur ad adipisicing reprehenderit cillum fugiat aute id do sit elit. Sunt irure minim dolor excepteur officia pariatur ipsum et nostrud enim.`;
    project.sourceLink = 'https://github.com/FightCore/FightCore';
    project.owner = 'Bort';
    project.imageUrl = 'https://github.com/FightCore/FightCore/blob/feature/cleanup/Frontend/src/assets/images/FC.png?raw=true';

    return project;
  }
}
