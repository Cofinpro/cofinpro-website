import Cookies from 'universal-cookie';

class StorageHelper {
  static saveInLocalStorage(itemName: string, item: object): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(itemName, JSON.stringify(item));
    }
  }

  static getFromLocalStorage(itemName: string): object | string {
    if (typeof itemName !== 'string') {
      throw 'der itemName muss ein String sein. Bitte geben Sie einen String an.';
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem(itemName)) {
      if (localStorage.getItem(itemName) == null) {
        return '';
      }
      return JSON.parse(localStorage.getItem(itemName) || '');
    }
    return '';
  }

  static saveInSessionStorage(itemName: string, item: object): void {
    const cookies = new Cookies();

    cookies.set(itemName, item, { path: '/' });
  }

  static getFromSessionStorage(itemName: string): any {
    const cookies = new Cookies();

    if (cookies.get(itemName) === undefined || cookies.get(itemName) === null) {
      return '';
    }

    return cookies.get(itemName);
  }
}

export default StorageHelper;
