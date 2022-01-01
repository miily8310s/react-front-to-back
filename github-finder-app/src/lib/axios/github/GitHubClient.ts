import IClient from "@/lib/axios/IClient";
import axios, { AxiosRequestConfig } from "axios";

const GITHUB_URL = process.env.GITHUB_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubBase = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

class GitHubClient implements IClient {
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return githubBase.post(url, data, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return githubBase.put(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return githubBase.get(url, config).then((res) => {
      return res.data;
    });
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return githubBase.delete(url, config);
  }
}

export const githubClient = new GitHubClient();
