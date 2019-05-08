import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/projects/project';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service used to load projects from the given data source.*
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor(private httpClient: HttpClient) { }
  /**
   * Gets a list of known projects.
   */
  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('./assets/projects/projects.json');
  } 
}
