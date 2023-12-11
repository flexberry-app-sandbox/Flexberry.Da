import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-da-склады', 'Unit | Serializer | i-i-s-da-склады', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-da-склады',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-da-сост-оплаты',
    'transform:i-i-s-da-сост-поставок',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
