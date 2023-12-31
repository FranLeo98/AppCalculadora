import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/layout/home/home.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' },
    { path: '', pathMatch:'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
})
export class AppRoutingModule { }
