import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditListComponent } from './edit-list/edit-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    CreateFormComponent,
    ListClientsComponent,
    EditListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
  ]
})
export class PagesModule { }
