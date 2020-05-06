
const proxyApi = function (app, fetch, issuerUrl, appUrl) {
    fetch(issuerUrl)
        .then(response => response.json())
        .then(idClaim => {

            // Proxy all GET requests
            app.get("*", async (req, res) => {
                const resp = await fetch(appUrl + req.url,
                    {
                        headers: {
                            'id-claim': idClaim
                        }
                    });
                res.send(resp.json());
            });

            // Proxy all POST requests
            app.post("*", async (req, res) => {
                const resp = await fetch(appUrl + req.url,
                    {
                        method: 'POST',
                        headers: {
                            'id-claim': idClaim
                        },
                        body: req.body
                    });
                res.send(resp.json());
            });
        })
        .catch(err => console.log(err));
};

module.exports = proxyApi;