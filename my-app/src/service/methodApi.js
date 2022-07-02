const Base = 'http://localhost:8080';

const header = {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
}

export const get = async (route) => {
    console.log("Base: ",Base);
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
        await fetch(`${Base}/${route}`, {
            ...header,
            method: 'DELETE'
        });
    }
}



export const postp = async (route) => {
    
    let op = document.querySelectorAll('input[name="state"]');
    let select;

    for (const i of op) if (i.checked) select = i.value;

    let Id =Date.now();
    let Id_cliente = document.getElementById("idClient").value;
    let fecha = document.getElementById("date").value;
    var combo = document.getElementById("saleDetail.idProduct");
    let id_producto = combo.options[combo.selectedIndex].value;
    let cant = document.getElementById("saleDetail.quantity").value;
    let precio = document.getElementById("saleDetail.price").value;
    let totalp=cant*precio;
    let sale = {
        id: Id,
        idClient: Id_cliente,
        date: fecha,
        saleDetail: {
            idProducto: id_producto,
            quantity: cant,
            total: totalp,
        },
        stado: select
        
    }
    const response = await fetch(`${Base}/${route}`, {
        ...header,
        body: JSON.stringify(sale),
        method: 'POST'
    });
    const data = response.json();
    return data;
}

