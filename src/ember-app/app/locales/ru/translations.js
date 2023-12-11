import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDaЕдиницыИзмерLForm from './forms/i-i-s-da-единицы-измер-l';
import IISDaЗаказПостLForm from './forms/i-i-s-da-заказ-пост-l';
import IISDaКонтрагентыLForm from './forms/i-i-s-da-контрагенты-l';
import IISDaНоменклатураLForm from './forms/i-i-s-da-номенклатура-l';
import IISDaОрганизацииLForm from './forms/i-i-s-da-организации-l';
import IISDaОтчетОЗакупкахLForm from './forms/i-i-s-da-отчет-о-закупках-l';
import IISDaПланЗакупокLForm from './forms/i-i-s-da-план-закупок-l';
import IISDaСкладыLForm from './forms/i-i-s-da-склады-l';
import IISDaЕдиницыИзмерEForm from './forms/i-i-s-da-единицы-измер-e';
import IISDaЗаказПостEForm from './forms/i-i-s-da-заказ-пост-e';
import IISDaКонтрагентыEForm from './forms/i-i-s-da-контрагенты-e';
import IISDaНоменклатураEForm from './forms/i-i-s-da-номенклатура-e';
import IISDaОрганизацииEForm from './forms/i-i-s-da-организации-e';
import IISDaОтчетОЗакупкахEForm from './forms/i-i-s-da-отчет-о-закупках-e';
import IISDaПланЗакупокEForm from './forms/i-i-s-da-план-закупок-e';
import IISDaСкладыEForm from './forms/i-i-s-da-склады-e';
import IISDaЕдиницыИзмерModel from './models/i-i-s-da-единицы-измер';
import IISDaЗаказПостModel from './models/i-i-s-da-заказ-пост';
import IISDaКонтрагентыModel from './models/i-i-s-da-контрагенты';
import IISDaНоменклатураModel from './models/i-i-s-da-номенклатура';
import IISDaОрганизацииModel from './models/i-i-s-da-организации';
import IISDaОтчетОЗакупкахModel from './models/i-i-s-da-отчет-о-закупках';
import IISDaПланЗакупокModel from './models/i-i-s-da-план-закупок';
import IISDaПланModel from './models/i-i-s-da-план';
import IISDaСкладыModel from './models/i-i-s-da-склады';
import IISDaТЧЗаказModel from './models/i-i-s-da-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-da-единицы-измер': IISDaЕдиницыИзмерModel,
    'i-i-s-da-заказ-пост': IISDaЗаказПостModel,
    'i-i-s-da-контрагенты': IISDaКонтрагентыModel,
    'i-i-s-da-номенклатура': IISDaНоменклатураModel,
    'i-i-s-da-организации': IISDaОрганизацииModel,
    'i-i-s-da-отчет-о-закупках': IISDaОтчетОЗакупкахModel,
    'i-i-s-da-план-закупок': IISDaПланЗакупокModel,
    'i-i-s-da-план': IISDaПланModel,
    'i-i-s-da-склады': IISDaСкладыModel,
    'i-i-s-da-т-ч-заказ': IISDaТЧЗаказModel
  },

  'application-name': 'Da',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Da',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Da',
          title: 'Da'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        da: {
          caption: 'Da',
          title: 'Da',
          'i-i-s-da-отчет-о-закупках-l': {
            caption: 'Отчет о закупках',
            title: ''
          },
          'i-i-s-da-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-da-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-da-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-da-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-da-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-da-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-da-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-da-единицы-измер-l': IISDaЕдиницыИзмерLForm,
    'i-i-s-da-заказ-пост-l': IISDaЗаказПостLForm,
    'i-i-s-da-контрагенты-l': IISDaКонтрагентыLForm,
    'i-i-s-da-номенклатура-l': IISDaНоменклатураLForm,
    'i-i-s-da-организации-l': IISDaОрганизацииLForm,
    'i-i-s-da-отчет-о-закупках-l': IISDaОтчетОЗакупкахLForm,
    'i-i-s-da-план-закупок-l': IISDaПланЗакупокLForm,
    'i-i-s-da-склады-l': IISDaСкладыLForm,
    'i-i-s-da-единицы-измер-e': IISDaЕдиницыИзмерEForm,
    'i-i-s-da-заказ-пост-e': IISDaЗаказПостEForm,
    'i-i-s-da-контрагенты-e': IISDaКонтрагентыEForm,
    'i-i-s-da-номенклатура-e': IISDaНоменклатураEForm,
    'i-i-s-da-организации-e': IISDaОрганизацииEForm,
    'i-i-s-da-отчет-о-закупках-e': IISDaОтчетОЗакупкахEForm,
    'i-i-s-da-план-закупок-e': IISDaПланЗакупокEForm,
    'i-i-s-da-склады-e': IISDaСкладыEForm
  },

});

export default translations;
