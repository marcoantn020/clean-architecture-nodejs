import { ServerError } from "./server-error"


export const badRequest = (error: Error): any => ({
    statusCode: 400,
    body: error.message
  })
  
  export const serverError = (error: Error): any => ({
    statusCode: 500,
    body: new ServerError(error.stack)
  })