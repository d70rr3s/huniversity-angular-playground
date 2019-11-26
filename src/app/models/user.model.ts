export class User {
  name: string;
  surname: string;
  email: string;
  active: boolean;

  constructor(name: string, surname: string, email?: string, active: boolean = true) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.active = active;
  }

}
