import { EnumStatusClient } from './../../../@core/types';
import { Router } from '@angular/router';
import { IClient } from './../../../@core/client-interface';
import { ClientService } from './../../../@core/services/client.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})

export class ListClientsComponent implements OnInit {

  _clients: IClient[] = [];
  snackBar: any;
  
  constructor(private clientService: ClientService, private router: Router) { }

  public ngOnInit(): void {
    this.showListOfClient();
  }

  private showListOfClient(): void {
    this._clients = this.clientService.returnLocalStorageClients();
  };

  public deleteThisItem(id: string): void {
    this.clientService.deleteThisClient(id);  
    location.reload();
  };

  public navigateToEditForm() {
    this.router.navigate(['edit-list'])
  };

  public saveTempInfo(id: string, name: string, email: string, phone: number, status: EnumStatusClient) {
    const tempInfo: IClient = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      status: status,
      
    }

    localStorage.setItem('tempList', JSON.stringify(tempInfo));
  }
};

