class Tunnel {
    constructor(url) {
        this._url = url;
    }

    run() {
        this.#pull();
    }

    #pull() {
        fetch(this._url + '/pull')
            .then(response => response.json())
            .then(result => {
                console.log(result);
        });
    }



}
