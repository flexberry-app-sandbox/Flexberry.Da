import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  состОтгрузки: DS.attr('i-i-s-da-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-da-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-da-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-da-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-da-склады', { inverse: null, async: false }),
  заказ: DS.hasMany('i-i-s-da-т-ч-заказ', { inverse: 'заказПост', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-da-заказ-пост.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-da-заказ-пост', {
    датаНачала: attr('Дата начала', { index: 0 }),
    организации: belongsTo('i-i-s-da-организации', 'Организация', {
      организация: attr('Организация', { index: 1 })
    }, { index: -1, hidden: true }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    склады: belongsTo('i-i-s-da-склады', 'Склад', {
      склад: attr('Склад', { index: 3 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-da-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 4 })
    }, { index: -1, hidden: true }),
    суммаДокумента: attr('Сумма документа', { index: 5 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 6 }),
    состОтгрузки: attr('Состояние оплаты', { index: 7 }),
    заказ: hasMany('i-i-s-da-т-ч-заказ', 'Заказ', {
      номенклатура: belongsTo('i-i-s-da-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 0 }),
        контрагенты: belongsTo('i-i-s-da-контрагенты', '', {
          контрагент: attr('Контрагенты', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      единицыИзмер: belongsTo('i-i-s-da-единицы-измер', 'ЕдиницаИзмер', {
        единицаИзмер: attr('ЕдиницаИзмер', { index: 1 })
      }, { index: -1, hidden: true }),
      цена: attr('Цена', { index: 2 }),
      этоУслуга: attr('Это услуга', { index: 3 }),
      суммаНДС: attr('Сумма НДС', { index: 4 }),
      количество: attr('Количество', { index: 5 }),
      сумма: attr('Сумма', { index: 6 })
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-da-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 3 })
  });

  modelClass.defineProjection('ЗаказПоставщикуE', 'i-i-s-da-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    заказ: hasMany('i-i-s-da-т-ч-заказ', 'Заказ', {
      номенклатура: belongsTo('i-i-s-da-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 0 }),
        контрагенты: belongsTo('i-i-s-da-контрагенты', '', {
          контрагент: attr('Контрагенты', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      единицыИзмер: belongsTo('i-i-s-da-единицы-измер', 'ЕдиницаИзмер', {
        единицаИзмер: attr('ЕдиницаИзмер', { index: 1 })
      }, { index: -1, hidden: true }),
      цена: attr('Цена', { index: 2 }),
      этоУслуга: attr('Это услуга', { index: 3 }),
      суммаНДС: attr('Сумма НДС', { index: 4 }),
      количество: attr('Количество', { index: 5 }),
      сумма: attr('Сумма', { index: 6 })
    })
  });

  modelClass.defineProjection('ЗаказПоставщикуL', 'i-i-s-da-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 })
  });
};
