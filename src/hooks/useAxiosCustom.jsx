import axios from "axios";

export const useAxiosCustom = () =>{
    const api_url = "https://fordacademy.flowai.ar/api";
    const api_token = "3|AWHUkeOfBrM2XBHB1T3eEXXJXHRy0HqBFqG8EOxA";

    const _getUrl = (action)=>{
        return api_url+action;
    }

    const _getConfig = (action, method='get', params=false )=>{
        let config = {
            "method": method,
            "maxBodyLength": Infinity,
            url: _getUrl(action),
            "headers": { 
                'Authorization': 'Bearer '+api_token, 
            }
        };
        if(params) config.data = params;
        
        return config;
    }

    const callApi = (action, method='get', params=false)=>{
        let config = _getConfig(action, method, params);
        return axios.request(config).then(res =>{
            let data = res.data;
            if(data['success']==false) return null;
            return data['data'];            
        }).catch((error) => {
            if(error.response?.status === 404) {
                console.error(`Could not find resourse`);
                return undefined;
            }
            throw error;
        });
    }

    return { callApi }
}
