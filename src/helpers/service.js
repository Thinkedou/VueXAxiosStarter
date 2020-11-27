import axios from "axios";
// const ApiEndPoint = now set in vue.config.js;

export default class Service {

	/**
	 * Creates an instance of Service.
	 *
	 * @param {any} namespace	namespace of service (without trailing '/')
	 *
	 * @memberOf Service
	 */
	constructor(namespace) {
		this.namespace = namespace;
		this.axios = axios.create({
			baseURL: process.env.VUE_APP_API_ENDPOINT+namespace+'/',
			responseType: "json"
		});
	}

	_getJwt(){
		return localStorage.getItem('jwt');
	}
	_getCustomHeader(){
		return {
			headers: {'Authorization': `Bearer ${this._getJwt()}`}
		}
	}

    getNamespace(){
        return this.namespace;
    }

	/**
	 * Call a service action via REST API
	 *
	 * @param {String} path	BaseURL+path
	 * @param {String} method	GET / POST / PUT / DELETE
	 * @param {String} params	parameters to request ( Post, Put )
	 * @returns	{Promise}
	 *
	 * @memberOf Service
	 */
    async _req(path, method , params) {

		return new Promise((resolve, reject) => {

			this.axios.request(path, {
				method,
				data: params,
				headers: {'Authorization': `Bearer ${this._getJwt()}`}
			}).then((response) => {
				if (response.data || response.status == 200){
					resolve(response);
				}else{
					reject(response);
				}

			}).catch((error) => {
				if (error.response && error.response.data && error.response.data.error) {
					console.error("REST request error!", error.response.data.error);
					reject(error.response.data.error);
				} else
					reject(error);
			});
		});
	}
    /**
	 * Perform a GET request via REST API
	 *
	 * @param {string} path	RESOURCEID
	 * @param {string} query ?embed=documentsRefs
	 * @param {any} params	inutilisé en get ?

	 * @returns	{Promise}
	 *
	 * @memberOf Service
	 */
    async get(path, query, params ) {
		let fullPathWithQuery=path;

		if(typeof(query) !=='undefined'){
			fullPathWithQuery+= query;
		}
        return new Promise((resolve, reject) => {
        this._req(fullPathWithQuery,'get',params).then((res)=>{
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        })
	}
/**
 * Perform a POST request via REST API
 *
 * @param {string} path	RESOURCEID
 * @param {string} query inutilisé en POST ?!
 * @param {any} data
 * @param {Boolean} raw	return raw axios response and not a data abstraction
 * @returns	{Promise}
 *
 * @memberOf Service
 */

    async post(path, query, data ) {
		let fullPathWithQuery=path;
		if(typeof(query) !=='undefined'){
			fullPathWithQuery += query;
		}
        return new Promise((resolve, reject) => {
            this._req(fullPathWithQuery,'post',data).then((res)=>{
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        })
	}
	/**
	 * Perform a PUT request via REST API
	 *
	 * @param {string} path	RESOURCEID
	 * @param {any} params	data body inutilisé en get ?
	 * @returns	{Promise}
	 *
	 * @memberOf Service
	 */

    async put(path, params) {
        return new Promise((resolve, reject) => {
            this._req(path,'put',params).then((res)=>{
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        })
	}

	/**
	 * Perform a PATCH request via REST API
	 *
	 * @param {string} path	RESOURCEID
	 * @param {any} params	data body
	 * @returns	{Promise}
	 *
	 * @memberOf Service
	 */

    async patch( path, params ) {
        return new Promise((resolve, reject) => {
            this._req(path,'patch',params).then((res)=>{
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        })
	}
	/**
	 * Perform a HEAD request via REST API
	 * (Intéressant pour count par ex)
	 * @param {string} path	RESOURCEID
	 * @param {string} query ?embed=documentsRefs
	 * @returns	{Promise}
	 *
	 * @memberOf Service
	 */

    async head(path, query) {
		let fullPathWithQuery=path;
        if(typeof(query) !=='undefined'){
            fullPathWithQuery+=query;
        }
        return new Promise((resolve, reject) => {
            this._req(fullPathWithQuery,'head').then((res)=>{
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        })
	}
	/**
	 * Perform a DELETE request via REST API
	 * (Intéressant pour count par ex)
	 * @param {string} path	RESOURCEID
	 * @param {string} query ?embed=documentsRefs
	 * @returns	{Promise}
	 *
	 * @memberOf Service
	 */

    async delete(path, query) {
		let fullPathWithQuery=path;
		if(typeof(query) !=='undefined'){
			fullPathWithQuery= path + query;
		}
        return new Promise((resolve, reject) => {
            this._req(fullPathWithQuery,'delete').then((res)=>{
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        })
	}

}
