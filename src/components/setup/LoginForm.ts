import { Form } from 'mobx-react-form';
import * as validatorjs from 'validatorjs';
import authStore from '../../store/AuthStore';

export default class LoginForm extends Form {
  plugins() {
    return { dvr: validatorjs };
  }

  /*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */
  setup() {
    return {
      fields: [{
        name: 'username',
        label: 'USERNAME',
        placeholder: 'Username',
        rules: 'required|string|between:5,25',
        value: 'senthil'
      }, {
        name: 'password',
        label: 'PASSWORD',
        placeholder: 'Password',
        rules: 'required|string|between:5,25',
      }],
    };
  }

  /*
    Event Hooks
  */
  hooks() {
    return {
      /*
        Success Validation Hook
      */
      onSuccess(form: any) {
        let login = form.values();
        authStore.authenticate(login.username, login.password);
      },
      /*
        Error Validation Hook
      */
      onError(form: any) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
      }
    };
  }
}
