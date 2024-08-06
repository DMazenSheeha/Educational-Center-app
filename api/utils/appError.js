class appError extends Error {
  constructor() {
    super();
  }
  create(status, message, code) {
    this.status = status;
    this.message = message;
    this.code = code;
    return this;
  }
}

module.exports = new appError();
