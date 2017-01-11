// import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
// 	host: 'https://localhost:5984',
//   	namespace: 'api/test'
// });


import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/test');
var db = new PouchDB('test');

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the conection is lost
});

export default Adapter.extend({
  db: db
});