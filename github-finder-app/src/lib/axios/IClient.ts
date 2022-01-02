import { AxiosResponse, AxiosPromise, AxiosRequestConfig } from "axios";

export default interface IClient {
  post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): AxiosPromise<R>;
  put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): AxiosPromise<R>;
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<R>;
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<R>;
}
