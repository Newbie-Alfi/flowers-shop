import { ACCESS_TOKEN_KEY, authApi, REFRESH_TOKEN_KEY } from "@shared/api/auth";
import { makeAutoObservable } from "mobx";

export class AuthStore {
  isAuthicated = !!localStorage.getItem(ACCESS_TOKEN_KEY);

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: FormData) => {
    authApi().signIn(data);

    this.isAuthicated = true;
  };

  logout = () => {
    authApi().logout();

    this.isAuthicated = false;
  };
}

export const authStore = new AuthStore();
