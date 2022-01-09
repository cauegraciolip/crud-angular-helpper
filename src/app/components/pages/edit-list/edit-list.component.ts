import { NgForm } from '@angular/forms';
import { EnumStatusClient } from './../../../@core/types';
import { ClientService } from './../../../@core/services/client.service';
import { IClient } from './../../../@core/client-interface';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  _client!: IClient;
  status!: EnumStatusClient;
  _myStatus: string[] = ['Ativo', 'Inativo'];

  constructor(private router: Router, private snackBar: MatSnackBar, private clientService: ClientService) { }

  ngOnInit(): void {
    this.receivedTempList();
  }

  navigateToHome(): void {
    this.router.navigate(['']);
  };

  public showSnackBar() {
    const MESSAGE: string = "Cliente editado!"

      this.snackBar.open(MESSAGE, "X", {
      horizontalPosition: "center",
      verticalPosition: 'top',
      duration: 3000,
    });
  };

  public receivedTempList() {
    const getLocal = localStorage.getItem('tempList');

    if(getLocal !== null) {
      this._client = JSON.parse(getLocal);   
    }
  };

  public testEdit(form: NgForm) {
    this.clientService.editThisClient(form.value, this.status);
    this.navigateToHome();
    
  }

}
