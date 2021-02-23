const axios = require('axios');

class Searchs {

    history = ['Madrid','Buenos Aires','San Luis'];

    construct(){

    }

    get paramsMapBox(){
        return {
                'access-token': process.env.MAPBOX_KEY,
                'limit': 5,
                'language' : 'es'
                }
    }

    async getCity (city = ''){
        
        try
        {
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ city }.json`,
                param : this.paramsMapBox()
            });
            const resp = await intance.get();

            console.log(resp.data)
            return []
        }
        catch(err)
        {
            console.log(err)
            return [];
        }
    }
}

module.exports = Searchs;