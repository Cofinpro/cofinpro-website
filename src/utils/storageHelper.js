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
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem(itemName, JSON.stringify(item));

            console.log('saved item:' + item + ", in session storage");
        }
    }

    static getFromSessionStorage(itemName) {
        if(typeof itemName !== 'string') {
            throw "der itemName muss ein String sein. Bitte geben Sie einen String an.";
        }
        if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(itemName)) {
            if(sessionStorage.getItem(itemName) == null) {
                return "";
            }
            return JSON.parse(sessionStorage.getItem(itemName));
        }
        return '';
    }

} /* 'perspective' */

export default StorageHelper