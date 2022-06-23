import { PromiseRequest } from "../../utils";
import { login, logout } from "../../redux/reducer/userReducer";
import store from "../../redux/store"
class Auth {

  async login(username, password) {
    let url = PromiseRequest.getServiceUrl("login", "Auth")
    let param = {
      username,
      password
    }
    let res;
    await PromiseRequest.send(url, param).then(data => {
      res = data;
      localStorage.setItem("token", res.data.Token);
      localStorage.setItem("user", JSON.stringify(res.data.User));
      store.dispatch(login(res.data.User))

    }, { method: "post" }).catch(data => {
      res = data
      console.log(data)
    });
    return res;
  }

  logout() {
    
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    store.dispatch(logout());
  }

}

export default new Auth();