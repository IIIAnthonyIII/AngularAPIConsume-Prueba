import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private users = [
    { username: 'usuario1', password: '12345' },
    { username: 'usuario2', password: '123456' },
  ];
  getUsers() {
    return this.users;
  }
}
