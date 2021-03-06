import Component from '@ember/component';
import layout from '../templates/components/forgot-password-confirm-route';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,

  cognito: service(),

  actions: {
    forgotPasswordSubmit(e) {
      const { username, code, password, } =
        this.getProperties('username', 'code', 'password');

      e.preventDefault();

      this.get('cognito').forgotPasswordSubmit(username, code, password).then(() => {
        this.onComplete();
      }).catch((err) => {
        this.set('errorMessage', err.message);
      });
    }
  }
});
