import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material-modules';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectListItemComponent } from '../app/components/project-list-item/project-list-item.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectPageComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectListItemComponent,
    SideNavComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
 }
