'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onAddToCart = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addToCart(data)
    .done(ui.addToCartSuccess)
    .fail(ui.failure);
};

const onDisplayCart = (event) => {
  event.preventDefault();
  api.displayCart()
    .done(ui.displayCartSuccess)
    .fail(ui.failure);
};

const onClearCart = (event) => {
  event.preventDefault();
  api.clearCart()
    .done(ui.clearCartSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.content').on('submit', '.add-to-cart', onAddToCart);
  $('nav').on('click', '#get-cart', onDisplayCart);
  $('.content').on('click', '.clear-cart-button', onClearCart);
};

module.exports = {
  addHandlers
};
