import checkAuth from '../utilities/checkAuth';
import store from '../redux/reducers/store';
import { loginSuccess } from '../redux/actions/loginAction';

const checkSession = () => {
  if(Object.keys(checkAuth()).length) {
    store.dispatch(loginSuccess(checkAuth()))
  }
}

export default checkSession;