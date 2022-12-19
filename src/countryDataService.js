
export class CountryDataService {

    async getCountryDataAll() {
        const url = "https://restcountries.com/v3.1/all"
        return await this.#requestCountries(url)
    }

    async getCountryDataByCode(code) {
        const url = "https://restcountries.com/v3.1/alpha/" + code
        return await this.#requestCountries(url, true)
    }

    async getCountryDataByRegion(region) {
        const url = "https://restcountries.com/v3.1/region/" + region
        return await this.#requestCountries(url)
    }

    async getCountryDataBySubregion(subregion) {
        const url = "https://restcountries.com/v3.1/subregion/" + subregion
        return await this.#requestCountries(url)
    }



    async #requestCountries(url, isOneObjectArray) {
        const response = await fetch(url)
        if(response.ok) {
            const jsonValue = await response.json()
            return !!isOneObjectArray ? jsonValue[0] : jsonValue
        } else {
            alert("API request rejected")
        }
    }
}
