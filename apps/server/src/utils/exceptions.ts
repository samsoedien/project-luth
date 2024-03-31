export default class ErrorResponse extends Error {
  public statusCode

  constructor(message: any, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export class NotFoundException {}
