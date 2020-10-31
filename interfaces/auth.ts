export type AuthData = {
  token: string,
  exp: number,
  user: {
    fullName: string,
    dateJoined: string,
    email: string,
    currentEducation: string | null,
    phoneNumber: string | null,
    institution: string | null
    birthDate: string | null,
    address: string | null
  }
}