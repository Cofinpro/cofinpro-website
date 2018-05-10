import Cookies from 'universal-cookie';

class StorageHelper {

    static saveInLocalStorage(itemName, item) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(itemName, JSON.stringify(item));
        }
    }

    static getFromLocalStorage(itemName) {
        if(typeof itemName !== 'string') {
            throw "der itemName muss ein String sein. Bitte geben Sie einen String an.";
        }
        if (typeof localStorage !== 'undefined' && localStorage.getItem(itemName)) {
            if(localStorage.getItem(itemName) == null) {
                return "";
            }
            return JSON.parse(localStorage.getItem(itemName));
        }
        return '';
    }

    static saveInSessionStorage(itemName, item) {

        var cookies = new Cookies();

        cookies.set(itemName, item, { path: '/' });

        console.log('saved item:' + item + ", in session storage");
    }

    static getFromSessionStorage(itemName) {

        var cookies = new Cookies();

        if(  cookies.get(itemName) === undefined || cookies.get(itemName) === null) {
            return '';
        }
        console.log('load item:' + itemName + ", from session storage");
        return cookies.get(itemName);
    }

} /* 'perspective' */

export default StorageHelper