import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListClientsComponent } from "./components/pages/list-clients/list-clients.component";
import { CreateFormComponent } from './components/pages/create-form/create-form.component';
import { EditListComponent } from './components/pages/edit-list/edit-list.component';

const routes: Routes = [
  {
    path: "",
    component: ListClientsComponent,
  },
  {
    path: "edit-list",
    component: EditListComponent,
  },
  {
    path: "create-client",
    component: CreateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
