const Base = process.env.REACT_BASE;

const header = {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
}

export const get = async (route) => {
    const response = await fetch(`${Base}/${route}`, header);
    const data = response.json();
    return data;
}

export const post = async (route, form) => {
    const response = await fetch(`${Base}/${route}`, {
        ...header,
        body: JSON.stringify(form),
        method: 'POST'
    });
    const data = response.json();
    return data;
}

export const put = async (route, form) => {
    const response = await fetch(`${Base}/${route}`, {
        ...header,
        body: JSON.stringify(form),
        method: 'PUT'
    });
    const data = response.json();
    return data;
}

export const delet = async (route, messenger )=> {
    if(window.confirm(`Estas seguro de eliminar ${messenger}?`)){
        const response = await fetch(`${Base}/${route}`, {
            ...header,
            method: 'DELETE'
        });
        const data = response.json();
        return data;
    }
}