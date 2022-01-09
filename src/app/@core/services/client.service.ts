import { EnumStatusClient } from './../types';
import { IClient } from './../client-interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  snackBar: any;

  constructor() {  }

  public returnLocalStorageClients(): IClient[] {
    const LOCAL_DATA: string | null = localStorage.getItem('client-list');

    let listOfClients: Array<IClient> = [];

    if (LOCAL_DATA !== null) {
      listOfClients = JSON.parse(LOCAL_DATA);
    };

    return listOfClients;
  };

  public setNewClientToLocal(client: IClient): void {
    const arrayOfClients: IClient[] = this.returnLocalStorageClients();

    const {name, email, phone} = client;

    arrayOfClients.push({id: Math.floor(Date.now() * Math.random()).toString(36), name: name, email: email, phone: phone, status: EnumStatusClient.ATIVO});

    localStorage.setItem('client-list', JSON.stringify(arrayOfClients));

  };

  public deleteThisClient(id: string): string | null {

    const LOCAL_DATA = localStorage.getItem('client-list');

    if(LOCAL_DATA !== null) {

      const DELETED_ITEM: IClient[] = JSON.parse(LOCAL_DATA);

      const newList: IClient[] = DELETED_ITEM.filter((client: IClient) => client.id !== id);

      localStorage.setItem('client-list', JSON.stringify(newList));
      
    };

    return LOCAL_DATA
  };

  public editThisClient(client: IClient, status: EnumStatusClient): void {
    const LOCAL_DATA: IClient[] = this.returnLocalStorageClients();

    let item;
    let newList: IClient[];

    for(let index of LOCAL_DATA) {
      if(index.id === client.id) {
        newList = LOCAL_DATA.filter((cliente: IClient) => cliente.id !== index.id);

        index.name = client.name;
        index.email = client.email;
        index.phone = client.phone;

        item = {
          id: index.id,
          name: index.name,
          email: index.email,
          phone: index.phone,
          status: status,
        }

        newList.push(item)
        localStorage.setItem('client-list', JSON.stringify(newList));
      }
      
    }
  }



};
