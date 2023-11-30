import axios from "axios";

export async function consultRNC(urlBase: string, rnc: string) {
    const url = `${urlBase}/api/v1/search-rnc`
    let response

    await axios.post(url, { document: rnc }).then((res) => response = res.data).catch(error => response = error.message)

    return response
}