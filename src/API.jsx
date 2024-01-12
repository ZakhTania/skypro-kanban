let token;

const TASKS_URL = "https://wedev-api.sky.pro/api/kanban";
const USER_URL = "https://wedev-api.sky.pro/api/user";

export async function getTasks() {
  const userData = JSON.parse(localStorage.getItem("user"));
  token = userData.token;
  const response = await fetch(TASKS_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }

  const data = await response.json();

  return data;
}

export async function getAuth({ login, password }) {
  const response = await fetch(USER_URL + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 201) {
    const data = await response.json();

    return data;
  }

  if (response.status === 400) {
    throw new Error("Неправильный логин или пароль");
  }

  throw new Error("Не удалось загрузить данные, попробуйте позже");
}

export async function getSignUp({ login, name, password }) {
  const response = await fetch(USER_URL, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (response.status === 201) {
    const data = await response.json();

    return data;
  }

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже сущетсвует");
  }

  throw new Error("Не удалось загрузить данные, попробуйте позже");

}
