import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-da-единицы-измер-l');
  this.route('i-i-s-da-единицы-измер-e',
  { path: 'i-i-s-da-единицы-измер-e/:id' });
  this.route('i-i-s-da-единицы-измер-e.new',
  { path: 'i-i-s-da-единицы-измер-e/new' });
  this.route('i-i-s-da-заказ-пост-l');
  this.route('i-i-s-da-заказ-пост-e',
  { path: 'i-i-s-da-заказ-пост-e/:id' });
  this.route('i-i-s-da-заказ-пост-e.new',
  { path: 'i-i-s-da-заказ-пост-e/new' });
  this.route('i-i-s-da-контрагенты-l');
  this.route('i-i-s-da-контрагенты-e',
  { path: 'i-i-s-da-контрагенты-e/:id' });
  this.route('i-i-s-da-контрагенты-e.new',
  { path: 'i-i-s-da-контрагенты-e/new' });
  this.route('i-i-s-da-номенклатура-l');
  this.route('i-i-s-da-номенклатура-e',
  { path: 'i-i-s-da-номенклатура-e/:id' });
  this.route('i-i-s-da-номенклатура-e.new',
  { path: 'i-i-s-da-номенклатура-e/new' });
  this.route('i-i-s-da-организации-l');
  this.route('i-i-s-da-организации-e',
  { path: 'i-i-s-da-организации-e/:id' });
  this.route('i-i-s-da-организации-e.new',
  { path: 'i-i-s-da-организации-e/new' });
  this.route('i-i-s-da-отчет-о-закупках-l');
  this.route('i-i-s-da-отчет-о-закупках-e',
  { path: 'i-i-s-da-отчет-о-закупках-e/:id' });
  this.route('i-i-s-da-отчет-о-закупках-e.new',
  { path: 'i-i-s-da-отчет-о-закупках-e/new' });
  this.route('i-i-s-da-план-закупок-l');
  this.route('i-i-s-da-план-закупок-e',
  { path: 'i-i-s-da-план-закупок-e/:id' });
  this.route('i-i-s-da-план-закупок-e.new',
  { path: 'i-i-s-da-план-закупок-e/new' });
  this.route('i-i-s-da-склады-l');
  this.route('i-i-s-da-склады-e',
  { path: 'i-i-s-da-склады-e/:id' });
  this.route('i-i-s-da-склады-e.new',
  { path: 'i-i-s-da-склады-e/new' });
});

export default Router;
