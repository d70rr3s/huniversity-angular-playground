export class FirebaseUsersResponse {
  documents: {
    fields:
      {
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
      }
  }[];
}
