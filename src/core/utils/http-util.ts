export interface IHttpResponse {
    statusCode: number
    body: any
  }
  
  export interface IHttpRequest {
    body?: any
  }

export const ok = (data: any): IHttpResponse => ({
    statusCode: 200,
    body: data
  })

export const notFound = (): IHttpResponse => ({
    statusCode: 204,
    body: null
  })

export const created = (data: any): IHttpResponse => ({
    statusCode: 201,
    body: data
  })