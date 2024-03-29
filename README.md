# Чек-лист

- [x] ### Приложение работает в соответствии с логикой, представленной в макете в Figma.

  - Стартовый экран — **экран «Вход»**.\
    Пользователю предлагается ввести почту и пароль, если он уже зарегистрирован, и нажать **«Войти»**.\
    Если пользователь еще не зарегистрирован, ему необходимо нажать **«Регистрируйтесь здесь»**.\
    При вводе неверных данных вылезает сообщение об ошибке, также красной обводкой отмечаются поля ввода.\
    Кнопка «Войти» становится не активной и приобретает серый цвет.

  - На экране **"Регистрация"** пользователь заполняет поля с именем, почтой и паролем и нажимает кнопку **"Зарегистрироваться"**.\
    Если пользователь понял, что у него уже есть аккаунт, он может нажать **«Войдите здесь»** и вернуться на экран **«Вход»**.\
    При вводе неверных данных вылезает сообщение об ошибке, также красной обводкой отмечаются поля ввода.\
    Кнопка **"Зарегистрироваться"** становится не активной и приобретает серый цвет.

  - После успешной авторизации/регистрации пользователь попадает на **главный экран канбан-доски**.\
    Канбан состоит из карточек с задачами, которые расположены под теми колонками, в каком статусе выполнения они находятся.\
    Карточка задачи содержит в себе **категорию, название задачи и срок ее исполнения**.\
    При нажатии на названиеи раскрывается **побробный просмотр задачи**.\
     Нажатие на три точки в правом верхнем углу карточки отображает **окно редактирования задачи**.\

  - При нажании на имя пользователя в верхней панели раскрывается **«Окошко пользователя»**,\
    где где отображаются его **имя** и **почта**, а также есть возможность **смены темы**  и **выхода** из аккаунта.\
    При нажатии на **«Выйти»** пользователю раскрывается окно с подтверждением выхода из аккаунта.\
    При нажатии **«Да, выйти»** происходит выход.\
    При нажатии **«Нет, остаться»** на экране остается канбан, а окно «Выйти из аккаунта» закрывается.

  - При нажатии на кнопку **«Создать новую задачу»** пользователю раскрывается окно с **созданием задачи**.
    Окно создание задачи содержит в себе поля для заполнения: **«Название задачи»**, **«Описание задачи»**.\
    Также есть возможность **выбора категории** и **постановки срока исполнения**.\
    После заполнения информации необходимо нажать на кнопку **«Создать задачу»** — тогда карточка с задачей падает на доску канбана.

  - В окне**Просмотр задачи** можно увидеть описание задачи, срок исполнения и статус.\
    Данные поля неактивны для клика и изменения , пока пользователь не нажмет **«Редактировать задачу»**.\
    Если пользователь нажимает **«Удалить задачу»**, задача исчезает с канбан-доски.\
    При нажатии на кнопку **«Закрыть»** окно с просмотром задачи закрывается, и пользователь снова видит канбан.

  - Окно **Редактирования задачи** позволяет взаимодействовать с полями **«Статус»**, **«Описание задачи»** и **«Даты»**.\
    Чтобы применить все изменения, необходимо нажать на кнопку **«Сохранить»**.\
    Чтобы отменить изменения, необходимо нажать на кнопку **«Отменить»**.\
    Чтобы закрыть окно, необходимо нажать на кнопку **«Закрыть»**.

- [x] ### Внешний вид приложения полностью соответсвует макету.
  - Пользователю доступны светлая и темная темы, изменение цветовой темы происходит в **окошке пользователя**.
  - Мобильная версия приложения соответствует макету.
  - Стилизация выполнена с помощью Styled Components.\
  - Стилизованные компоненты расположены в отдельных файлах.

- [x] ### Корректно реализована логика работа с api, работает индикатор загрузки, ошибки обрабатываются и выводятся пользователю.
  - Приложение берет данные из api.
  - Если пользователь не авторизован, доска с задачами ему недоступна.
  - Отображается индикатор загрузки (лоадер) во время получения данных из API.
  - В случае ошибки при загрузке данных из API отображается соответствующее сообщение об ошибке.
  - Реализована функциональность авторизации и регистрации пользователя, в соответствии с документацией API.
  - Реализована логика отправки данных о новой задаче в API.
  - Реализована логика удаления задачи из API.
  - Обработаны ошибки API.

- [x] ### Приложение работает без ошибок в консоли.
