import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/AppConfig";
import jwtDecode from "jwt-decode";
import { authActions } from "../Redux/AuthSlice";
import { appStore } from "../Redux/AppState";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService{
    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        const registeredUser = jwtDecode<{user: UserModel}>(token).user;
        appStore.dispatch(authActions.register(registeredUser))
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token = response.data;
        localStorage.setItem("token", token);
        const loggedUser = jwtDecode<{user: UserModel}>(token).user;
        appStore.dispatch(authActions.login(loggedUser))
    }

    

    public logout() {
        appStore.dispatch(authActions.logout());
        localStorage.removeItem("token");
    }

    public constructor(){
        const token = localStorage.getItem("token");
        if(token){
            const loggedUser = jwtDecode<{user:UserModel}>(token).user;
            appStore.dispatch(authActions.login(loggedUser));
        }
    }

}

const authService = new AuthService();
export default authService;