import decode from "jwt-decode";

const auth_username = "username";
const auth_token = "id_token";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem(auth_token);
      localStorage.removeItem(auth_username);
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem(auth_token);
  }

  getUsername() {
    return localStorage.getItem(auth_username);
  }

  login(idToken, username) {
    localStorage.setItem(auth_token, idToken);
    localStorage.setItem(auth_username, username);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem(auth_token);
    localStorage.removeItem(auth_username);
    window.location.reload();
  }
}

export default new AuthService();
