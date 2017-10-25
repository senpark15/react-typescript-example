
import { observable, computed, action, useStrict } from 'mobx';
import { User } from '../models';

useStrict(true);
class AuthStore {

    @observable user: User;


    constructor() {
    }

    @action authenticate(userName: string, password: string) {
        this.user = { userName: userName, token: '' };
    }
}


const authStore = new AuthStore();
export default authStore;
