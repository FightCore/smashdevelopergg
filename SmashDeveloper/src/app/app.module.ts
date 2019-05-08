import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material-modules';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectListItemComponent } from '../app/components/project-list-item/project-list-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SourceIconComponent } from './components/source-icon/source-icon.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProjectIconComponent } from './components/project-icon/project-icon.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectPageComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListItemComponent,
    ProjectPageComponent,
    NavBarComponent,
    SearchBarComponent,
    SourceIconComponent,
    FooterComponent,
    ProjectIconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, fab);
  }
}
