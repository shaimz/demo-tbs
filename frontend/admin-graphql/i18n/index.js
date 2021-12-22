var banner = require('./locales/en/banner.json');
var common = require('./locales/en/common.json');
var form = require('./locales/en/form.json');
var table = require('./locales/en/table.json');
var widgets = require('./locales/en/widgets.json');

const enTranslations = {
  banner,
  common,
  form,
  table,
  widgets
}

const i18n = {
	translations: {
		en: enTranslations,
  },
	defaultLang: 'en'
}

module.exports = i18n;
