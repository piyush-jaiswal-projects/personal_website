class ApiError {
  statusCode: number;
  error: string;

  constructor(statusCode: number, error: string) {
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default ApiError;
