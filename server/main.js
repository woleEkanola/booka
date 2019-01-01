import { Meteor } from 'meteor/meteor';
import '../imports/api/books.js'
import { Books } from '../imports/api/books.js';
import  {JsonRoutes} from 'meteor/simple:json-routes'

Meteor.startup(() => {
  // code to run on server at startup

  JsonRoutes.setResponseHeaders({
    "Cache-Control": "no-store",
    "Pragma": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
  });
});


Meteor.methods({
 'getBooks': function(x){
  return {
    book: Books.find({}).fetch(),
  }
}
 })

 Meteor.publish('books', function(){
   return Books.find()
 })

