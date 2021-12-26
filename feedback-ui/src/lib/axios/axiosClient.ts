import axios, { AxiosRequestConfig } from "axios";
import IClient from "./IClient";

const axiosBase = axios.create({
  headers: { "Content-Type": "application/json" },
  // FIXME: localhostのところを別ファイルに切り出す
  baseURL: "http://localhost:8080/",
});

class AxiosClient implements IClient {
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.post(url, data, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.put(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.get(url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.delete(url, config);
  }
}

export const axiosClient = new AxiosClient();
