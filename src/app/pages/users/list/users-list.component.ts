import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/users.service';
import { IUser } from '../../../core/models/interfaces/iuser';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  usersList: IUser[] = [];

  constructor (private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response) => this.usersList = response,
      error: (error) => console.log("Erro ao buscar usuários: ", error)
    })
  }
}
