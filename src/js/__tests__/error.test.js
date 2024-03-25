import ErrorRepository from "../error";

const repository = new ErrorRepository();
repository.errors.set(400, "неправильный, некорректный запрос");
repository.errors.set(401, "не авторизован");
repository.errors.set(408, "истекло время ожидания");

test("известная ошибка", () => {
  expect(repository.translate(400)).toBe("неправильный, некорректный запрос");
});

test("неизвестная ошибка", () => {
  expect(repository.translate(501)).toBe("Unknown error");
});
