import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.da.caption'),
          title: i18n.t('forms.application.sitemap.da.title'),
          children: [{
            link: 'i-i-s-da-отчет-о-закупках-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-отчет-о-закупках-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-отчет-о-закупках-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-da-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-заказ-пост-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-da-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-номенклатура-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-da-склады-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-склады-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-da-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-единицы-измер-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-da-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-контрагенты-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-da-организации-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-организации-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-da-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.da.i-i-s-da-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.da.i-i-s-da-план-закупок-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})