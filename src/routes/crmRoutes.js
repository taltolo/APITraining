import {
  addNewContact,
  getContacts,
  getContactWithID,
  updteContact,
  deleteContact,
} from '../controllers/crmController';

const route = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      //middleware
      console.log(`Requset from: ${req.originalUrl}`);
      console.log(`Requset type: ${req.method}`);
      next();
    }, getContacts)

    .post(addNewContact);

  app
    .route('/contact/:contactID')
    .get(getContactWithID)
    .put(updteContact)
    .delete(deleteContact);
};

export default route;
