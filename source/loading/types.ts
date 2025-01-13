interface Dictionary<T> {
  [Key: string]: T;
}

export type GetUrlFn = (url: string, headers?: Dictionary<string>)=> string | Promise<string>;
export type XhrRequest = (input: RequestInfo, init?: RequestInit)=> Promise<Response>;
