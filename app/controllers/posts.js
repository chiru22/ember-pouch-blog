 import Ember from 'ember';

export default Ember.Controller.extend({  
        
        setContent: Ember.observer('content',function(){
                let content = this.get('content')
        }).on('init'),

});