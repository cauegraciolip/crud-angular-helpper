import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from './../../../@core/services/client.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})

export class CreateFormComponent implements OnInit {

  constructor(private router: Router, private clientService: ClientService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  navigateToHome(): void {
    this.router.navigate(['']);
  };

  saveThisClient(form: NgForm): void {
    this.clientService.setNewClientToLocal(form.value);
    
  };

  public showSnackBar() {
    const MESSAGE: string = "Cliente criado!"

      this.snackBar.open(MESSAGE, "X", {
      horizontalPosition: "center",
      verticalPosition: 'top',
      duration: 3000,
    });
  };


};
