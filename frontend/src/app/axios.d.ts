import { AxiosRequestConfig, AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosStatic {
    mockResolvedValue<T = any, R = AxiosResponse<T, any>>(
      value: R
    ): void;
  }
}
