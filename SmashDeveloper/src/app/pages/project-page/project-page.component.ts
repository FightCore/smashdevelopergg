import { Component, OnInit, Input } from "@angular/core";
import { ProjectService } from "src/app/services/project/project.service";
import { Project } from "src/app/models/projects/project";
import { Game } from 'src/app/models/game';

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"]
})
export class ProjectPageComponent implements OnInit {
  private projectList: Project[];
  private displayData: Project[];
  private searchTerm: string;
  private gameFilter: Game = Game.All;

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
    this.projectList = projects;
    this.displayData = this.projectList;
  }

  protected search(item: string) {
    this.searchTerm = item;
    this.setDisplayData();
  }

  protected filterOnGame(game: Game) {
    this.gameFilter = game;

    this.setDisplayData();
  }

  protected setDisplayData() {
      this.displayData = this.projectList.filter(project => {
        let containsGame = project.game === this.gameFilter;
        if (project.game === Game.All || this.gameFilter === Game.All) {
          containsGame = true;
        }

        if (this.searchTerm) {
          return containsGame && project.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        }

        return containsGame;
      });
  }
}
