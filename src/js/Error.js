export default class ErrorRepository {
  static getRepository() {
    return new Map([
      [400, 'Bad Request'],
      [404, 'Not Found'],
      [408, 'Request Timeout'],
      [500, 'Internal Server Error'],
      [502, 'Bad Gateway'],
      [521, 'Web Server Is Down'],
    ]);
  }

  static translate(code) {
    return this.getRepository().get(code) || 'Unknown error';    
  }
}
