import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"contactme",component:ContactmeComponent},
  {path:"details",component:DetailsComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"blog",component:BlogComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
