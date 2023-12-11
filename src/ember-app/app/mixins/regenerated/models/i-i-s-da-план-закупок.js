import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  организации: DS.belongsTo('i-i-s-da-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-da-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-da-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-da-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-da-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-da-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-da-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-da-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    организации: belongsTo('i-i-s-da-организации', 'Организация', {
      организация: attr('Организация', { index: 1 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-da-склады', 'Склад', {
      склад: attr('Склад', { index: 2 })
    }, { index: -1, hidden: true }),
    план: hasMany('i-i-s-da-план', 'План', {
      номенклатура: belongsTo('i-i-s-da-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 0 }),
        контрагенты: belongsTo('i-i-s-da-контрагенты', '', {
          контрагент: attr('Контрагенты', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      единицыИзмер: belongsTo('i-i-s-da-единицы-измер', 'ЕдиницаИзмер', {
        единицаИзмер: attr('ЕдиницаИзмер', { index: 1 })
      }, { index: -1, hidden: true }),
      этоУслуга: attr('Это услуга', { index: 3 }),
      количество: attr('Количество', { index: 4 })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-da-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 })
  });
};
