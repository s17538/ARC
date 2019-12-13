import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClockComponent } from './add-clock/add-clock.component';
import { ListViewClockComponent } from './list-view-clock/list-view-clock.component';


const routes: Routes = [
  { path: "add", component: AddClockComponent },
  { path: "list", component: ListViewClockComponent },
  { path: "", pathMatch:"full",redirectTo:"list" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
