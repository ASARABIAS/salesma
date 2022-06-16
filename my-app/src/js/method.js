
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
    post: (url, data, setMessenger) => {
        fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST'
        }).then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => {
            setMessenger.current.innerHTML="Error al cargar. Buscar al Programador 👀👀👀";
        });

        return null;
    }
}

module.exports = method;