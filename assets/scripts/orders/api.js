'use strict';

const app = require('../app');

// Need correct url path
const displayOrders = () => {
  return $.ajax({
    url: app.host + "/user-orders/" + app.user._id /*:_owner*/,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // data: data
  });
};

// Need to define routes and data being passed
const deleteOrder = (order_id) => {
  let data = order_id;
  return $.ajax({
    url: app.host + '/user-orders/' + data,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {  "_id" : app.user._id }
  });
};

const createOrder = (newOrder) => {
  let data = newOrder;
  // console.log('stripe token is', data.stripe_token);
  return $.ajax({
    url: app.host + '/order-create',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

module.exports = {
  displayOrders,
  deleteOrder,
  createOrder,
};
