import Component from '@ember/component';
import layout from '../templates/components/change-password-route';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,

  cognito: service(),

  actions: {
    changePassword(e) {
      const { oldPassword, newPassword, } =
        this.getProperties('oldPassword', 'newPassword');

      e.preventDefault();

      this.get('cognito.user').changePassword(oldPassword, newPassword).then(() => {
        this.onComplete();
      }).catch((err) => {
        this.set('errorMessage', err.message);
      });
    }
  }
});
