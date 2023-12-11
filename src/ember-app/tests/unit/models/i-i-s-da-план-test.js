import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-da-план', 'Unit | Model | i-i-s-da-план', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-da-единицы-измер',
    'model:i-i-s-da-заказ-пост',
    'model:i-i-s-da-контрагенты',
    'model:i-i-s-da-номенклатура',
    'model:i-i-s-da-организации',
    'model:i-i-s-da-отчет-о-закупках',
    'model:i-i-s-da-план-закупок',
    'model:i-i-s-da-план',
    'model:i-i-s-da-склады',
    'model:i-i-s-da-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
