// This is just an example,
// so you can safely delete all default props below

export default {
  global: {
    dialog: {
      cancel: "Отмена",
      yes: "Да",
      ok: "Да"
    },
    btn: {
      save: "Сохранить",
      cancel: "Отмена"
    },
    validation: {
      emailSig: "Неправильная сигнатура email",
    },
    errorNotify: "Ошибка",
    submitting: "Отправляю данные..."
  },
  LoginRegisterMenu: {
    enter: "Войти",
    register: "Зарегистрироваться"
  },
  App: {
    loading: "Загрузка...",
    canNotConnectApi: "Невозможно соединиться с API."
  },
  Captcha: {
    newMessageBtn: "Выдать новое изображение",
    waitMessage: "Что бы сгенерировать новый токен, нужно немного подождать, попробуйте через некоторое время",
    enterToken: "Введите текст с картинки",
    required: "@:captcha.enterToken",
  },
  UserMenu: {
    profile: "Профиль",
    yourAccount: "Личный кабинет",
    adminPanel: "Админка",
    exit: "Выйти",
    logoutNotify: "Вы вышли",
  },
  Login: {
    title: "Войти",
    nameOrEmail: "Имя или email",
    password: "Пароль",
    entering: "Заходим...",
    enterBtn: "Войти",
    forgotPassword: "Забыли пароль?",
    notMyComputer: "Чужой компьютер",
    enterSuccess: "Вы зашли",
    validation: {
      nameOrEmail: {
        required: "Введите имя или email"
      },
      password: {
        required: "Введите пароль"
      },
    }
  },
  Register: {
    title: "Зарегистрироваться",
    userName: "Имя пользователя",
    email: "Email",
    password: "Пароль",
    password2: "Подтвердите пароль",
    registerBtn: "@:Register.title",
    registering: "Регистрируемся...",
    emailSent: "Сообщение с ссылкой для регистрации отправлено на email",
    validation: {
      userName: {
        required: "Введите имя пользователя",
        minLength: "Имя пользователя должно быть не менее чем из 3 букв",
        maxLength: `Имя пользователя должно состоять не более чем из ${config.DbColumnSizes.Users_UserName} символов`
      },
      email: {
        required: "Введите email",
        emailSig: "@:global.validation.emailSig",
        maxLength: `Email должен состоять не более чем из ${config.DbColumnSizes.Users_Email} символов`
      },
      password: {
        required: "Введите пароль",
        minLength: `Пароль должен состоять не менее чем из ${config.PasswordValidation.MinLength} символов`,
        minDifferentChars: `В пароле должно быть не менее ${config.PasswordValidation.MinDifferentChars} разных символов`
      },
      password2: {
        equals: "Пароли должны совпадать"
      }
    }
  },
  RegisterEmailResult: {
    title: "Подтверждение почты",
    success: "Ваша почта успешно подтверждена.",
    error: "Подтверждение почты. Что-то пошло не так.",
    enter: "Войти"
  },
  ChangeEmailResult: {
    title: "@:RegisterEmailResult.title",
    success: "@:RegisterEmailResult.success",
    error: "@:RegisterEmailResult.error",
  },
  ResetPassword: {
    title: "Сброс пароля",
    email: "Введите email",
    resetPasswordBtn: "Сбросить пароль",
    success: "Сообщение с ссылкой для сброса пароля отправлено на email",
    validation: {
      email: {
        required: "@:ResetPassword.enterEmail",
        emailSig: "@:global.validation.emailSig",
      },
      captchaText: {
        required: "@:Captcha.enterToken"
      }
    }
  },
  ResetPasswordFailed: {
    title: "Сброс пароля",
    message: "Что-то пошло не так. Возможно истекло время сброса."
  },
  ResetPasswordSetNew: {
    title: "Установить пароль",
    successMessage: 'Пароль изменён.',
    enter: 'Войти',
    saveBtn: "Изменить пароль",
    password: "Новый пароль",
    password2: "Подтвердите пароль",
    validation: {
      password: {
        required: "@:Register.validation.password.required",
        minLength: "@:Register.validation.password.minLength",
        minDifferentChars: "@:Register.validation.password.minDifferentChars",
      },
      password2: {
        equals: "@:Register.validation.password2.equals",
      }
    }
  },
  AddEditComment: {
    required: "Введите сообщение",
    htmlTextSizeOrHasImage: "Минимальная длинна текста - 5",
    spamProtectionMessage: "Нельзя так часто отправлять сообщения. Подождите немного."
  },
  AddEditMaterial: {
    title: "Заголовок",
    description: "Короткое описание",
    tags: "Метки",
    validation: {
      title: {
        required: "Введите заголовок",
        minLength: "Минимальная длинна заголовка - 3",
        maxLength: `Максимальная длинна заголовка - ${config.DbColumnSizes.Materials_Title}`,
      },
      text: {
        required: "Введите текст",
        htmlTextSizeOrHasImage: "Минимальная длинна текста - 5",
      },
      description: {
        maxLength: "Максимально допустимая длинна " + config.DbColumnSizes.Materials_Description
      },
      category: {
        required: "Выберите раздел"
      }
    }
  },
  MyEditor: {
    uploadImages: "Добавить изображения"
  },
  Material: {
    category: "раздел:",
    edit: "Редактировать",
    tags: "Метки:"
  },
  ReadComment: {
    edit: "редактировать",
    deleteDialogComment: "Удалить сообщение?"
  },
  Post: {
    commentsCount: "сообщений",
    readMore: "Читать дальше"
  },
  Blog: {
    newPostBtn: "Новый пост"
  },
  SettingsMenu: {
    goToProfile: "Просмотреть профиль",
    changeEmail: "Изменить email",
    changePassword: "Изменить пароль",
    changeLink: "Изменить link",
    changeName: "Изменить имя",
    changeYourInformation: "Изменить информацию о вас",
    changePhoto: "Изменить фотографию",
    banedUsersList: "Забаненые пользователи"
  },
  SettingsPage: {
    title: "Личный кабинет"
  },
  SettingsPanel: {
    title: "@:SettingsPage.title"
  },
  ChangeName: {
    title: "Изменить имя пользователя",
    successNotify: "Имя изменено",
    nameValidationInfo: "Имя может состоять из букв, цифр, пробела и символа '-', длинны не менее 3.",
    saveBtn: "@:global.btn.save",
    name: "Имя",
    password: "Пароль",
    validation: {
      password: {
        required: "Введите пароль"
      },
      name: {
        required: "Введите имя",
        minLength: "Длинна имени должна быть не меньше 3",
        allowedChars: "Возможно использование только допустимых символов",
        nameInDb: "Это имя уже занято"
      }
    }
  },
  ChangeLink: {
    title: "Редактировать Link пользователя",
    linkEditedMessage: "Link отредактирован",
    link: "Link",
    linkValidationInfo: "Link должен состоять не менее чем из 3 символов <span class='text-brown-9'>'a-z', 'A-Z', '-', '0-9'</span>. И содержать хотя бы одну букву.",
    saveBtn: "@:global.btn.save",
    validation: {
      minLength: "Длинна link должна быть не менее 3",
      allowedChars: "Допустимы только буквы английского алфавита и цифры",
      numberNotAllow: "Необходимо что бы в link входили буквы",
      linkInDb: "Этот link уже занят"
    }
  },
  ChangeEmail: {
    title: "Редактировать email пользователя",
    successNotify: "Сообщение с ссылкой для подтверждения email отправлено по почте",
    password: "Ваш пароль",
    newEmail: "Новый email",
    saveBtn: "@:global.btn.save",
    validation: {
      password: {
        required: "Необходимо ввести пароль"
      },
      email: {
        required: "Необходимо ввести email",
        emailSig: "Введите валидный email"
      }
    }
  },
  ChangePassword: {
    title: "Изменить пароль",
    successNotify: 'Пароль изменён.',
    changeBtn: "Изменить пароль",
    passwordOld: "Старый пароль",
    password: "Новый пароль",
    password2: "Подтвердите новый пароль",
    validation: {
      passwordOld: {
        required: "Необходимо ввести старый пароль"
      },
      password: {
        required: "@:Register.validation.password.required",
        minLength: "@:Register.validation.password.minLength",
        minDifferentChars: "@:Register.validation.password.minDifferentChars",
      },
      password2: {
        equals: "@:Register.validation.password2.equals",
      }
    }
  },
  ForumPanel: {
    newTopics: "Новые сообщения",
    sections: "Разделы"
  },
  Topic: {
    lastFrom: "Последнее от"
  },
  Activity: {
    material: "Текст",
    comment: "Комментарий"
  },
  Thread: {
    newTopicBtn: "Новая тема",
    topic: "Тема",
    last: "Последнее"
  },
  NewTopics: {
    titleStart: "Новые темы",
    newTopicBtn: "@:Thread.newTopicBtn",
    topic: "@:Thread.topic",
    last: "@:Thread.last"
  },
  Profile: {
    sendPrivateMessageBtn: "Написать пользователю",
    banBtn: "Забанить",
    unBanBtn: "Разбанить",
    banNotify: "Пользователь {0} теперь не может вам писать",
    unBanNotify: "Пользователь {0} теперь может вам писать"
  },
  MyBanList: {
    title: "Забаненые пользователи"
  },
  LoadPhoto: {
    title: "Изменить фотографию пользователя",
    resetBtn: "Сбросить фотографию",
    uploadNewPhotoBtn: "Выбрать фотографию",
    avatarDeletedSuccessNotify: "Аватар успешно удалён",
    avatarChangedSuccessNotify: "Аватар успешно обновлён"
  },
  EditInformation: {
    title: "Редактировать информацию о себе",
    label: "Информация о вас на странице вашего профиля.",
    editedSuccessNotify: "Информация успешно сохранена",
    save: "@:global.btn.save"
  },
  ActivitiesPage: {
    defaultTitle: "Новое на сайте"
  },
  admin: {
    AdminPanel: {
      title: "Админка"
    },
    AdminPage: {
      title: "@:admin.AdminPanel.title"
    },
    AdminMenu: {
      categoriesAdmin: "Категории",
      rolesPermissions: "Настройка прав",
      rolesUsers: "Группы пользователей"
    },
    EditCategory: {
      title: "Редактировать категорию",
      deleteBtn: "Удалить категорию",
      saveBtn: "@:global.btn.save",
      cancelBtn: "@:global.btn.cancel",
      deletedNotify: "Категория успешно удалена.",
      deleteConfirm: "Вы уверены, что хотите удалить категорию?\nВсе данные категории так же будут удалены.",
      deleteDialogBtnOk: "Удалить",
      deleteDialogBtnCancel: "Отмена",
      successNotify: "Категория обновлена.\nНе забудьте перегрузить сайт для обновления."
    },
    AddCategory: {
      title: "Добавить категорию",
      createBtn: "Создать",
      cancelBtn: "@:global.btn.cancel",
      successNotify: "Категория добавлена.\nНе забудьте перегрузить сайт для обновления."
    },
    CategoryForm: {
      name: "Имя категории (eng)",
      title: "Заголовок",
      shortDescription: "Короткое описание",
      header: "Шапка категории",
      selectParent: "Выберите родительскую категорию",
      sectionType: "Тип категории",
      deleteConfirm: "Вы уверены что хотите удалить категорию?\nВсё содержание категории также будут удалено.",
      parent: "Родитель: ",
      hideCb: "Спрятать",
      appendUrlTokenCb: "Добавлять в URL",
      appendUrlTokenInfo: "(использовать только если вы понимаете что это)",
      isMaterialsContainerCb: "Содержит материалы",
      noTypeLabel: "Без типа",
      validation: {
        name: {
          required: "Введите имя (eng) категории",
          minLength: "Имя (eng) должно быть не менее чем из 2 букв",
          allowedChars: "Имя (eng) должно состоять из символов `a-z`, `A-Z`, `0-9`, `-`"
        },
        title: {
          required: "Введите заголовок категории",
          minLength: "Заголовок должен состоять не менее чем из 3 букв"
        }
      }
    },
    CategoriesAdmin: {
      title: "Админка категорий",
      addCategoryBtn: "Добавить категорию"
    },
    CategoryItem: {
      rootCategory: "Корневая категория"
    },
    RolesPermissions: {
      title: "Загрузка Json прав для групп",
      backupWarning: "Перед загрузкой необходимо сделать backup базы.",
      saveToServerBtn: "Сохранить на сервер",
      getFromServer: "Загрузить с сервера",
      getFromServerSuccessNotify: "Данные загружены с сервера",
      saveToServerSuccessNotify: "Настройки групп успешно обновлены",
      textAreaLabel: "Json файл конфигурации прав групп"
    }

  },
}
