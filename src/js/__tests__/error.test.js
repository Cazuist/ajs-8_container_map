import ErrorRepository from '../Error';

describe('Начинаем тестирование класса Error', () => {
  describe('Тестируем метод translate:', () => {
    test.each([
      [400, 'Bad Request'],
      [404, 'Not Found'],
      [408, 'Request Timeout'],
      [500, 'Internal Server Error'],
      [502, 'Bad Gateway'],
      [521, 'Web Server Is Down'],
      [1, 'Unknown error'],
      ['str', 'Unknown error'],
    ])(
      ('Для кода %s Должен вернуть строку %s'),
      (code, expected) => {
        expect(ErrorRepository.translate(code)).toBe(expected);
      },
    );
  });
});
