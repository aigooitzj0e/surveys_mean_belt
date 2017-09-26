import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './survey/listing/listing.component';
import { CreateComponent } from './survey/create/create.component';
import { ShowComponent } from './survey/show/show.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'listing', component: ListingComponent },
    { path: 'create', component: CreateComponent},
    { path: 'show/:id', component: ShowComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
