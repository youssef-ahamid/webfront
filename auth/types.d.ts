export type Credentials = {
  email: string;
  password: string;
};

export type AuthenticationPayload = Credentials | { token: string };

export type RegistrationPayload = Credentials & { name: string };
