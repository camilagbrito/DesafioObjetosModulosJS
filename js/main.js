import Order from './models/order.js';
import * as orderService from './services/order-service.js';

const data = document.getElementById("inputData").innerHTML.split("\n");

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

const totalPrice = orderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${totalPrice.toFixed(2)}`)