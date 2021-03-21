import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './contactme/contactme.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"contactme",component:ContactmeComponent},
  {path:"details",component:DetailsComponent},
  {path:"projects",component:DetailsComponent},
  {path:"blog",component:DetailsComponent},
  {path:"home",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
