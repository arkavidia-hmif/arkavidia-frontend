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

export enum LoginStatus {
  ERROR, INVALID_CREDS, EMAIL_NOT_CONFIRMED
}

export enum EmailResetPasswordStatus {
  ERROR, INVALID_TOKEN
}