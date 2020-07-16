
exports.getInfoByCityName = (req, res) => {
    try {
        var http = require("request");
        let city = req.params.city
        let apikey = 'c05c1e37c38ab839523ad145494f7269'
        http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`, function(error, response, body) {
            res.json(response);
        });
    }
    catch (e) {
        res.json("There was some error: " + e.message)
    }
}