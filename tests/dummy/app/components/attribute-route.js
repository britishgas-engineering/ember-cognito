import Component from '@ember/component';
import layout from '../templates/components/attribute-route';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,

  cognito: service(),

  actions: {
    save(e) {
      e.preventDefault();
      const { name, value } = this.get('model');

      this.get('cognito.user').updateAttributes({ [name]: value }).then(() => {
        this.onSave();
      }).catch((err) => {
        this.set('errorMessage', err.message);
      });
    },

    deleteAttr(e) {
      e.preventDefault();
      const { name } = this.get('model');

      this.get('cognito.user').deleteAttributes([ name ]).then(() => {
        this.onDelete();
      }).catch((err) => {
        this.set('errorMessage', err.message);
      });
    }
  }
});
