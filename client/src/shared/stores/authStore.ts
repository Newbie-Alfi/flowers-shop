import { ACCESS_TOKEN_KEY, authApi } from "@shared/api/auth";
import { makeAutoObservable } from "mobx";

export class AuthStore {
  // TODO: Бред
  isAuthicated = !!localStorage.getItem(ACCESS_TOKEN_KEY);

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: FormData) => {
    await authApi().signIn(data);

    this.isAuthicated = true;
  };

  logout = () => {
    authApi().logout();

    this.isAuthicated = false;
  };
}

export const authStore = new AuthStore();
