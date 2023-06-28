import axios from "./axios"

const fetcher = 
   {
    get: async (url: string, params = {}) => {
      return axios
        .request({
          url,
          method: "GET",
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function post To create a resource
     * @returns Promise
     */
    post: async (url: string, data: any, params = {}) => {
      return axios
        .request({
          url,
          method: "POST",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function put To update a full data of resource
     * @returns Promise
     */
    put: async (url: string, data: any, params = {}) => {
      return axios
        .request({
          url,
          method: "PUT",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     * @function patch To update partial data of a resource
     * @returns Promise
     */
    patch: async (url: string, data: any, params = {}) => {
      return axios
        .request({
          url,
          method: "PATCH",
          data,
          params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
    /**
     *@function delete To delete the resource
     * @returns Promise
     */
    delete: async (url: string, params = {}) => {
      return axios
        .request({
          url,
          method: "DELETE",
          params: params,
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
    },
  };


export default fetcher;
