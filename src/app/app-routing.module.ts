import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HookComponent } from './hook/hook.component';

const routes: Routes = [
  {path:'hook', component:HookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
