
const method = {
    get: (url, setData, setMessenger) => {
        fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                setMessenger("Error al cargar. Buscar al Programador 👀👀👀");
            });
    },
    post: async (url, data, setMessenger) => {
        return await fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                return true;
            })
            .catch(err => {
                setMessenger.current.innerHTML = "Error al cargar. Buscar al Programador 👀👀👀";
                return false;
            });

    },
    delete: async (messenger, url, setMessenger) => {
        const confirm = window.confirm(`Estas seguro de eliminar ${messenger}?`);
        if (confirm) {
            return await fetch(url, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    return true;
                })
                .catch(err => {
                    if(typeof setMessenger === 'function'){
                        setMessenger("Error al cargar. Buscar al Programador 👀👀👀");
                    }else{
                        setMessenger.current.innerHTML = "Error al cargar. Buscar al Programador 👀👀👀";                    }
                    return false;
                });
        }else{
            return false;
        }
    },
    update:async (url, data, setMessenger) => {
        return await fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                return true;
            })
            .catch(err => {
                setMessenger.current.innerHTML = "Error al cargar. Buscar al Programador 👀👀👀";
                return false;
            });

    },
}

module.exports = method;