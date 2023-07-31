import { restoreSession } from "./session";

async function csrfFetch (url, options = {}) {
    options.method ||= 'GET';
    options.headers ||= {};

    let csrfToken = sessionStorage.getItem('X-CSRF-Token')

    

    if (options.method.toUpperCase !== 'GET') {
        if (!csrfToken) {
            // console.log('no token in session storage')
            await getCSRFToken()
            csrfToken = sessionStorage.getItem('X-CSRF-Token')
            // console.log(csrfToken)
        }
        options.headers['X-CSRF-Token'] = csrfToken

        if ( !(options.body instanceof FormData)) {
            options.headers['Content-Type'] ||= 'application/json';
    }
}
    const res = await fetch(url, options);

    if (res.state >= 400) {
        throw res
    }

    return res
}



async function getCSRFToken () {
    let res = await fetch('/api/session')
    let token = res.headers.get('X-CSRF-Token')
    console.log('fetched token is', token)
    sessionStorage.setItem('X-CSRF-Token', token)
    let storedToken = sessionStorage.getItem('X-CSRF-Token')
    console.log("the csrf token in session storage is", storedToken)

}
// export  function storeCSRFToken(response) {
//     // debugger
//     const csrfToken = response.headers.get('X-CSRF-Token');
//     if (csrfToken) {
//         sessionStorage.setItem('X-CSRF-Token', csrfToken)
//         console.log(csrfToken)
//     } else {
//         console.log("store token failed, invoking restore again")
//         restoreSession().then(res => storeCSRFToken(res))
//     }
//     return csrfToken
// }



export function storeCSRFToken(response) {

    let csrfToken = response.headers.get('X-CSRF-Token')
    sessionStorage.setItem('X-CSRF-Token', csrfToken)

    let storageToken = sessionStorage.getItem('X-CSRF-Token')
    // console.log(storageToken)
    if (!storageToken) {
        // console.log("no token found in sessionStorage after setItem operation")
        storeCSRFToken(response)
    }
    // console.log(storageToken)

    return csrfToken
}

// export async function restoreCSRF() {
//     const response = await fetch('/api/session');
//     storeCSRFToken(response);
//     return response
// }

export default csrfFetch


