import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing:false,
  actions: {
    createInspection() {
      var inspection = this.store.createRecord("inspection", {
        title: this.get('title'),
        isCompleted: this.get('isCompleted')
      });
      inspection.save();

      this.set('title', '');
      this.set('isCompleted', false);
    },

    deleteInspection(inspection) {
      inspection.deleteRecord();
      inspection.save();
    },
    editData(data){
      this.toggleProperty('isEditing');
      this.set('data',data);
    },
    save(data){
      data.save();
    }
  }
});