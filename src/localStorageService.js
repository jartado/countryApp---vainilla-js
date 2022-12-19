
export class LocalStorageService {


    static initItem(key, defaultValue) {

        let value = localStorage.getItem(key)
        if (!value) {
            value = defaultValue
            localStorage.setItem(key, value)
        }
        return value
    }


    static updateItem(key, value) {

        localStorage.setItem(key, value)
        return value
    }


    static setItem(key, value) {

        localStorage.setItem(key, value)
        return value
    }


    static getItem(key) {

        return localStorage.getItem(key)
    }
}