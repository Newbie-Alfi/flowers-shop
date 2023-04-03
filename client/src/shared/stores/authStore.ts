import { ACCESS_TOKEN_KEY, authApi } from "@shared/api/auth";
import { makeAutoObservable } from "mobx";

export class AuthStore {
  // TODO: Бред
  private _isAuthicated = !!localStorage.getItem(ACCESS_TOKEN_KEY);

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: FormData) => {
    await authApi().signIn(data);

    this._isAuthicated = true;
  };

  logout = () => {
    authApi().logout();

    this._isAuthicated = false;
  };

  get isAuthicated() {
    return this._isAuthicated;
  }
}

export const authStore = new AuthStore();
