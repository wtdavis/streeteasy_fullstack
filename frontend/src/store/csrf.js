async function csrfFetch (url, options = {}) {
    // debugger
    options.method ||= 'GET';
    options.headers ||= {};

    if (options.method.toUpperCase !== 'GET') {
        if ( !(options.body instanceof FormData)) {
        options.headers['Content-Type'] ||= 'application/json';
    }
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
}
    const res = await fetch(url, options);

    if (res.state >= 400) {
        throw res
    }

    return res
}


export function storeCSRFToken(response) {
    const csrfToken = response.headers.get('X-CSRF-Token');
    if (csrfToken) {
        sessionStorage.setItem('X-CSRF-Token', csrfToken)
    }
}

// export async function restoreCSRF() {
//     const response = await fetch('/api/session');
//     storeCSRFToken(response);
//     return response
// }

export default csrfFetch


