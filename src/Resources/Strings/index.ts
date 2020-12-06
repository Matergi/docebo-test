import internalizations from './internalizations';
import type {Dictionary} from './type';

type KeyLanguage = 'en' | 'it';

let language: KeyLanguage;
let dict: Dictionary;
let refreshPage: void;

class Language {
  static init = (lang: KeyLanguage, refreshPageParam?: void) => {
    language = lang;
    dict = internalizations[language];
    if (!dict) {
      dict = internalizations.en;
    }
    refreshPage = refreshPageParam;
  };

  static get = (): Dictionary => {
    if (!dict) {
      dict = internalizations.en;
    }

    return dict;
  };

  static setLanguage = (lang: KeyLanguage) => {
    language = lang;
    dict = internalizations[lang];
    // @ts-ignore
    refreshPage && refreshPage();
  };

  static getLanguage = () => {
    return language;
  };
}

export default Language;
