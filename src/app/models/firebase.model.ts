// tslint:disable-next-line:no-namespace
export namespace Firebase {
  export const COLLECTION = 'users';

  export class User {
    name?: string;
    fields: {
      name: {
        stringValue: string
      },
      surname: {
        stringValue: string
      },
      email: {
        stringValue: string
      },
      active: {
        booleanValue: boolean
      }
    };
    createTime?: string;
    updateTime?: string;
  }

  export class UserCollection {
    documents: Firebase.User[];
  }
}
