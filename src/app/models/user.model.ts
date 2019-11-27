export class User {
  id: string;
  created: any;
  updated: any;
  name: string;
  surname: string;
  email: string;
  active: boolean;

  constructor(id: string, name: string, surname: string, email?: string, active: boolean = true, created?: any, updated?: any) {
    this.id = id;
    this.created = created;
    this.updated = updated;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.active = active;
  }

}
