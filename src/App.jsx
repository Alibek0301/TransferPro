import { useMemo, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BriefcaseBusiness, Droplets, Baby, Crown, Plane, Building2, UserCheck, Sparkles, Battery, Award, HelpCircle, MapPin, Trash2 } from 'lucide-react'

const whatsappNumber = '77781556699'

const translations = {
  ru: {
    home: 'Главная',
    services: 'Услуги',
    standards: 'Стандарты',
    contacts: 'Контакты',
    booking: 'Заказ',
    price: 'Прайс',
    history: 'История',
    favorites: 'Избранное',
    saved: '✓ Сохранено',
    menu: 'Меню',
    menuMore: 'Ещё',
    close: 'Закрыть',
    whatsapp: 'WhatsApp',
    continueDraft: 'Продолжить заявку',
    startOrder: 'Начать заказ',
    quickScenarios: 'Быстрые сценарии',
    quickChoice: 'Быстрый выбор',
    reviews: 'Отзывы клиентов',
    noOrders: 'Нет заказов',
    noFavorites: 'Нет избранных адресов',
    repeat: 'Повторить',
    hideDetails: 'Скрыть доп. поля',
    showDetails: 'Добавить адрес и комментарий',
    saveAddress: 'Сохранить адрес в избранное',
    submitNow: 'Заказать сейчас',
    fillForm: 'Заполните форму',
    submitWhatsapp: 'Отправить в WhatsApp',
    bookingProgress: 'Прогресс заявки',
    progressStep1: '1. Контакты',
    progressStep2: '2. Услуга и дата',
    progressStep3: '3. Детали (опционально)',
    phoneInvalid: 'Введите корректный номер (+7XXXXXXXXXX)',
    bookingTitle: 'Готовы оценить новый уровень комфорта?',
    bookingSubtitle: 'Закажите разовый трансфер или оформите долгосрочный договор на обслуживание уже сегодня. Наш менеджер на связи 24/7.',
    heroBadge: 'Астана · Premium Transport Service',
    heroTitle: 'Ваш персональный автопарк в столице',
    heroP1: 'Мы не просто предоставляем автомобиль с водителем — мы берем на себя полную ответственность за ваш комфорт на дорогах столицы.',
    heroP2: 'Transfer Pro — это синергия профессионального этикета, пунктуальности и глубокого понимания потребностей VIP-клиентов.',
    heroP3: 'Мы работаем для того, чтобы вы могли сосредоточиться на своих делах, пока мы обеспечиваем идеальный маршрут.',
    standardsTitleDesktop: 'Стандарты',
    contactsHint: 'Позвоните или напишите в WhatsApp — мы на связи 24/7',
    nameLabel: 'Ваше имя *',
    phoneLabel: 'Номер телефона *',
    serviceLabel: 'Выберите услугу *',
    dateLabel: 'Дата поездки *',
    addressLabel: 'Адрес подачи',
    commentLabel: 'Дополнительные пожелания',
    commentDesktopLabel: 'Комментарий',
    namePlaceholder: 'Например: Дархан',
    phonePlaceholder: '+7 (___) ___-__-__',
    addressPlaceholder: 'Например: Астана, Кабанбай батыра 53',
    commentPlaceholder: 'Поделитесь своими пожеланиями...',
    favoriteAddressPrefix: 'Адрес',
    submitSuccess: 'Заявка открыта в WhatsApp. Мы также сохранили её в истории.',
    removeFavoriteAria: 'Удалить адрес',
    waMessageTitle: 'Заявка TransferPro:',
    waName: 'Имя',
    waPhone: 'Телефон',
    waService: 'Услуга',
    waDate: 'Дата',
    waAddress: 'Адрес',
    role: 'Роль',
    roleClient: 'Клиент',
    roleAdmin: 'Администратор',
    roleDriver: 'Водитель',
    adminPanel: 'Панель администратора',
    adminSubtitle: 'Контроль заявок и управление статусами',
    driverPanel: 'Кабинет водителя',
    driverSubtitle: 'Просмотр заказов и отметка этапов поездки',
    orderStatus: 'Статус',
    noOrdersForRole: 'Заказов пока нет',
    orderCreated: 'Создан',
    statusNew: 'Новый',
    statusConfirmed: 'Подтверждён',
    statusOnWay: 'В пути',
    statusCompleted: 'Завершён',
    statusCanceled: 'Отменён',
    setStatus: 'Установить статус',
    ordersTotal: 'Всего заказов',
    ordersActive: 'Активные',
    ordersDone: 'Завершённые',
    markConfirmed: 'Подтвердить',
    markOnWay: 'Отметить: в пути',
    markCompleted: 'Отметить: завершён',
    staffLogin: 'Вход для персонала',
    loginLabel: 'Логин',
    passwordLabel: 'Пароль',
    signIn: 'Войти',
    signOut: 'Выйти',
    invalidCredentials: 'Неверный логин или пароль',
    addDriver: 'Добавить водителя',
    driverLogin: 'Логин водителя',
    driverPassword: 'Пароль водителя',
    driversList: 'Список водителей',
    noDrivers: 'Водители пока не добавлены',
    transferSchedule: 'График трансферов',
    transferScheduleSubtitle: 'Назначение водителя и машины с проверкой конфликтов',
    createTransfer: 'Добавить трансфер',
    clientName: 'Клиент',
    routeFrom: 'Откуда',
    routeTo: 'Куда',
    startTime: 'Начало',
    endTime: 'Окончание',
    assignedDriver: 'Водитель',
    vehicle: 'Машина',
    conflictDetected: 'Конфликт: водитель или машина уже заняты в это время',
    invalidTimeRange: 'Время окончания должно быть позже начала',
    transferSaved: 'Трансфер добавлен в график',
    noTransfers: 'Нет запланированных трансферов',
    myTransfers: 'Мои трансферы',
    noTransfersForRole: 'Нет назначенных трансферов',
    filters: 'Фильтры',
    filterDate: 'Дата',
    filterDriver: 'Водитель',
    filterVehicle: 'Машина',
    searchTransfers: 'Поиск по клиенту/маршруту',
    clearFilters: 'Сбросить фильтры',
    bufferLabel: 'Буфер (мин) к проверке конфликтов',
    bufferHelper: 'Добавляет запас ко времени начала/конца для водителя и машины',
    exportJson: 'Экспорт JSON',
    importJson: 'Импорт JSON',
    printSchedule: 'Печать / PDF',
    importSuccess: 'Импорт выполнен',
    importError: 'Ошибка импорта: неверный файл',
  },
  kk: {
    home: 'Басты бет',
    services: 'Қызметтер',
    standards: 'Стандарттар',
    contacts: 'Байланыс',
    booking: 'Тапсырыс',
    price: 'Баға',
    history: 'Тарих',
    favorites: 'Таңдаулылар',
    saved: '✓ Сақталды',
    menu: 'Мәзір',
    menuMore: 'Қосымша',
    close: 'Жабу',
    whatsapp: 'WhatsApp',
    continueDraft: 'Өтінімді жалғастыру',
    startOrder: 'Тапсырысты бастау',
    quickScenarios: 'Жылдам сценарийлер',
    quickChoice: 'Жылдам таңдау',
    reviews: 'Клиент пікірлері',
    noOrders: 'Тапсырыстар жоқ',
    noFavorites: 'Таңдаулы мекенжайлар жоқ',
    repeat: 'Қайта тапсыру',
    hideDetails: 'Қосымша өрістерді жасыру',
    showDetails: 'Мекенжай мен пікір қосу',
    saveAddress: 'Мекенжайды таңдаулыға сақтау',
    submitNow: 'Қазір тапсырыс беру',
    fillForm: 'Форманы толтырыңыз',
    submitWhatsapp: 'WhatsApp-қа жіберу',
    bookingProgress: 'Өтінім прогресі',
    progressStep1: '1. Байланыс',
    progressStep2: '2. Қызмет және күн',
    progressStep3: '3. Детальдар (міндетті емес)',
    phoneInvalid: 'Дұрыс нөмір енгізіңіз (+7XXXXXXXXXX)',
    bookingTitle: 'Жаңа жайлылық деңгейін көргіңіз келе ме?',
    bookingSubtitle: 'Бір реттік трансферге тапсырыс беріңіз немесе ұзақ мерзімді қызмет көрсету келісімін жасаңыз. Менеджер 24/7 байланыста.',
    heroBadge: 'Астана · Premium Transport Service',
    heroTitle: 'Елордадағы жеке автопаркіңіз',
    heroP1: 'Біз жай ғана жүргізушісі бар көлік бермейміз — елорда жолдарындағы жайлылығыңыз үшін толық жауапкершілік аламыз.',
    heroP2: 'Transfer Pro — кәсіби этикет, ұқыптылық және VIP клиент қажеттіліктерін терең түсінудің үйлесімі.',
    heroP3: 'Сіз өз ісіңізге назар аудара аласыз, ал біз мінсіз маршрутты қамтамасыз етеміз.',
    standardsTitleDesktop: 'Стандарттар',
    contactsHint: 'Қоңырау шалыңыз немесе WhatsApp-қа жазыңыз — біз 24/7 байланыстамыз',
    nameLabel: 'Атыңыз *',
    phoneLabel: 'Телефон нөмірі *',
    serviceLabel: 'Қызметті таңдаңыз *',
    dateLabel: 'Сапар күні *',
    addressLabel: 'Жіберу мекенжайы',
    commentLabel: 'Қосымша тілектер',
    commentDesktopLabel: 'Пікір',
    namePlaceholder: 'Мысалы: Дархан',
    phonePlaceholder: '+7 (___) ___-__-__',
    addressPlaceholder: 'Мысалы: Астана, Қабанбай батыр 53',
    commentPlaceholder: 'Тілектеріңізді жазыңыз...',
    favoriteAddressPrefix: 'Мекенжай',
    submitSuccess: 'Өтінім WhatsApp-та ашылды. Сондай-ақ, тарихта сақталды.',
    removeFavoriteAria: 'Мекенжайды жою',
    waMessageTitle: 'TransferPro өтінімі:',
    waName: 'Аты',
    waPhone: 'Телефон',
    waService: 'Қызмет',
    waDate: 'Күні',
    waAddress: 'Мекенжай',
    role: 'Рөл',
    roleClient: 'Клиент',
    roleAdmin: 'Әкімші',
    roleDriver: 'Жүргізуші',
    adminPanel: 'Әкімші панелі',
    adminSubtitle: 'Өтінімдерді бақылау және мәртебені басқару',
    driverPanel: 'Жүргізуші кабинеті',
    driverSubtitle: 'Тапсырыстарды көру және сапар кезеңдерін белгілеу',
    orderStatus: 'Мәртебе',
    noOrdersForRole: 'Тапсырыстар әлі жоқ',
    orderCreated: 'Құрылған',
    statusNew: 'Жаңа',
    statusConfirmed: 'Расталған',
    statusOnWay: 'Жолда',
    statusCompleted: 'Аяқталды',
    statusCanceled: 'Бас тартылды',
    setStatus: 'Мәртебені орнату',
    ordersTotal: 'Барлық тапсырыс',
    ordersActive: 'Белсенді',
    ordersDone: 'Аяқталған',
    markConfirmed: 'Растау',
    markOnWay: 'Белгілеу: жолда',
    markCompleted: 'Белгілеу: аяқталды',
    staffLogin: 'Персоналға кіру',
    loginLabel: 'Логин',
    passwordLabel: 'Құпиясөз',
    signIn: 'Кіру',
    signOut: 'Шығу',
    invalidCredentials: 'Логин немесе құпиясөз қате',
    addDriver: 'Жүргізуші қосу',
    driverLogin: 'Жүргізуші логині',
    driverPassword: 'Жүргізуші құпиясөзі',
    driversList: 'Жүргізушілер тізімі',
    noDrivers: 'Жүргізушілер әлі қосылмаған',
    transferSchedule: 'Трансфер кестесі',
    transferScheduleSubtitle: 'Жүргізуші мен көлікті тағайындау, қақтығысты тексеру',
    createTransfer: 'Трансфер қосу',
    clientName: 'Клиент',
    routeFrom: 'Қайдан',
    routeTo: 'Қайда',
    startTime: 'Басталуы',
    endTime: 'Аяқталуы',
    assignedDriver: 'Жүргізуші',
    vehicle: 'Көлік',
    conflictDetected: 'Қақтығыс: жүргізуші немесе көлік осы уақытта бос емес',
    invalidTimeRange: 'Аяқталу уақыты басталу уақытынан кейін болуы керек',
    transferSaved: 'Трансфер кестеге қосылды',
    noTransfers: 'Жоспарланған трансфер жоқ',
    myTransfers: 'Менің трансферлерім',
    noTransfersForRole: 'Сізге тағайындалған трансфер жоқ',
    filters: 'Сүзгілер',
    filterDate: 'Күні',
    filterDriver: 'Жүргізуші',
    filterVehicle: 'Көлік',
    searchTransfers: 'Клиент/маршрут бойынша іздеу',
    clearFilters: 'Сүзгілерді тазарту',
    bufferLabel: 'Қақтығысқа буфер (мин)',
    bufferHelper: 'Жүргізуші/көлік уақытына запас қосады',
    exportJson: 'JSON экспорт',
    importJson: 'JSON импорт',
    printSchedule: 'Басып шығару / PDF',
    importSuccess: 'Импорт орындалды',
    importError: 'Импорт қатесі: файл дұрыс емес',
  },
  en: {
    home: 'Home',
    services: 'Services',
    standards: 'Standards',
    contacts: 'Contacts',
    booking: 'Booking',
    price: 'Pricing',
    history: 'History',
    favorites: 'Favorites',
    saved: '✓ Saved',
    menu: 'Menu',
    menuMore: 'More',
    close: 'Close',
    whatsapp: 'WhatsApp',
    continueDraft: 'Continue request',
    startOrder: 'Start booking',
    quickScenarios: 'Quick scenarios',
    quickChoice: 'Quick choice',
    reviews: 'Client reviews',
    noOrders: 'No orders yet',
    noFavorites: 'No favorite addresses',
    repeat: 'Repeat',
    hideDetails: 'Hide optional fields',
    showDetails: 'Add address and comment',
    saveAddress: 'Save address to favorites',
    submitNow: 'Book now',
    fillForm: 'Fill required fields',
    submitWhatsapp: 'Send to WhatsApp',
    bookingProgress: 'Booking progress',
    progressStep1: '1. Contacts',
    progressStep2: '2. Service and date',
    progressStep3: '3. Details (optional)',
    phoneInvalid: 'Enter a valid number (+7XXXXXXXXXX)',
    bookingTitle: 'Ready for a new level of comfort?',
    bookingSubtitle: 'Book a one-time transfer or set up a long-term service contract today. Our manager is online 24/7.',
    heroBadge: 'Astana · Premium Transport Service',
    heroTitle: 'Your personal fleet in the capital',
    heroP1: 'We do more than provide a car with a driver — we take full responsibility for your comfort on city roads.',
    heroP2: 'Transfer Pro is a blend of professional etiquette, punctuality, and deep understanding of VIP client needs.',
    heroP3: 'You focus on business, while we deliver the perfect route.',
    standardsTitleDesktop: 'Standard of Excellence',
    contactsHint: 'Call or message us on WhatsApp — available 24/7',
    nameLabel: 'Your name *',
    phoneLabel: 'Phone number *',
    serviceLabel: 'Choose service *',
    dateLabel: 'Trip date *',
    addressLabel: 'Pickup address',
    commentLabel: 'Additional notes',
    commentDesktopLabel: 'Comment',
    namePlaceholder: 'Example: Darkhan',
    phonePlaceholder: '+7 (___) ___-__-__',
    addressPlaceholder: 'Example: Astana, Kabanbay Batyr 53',
    commentPlaceholder: 'Share your preferences...',
    favoriteAddressPrefix: 'Address',
    submitSuccess: 'Request opened in WhatsApp and saved to history.',
    removeFavoriteAria: 'Remove address',
    waMessageTitle: 'TransferPro request:',
    waName: 'Name',
    waPhone: 'Phone',
    waService: 'Service',
    waDate: 'Date',
    waAddress: 'Address',
    role: 'Role',
    roleClient: 'Client',
    roleAdmin: 'Administrator',
    roleDriver: 'Driver',
    adminPanel: 'Administrator panel',
    adminSubtitle: 'Order control and status management',
    driverPanel: 'Driver workspace',
    driverSubtitle: 'View orders and mark trip status',
    orderStatus: 'Status',
    noOrdersForRole: 'No orders yet',
    orderCreated: 'Created',
    statusNew: 'New',
    statusConfirmed: 'Confirmed',
    statusOnWay: 'On the way',
    statusCompleted: 'Completed',
    statusCanceled: 'Canceled',
    setStatus: 'Set status',
    ordersTotal: 'Total orders',
    ordersActive: 'Active',
    ordersDone: 'Completed',
    markConfirmed: 'Confirm',
    markOnWay: 'Mark: on the way',
    markCompleted: 'Mark: completed',
    staffLogin: 'Staff login',
    loginLabel: 'Login',
    passwordLabel: 'Password',
    signIn: 'Sign in',
    signOut: 'Sign out',
    invalidCredentials: 'Invalid login or password',
    addDriver: 'Add driver',
    driverLogin: 'Driver login',
    driverPassword: 'Driver password',
    driversList: 'Drivers list',
    noDrivers: 'No drivers added yet',
    transferSchedule: 'Transfer schedule',
    transferScheduleSubtitle: 'Assign driver and vehicle with conflict checks',
    createTransfer: 'Add transfer',
    clientName: 'Client',
    routeFrom: 'From',
    routeTo: 'To',
    startTime: 'Start time',
    endTime: 'End time',
    assignedDriver: 'Driver',
    vehicle: 'Vehicle',
    conflictDetected: 'Conflict: the driver or vehicle is already booked for this slot',
    invalidTimeRange: 'End time must be after start time',
    transferSaved: 'Transfer saved to schedule',
    noTransfers: 'No scheduled transfers',
    myTransfers: 'My transfers',
    noTransfersForRole: 'No transfers assigned yet',
    filters: 'Filters',
    filterDate: 'Date',
    filterDriver: 'Driver',
    filterVehicle: 'Vehicle',
    searchTransfers: 'Search by client/route',
    clearFilters: 'Clear filters',
    bufferLabel: 'Buffer (min) for conflict check',
    bufferHelper: 'Adds slack to start/end time for driver and vehicle',
    exportJson: 'Export JSON',
    importJson: 'Import JSON',
    printSchedule: 'Print / PDF',
    importSuccess: 'Import completed',
    importError: 'Import error: invalid file',
  },
}

const services = [
  {
    title: 'VIP Meeting — Аэропорт-Город',
    subtitle: 'Airport Transfer',
    price: 'от 15 000 ₸',
    icon: Plane,
    details: [
      'Встреча с именной табличкой у выхода зоны прилета',
      'Полная помощь с багажом и транспортировкой',
      'До 60 мин бесплатного ожидания при задержке рейса',
      'Охлаждённая вода, влажные салфетки',
      'Выбор музыки и температуры в салоне'
    ]
  },
  {
    title: 'Smart Parents — Развозка детей',
    subtitle: 'School Transfer',
    price: 'от 300 000 ₸ / мес',
    icon: Baby,
    details: [
      'Контроль от двери до двери с передачей из рук в руки',
      'Фотоотчёт родителю при посадке и высадке',
      'Современные детские кресла или бустеры',
      'Постоянный проверенный водитель',
      'Замена водителя/машины по предварительному согласованию'
    ]
  },
  {
    title: 'Бизнес-сопровождение',
    subtitle: 'Hourly Rental',
    price: 'от 10 000 ₸ / час',
    icon: BriefcaseBusiness,
    details: [
      'Любой класс автомобиля на выбор (седан, представительский, минивэн)',
      'Безлимитное ожидание — водитель всегда в часе езды',
      'Консьерж-функции: покупки, переговоры, записки',
      'Дресс-код по запросу (строгий костюм или Smart Casual)',
      'Плотный график встреч без суеты'
    ]
  },
  {
    title: 'Корпоративное обслуживание',
    subtitle: 'B2B Fleet',
    price: 'Индивидуальный тариф',
    icon: Building2,
    details: [
      'Фиксированный тариф без учёта пробок и праздничных наценок',
      'Полный электронный документооборот для бухгалтерии',
      'Подменный автомобиль в течение часа',
      'Персональный менеджер с круглосуточной поддержкой',
      'Приоритетное бронирование для компаний и посольств'
    ]
  },
  {
    title: 'Премиальный Межгород',
    subtitle: 'Travel Class',
    price: 'По запросу',
    icon: MapPin,
    details: [
      'Маршруты: Боровое, Щучинск, Караганда, Павлодар',
      'Wi-Fi и климат-контроль на протяжении всего пути',
      'Остановки по желанию на лучших локациях',
      'Техническая проверка перед каждым выездом',
      'Безопасность: соблюдение скоростного режима (110-120 км/ч)'
    ]
  },
  {
    title: 'Другое',
    subtitle: 'Custom Services',
    price: 'Уточняйте',
    icon: HelpCircle,
    details: [
      'Вам нужен нестандартный сервис?',
      'Специальные требования к маршруту?',
      'Особые пожелания к авто или водителю?',
      'Свяжитесь с нами напрямую в WhatsApp',
      'Мы найдём идеальное решение для вас'
    ]
  },
]

const standards = [
  { title: 'Идеальная чистота', icon: Sparkles, desc: 'Автомобиль подается после комплексной мойки и химчистки салона.' },
  { title: 'Дресс-код и этикет', icon: Crown, desc: 'Водители в строгих костюмах, соблюдение протокола тишины и профессиональная вежливость.' },
  { title: 'Напитки на борту', icon: Droplets, desc: 'Свежая питьевая вода в каждой поездке.' },
  { title: 'Энергия для гаджетов', icon: Battery, desc: 'Зарядные устройства для всех типов смартфонов (Type-C, Lightning).' },
  { title: 'Опытные водители', icon: UserCheck, desc: 'Профессиональный и безаварийный многолетний стаж.' },
  { title: 'Полная страховка', icon: Award, desc: 'Страховое покрытие пассажира, водителя и автомобиля.' },
]

const trustPoints = ['Ответ менеджера 3–5 минут', 'Поддержка 24/7', 'Без скрытых доплат']

const quickScenarios = [
  { label: 'Аэропорт', service: 'VIP Meeting — Аэропорт-Город', address: 'Аэропорт Астана' },
  { label: 'Детский маршрут', service: 'Smart Parents — Развозка детей', address: 'Школа / дом' },
  { label: 'Бизнес-день', service: 'Бизнес-сопровождение', address: 'Офис / встречи' },
]

const reviews = [
  {
    author: 'Алия К.',
    text: 'Всегда вовремя, салон чистый, водитель вежливый. Для аэропорта — лучший вариант.',
  },
  {
    author: 'N. Consulting',
    text: 'Используем для корпоративных гостей. Сервис стабильный, отчётность и коммуникация на уровне.',
  },
  {
    author: 'Руслан М.',
    text: 'Быстро подтвердили заказ в WhatsApp и сразу закрыли вопрос с маршрутом.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const ADMIN_LOGIN = 'alibek-u@mail.ru'
const ADMIN_PASSWORD = '123456'

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileTab, setMobileTab] = useState('home')
  const [desktopTab, setDesktopTab] = useState('home')
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'ru')
  const [staffSession, setStaffSession] = useState(() => JSON.parse(localStorage.getItem('staffSession') || 'null'))
  const [driverAccounts, setDriverAccounts] = useState(() => JSON.parse(localStorage.getItem('driverAccounts') || '[]'))
  const [showStaffAuth, setShowStaffAuth] = useState(false)
  const [authLogin, setAuthLogin] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [newDriverLogin, setNewDriverLogin] = useState('')
  const [newDriverPassword, setNewDriverPassword] = useState('')
  const [savedSince, setSavedSince] = useState('')
  const [submitNotice, setSubmitNotice] = useState('')
  const [orderHistory, setOrderHistory] = useState(() => JSON.parse(localStorage.getItem('orderHistory') || '[]'))
  const [transfers, setTransfers] = useState(() => JSON.parse(localStorage.getItem('transfers') || '[]'))
  const [transferDraft, setTransferDraft] = useState(() => getEmptyTransferDraft())
  const [transferConflict, setTransferConflict] = useState('')
  const [transferNotice, setTransferNotice] = useState('')
  const [transferFilters, setTransferFilters] = useState({ date: '', driver: '', vehicle: '', query: '' })
  const [bufferMinutes, setBufferMinutes] = useState(() => Number(localStorage.getItem('transferBuffer') || 15))
  const [importNotice, setImportNotice] = useState('')
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'))
  const [showMobileDetails, setShowMobileDetails] = useState(false)
  const [showDesktopDetails, setShowDesktopDetails] = useState(false)
  
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const t = translations[language]
  const role = staffSession?.role || 'client'
  
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('formData')
    return saved ? JSON.parse(saved) : {
      name: '',
      phone: '+7',
      service: services[0]?.title || '',
      date: '',
      comment: '',
      address: '',
    }
  })

  const sectionMotionProps = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: 'hidden', animate: 'show', transition: { duration: 0.6 } }

  const cardMotionProps = (delay) => (
    prefersReducedMotion
      ? {}
      : {
        variants: fadeUp,
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.45, delay },
      }
  )

  // Сохранение языка
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('staffSession', JSON.stringify(staffSession))
  }, [staffSession])

  useEffect(() => {
    localStorage.setItem('driverAccounts', JSON.stringify(driverAccounts))
  }, [driverAccounts])

  useEffect(() => {
    localStorage.setItem('transfers', JSON.stringify(transfers))
  }, [transfers])

  useEffect(() => {
    localStorage.setItem('transferBuffer', String(bufferMinutes || 0))
  }, [bufferMinutes])

  useEffect(() => {
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  // Автосохранение формы
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
    setSavedSince('just-now')
    const timer = setTimeout(() => setSavedSince(''), 2000)
    return () => clearTimeout(timer)
  }, [formData])

  useEffect(() => {
    if (!services.some((service) => service.title === formData.service)) {
      setFormData((prev) => ({ ...prev, service: services[0]?.title || '' }))
    }
  }, [formData.service])

  function getTodayDate() {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  function getEmptyTransferDraft() {
    return {
      clientName: '',
      service: services[0]?.title || '',
      routeFrom: '',
      routeTo: '',
      date: getTodayDate(),
      startTime: '09:00',
      endTime: '10:00',
      driver: driverAccounts[0]?.login || '',
      vehicle: '',
      status: 'confirmed',
    }
  }

  const isValidPhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length === 11 && digitsOnly.startsWith('7')
  }

  const timeToMinutes = (time) => {
    if (!time || !time.includes(':')) return null
    const [hours, minutes] = time.split(':').map(Number)
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return null
    return hours * 60 + minutes
  }

  const findTransferConflict = (candidate, ignoreId) => {
    const start = timeToMinutes(candidate.startTime)
    const end = timeToMinutes(candidate.endTime)
    if (start === null || end === null) return ''
    if (end <= start) return t.invalidTimeRange

    const buffer = Math.max(0, Number(bufferMinutes) || 0)
    const startBuffered = Math.max(0, start - buffer)
    const endBuffered = end + buffer

    const conflicting = transfers.find((transfer) => {
      if (transfer.id === ignoreId) return false
      if (transfer.date !== candidate.date) return false
      const otherStartRaw = timeToMinutes(transfer.startTime)
      const otherEndRaw = timeToMinutes(transfer.endTime)
      if (otherStartRaw === null || otherEndRaw === null) return false
      const otherStart = Math.max(0, otherStartRaw - buffer)
      const otherEnd = otherEndRaw + buffer
      const overlaps = startBuffered < otherEnd && otherStart < endBuffered
      const sameDriver = candidate.driver && transfer.driver && transfer.driver.toLowerCase() === candidate.driver.toLowerCase()
      const sameVehicle = candidate.vehicle && transfer.vehicle && transfer.vehicle.toLowerCase().trim() === candidate.vehicle.toLowerCase().trim()
      return overlaps && (sameDriver || sameVehicle)
    })

    if (!conflicting) return ''
    return `${t.conflictDetected} · ${conflicting.date} ${conflicting.startTime}-${conflicting.endTime}`
  }

  const canSubmit = formData.name.trim() && isValidPhone(formData.phone) && formData.date
  const primaryStepComplete = formData.name.trim() && isValidPhone(formData.phone)
  const secondStepComplete = formData.service && formData.date
  const thirdStepComplete = true
  const completedSteps = [primaryStepComplete, secondStepComplete, thirdStepComplete].filter(Boolean).length
  const progressPercent = Math.round((completedSteps / 3) * 100)
  const hasDraft = formData.name.trim() || formData.date || formData.address.trim() || formData.comment.trim()

  const addToHistory = () => {
    const newOrder = { ...formData, id: Date.now(), status: 'new', createdAt: new Date().toLocaleString(), updatedAt: new Date().toLocaleString() }
    setOrderHistory([newOrder, ...orderHistory.slice(0, 9)])
    localStorage.setItem('orderHistory', JSON.stringify([newOrder, ...orderHistory.slice(0, 9)]))
  }

  const updateOrderStatus = (orderId, nextStatus) => {
    const updatedOrders = orderHistory.map((order) => (
      order.id === orderId
        ? { ...order, status: nextStatus, updatedAt: new Date().toLocaleString() }
        : order
    ))
    setOrderHistory(updatedOrders)
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders))
  }

  const statusLabels = {
    new: t.statusNew,
    confirmed: t.statusConfirmed,
    on_way: t.statusOnWay,
    completed: t.statusCompleted,
    canceled: t.statusCanceled,
  }

  const getStatusLabel = (status) => statusLabels[status] || t.statusNew

  const activeOrdersCount = orderHistory.filter((order) => !['completed', 'canceled'].includes(order.status || 'new')).length
  const completedOrdersCount = orderHistory.filter((order) => (order.status || 'new') === 'completed').length
  const isTransferReady = Boolean(
    transferDraft.clientName.trim()
    && transferDraft.routeFrom.trim()
    && transferDraft.routeTo.trim()
    && transferDraft.driver.trim()
    && transferDraft.vehicle.trim()
    && transferDraft.date
    && transferDraft.startTime
    && transferDraft.endTime
    && !transferConflict
  )
  const visibleTransfers = role === 'admin'
    ? transfers
    : transfers.filter((transfer) => transfer.driver && staffSession?.login && transfer.driver.toLowerCase() === staffSession.login.toLowerCase())
  const filteredTransfers = visibleTransfers.filter((transfer) => {
    const matchDate = !transferFilters.date || transfer.date === transferFilters.date
    const matchDriver = !transferFilters.driver || (transfer.driver || '').toLowerCase() === transferFilters.driver.toLowerCase()
    const matchVehicle = !transferFilters.vehicle || (transfer.vehicle || '').toLowerCase().includes(transferFilters.vehicle.toLowerCase())
    const q = transferFilters.query.trim().toLowerCase()
    const matchQuery = !q || [transfer.clientName, transfer.routeFrom, transfer.routeTo, transfer.vehicle, transfer.driver, transfer.service]
      .some((field) => (field || '').toLowerCase().includes(q))
    return matchDate && matchDriver && matchVehicle && matchQuery
  })
  const transfersToDisplay = role === 'admin' ? filteredTransfers : visibleTransfers

  const handleStaffLogin = (event) => {
    event.preventDefault()
    const login = authLogin.trim().toLowerCase()
    const password = authPassword

    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      setStaffSession({ role: 'admin', login: ADMIN_LOGIN })
      setAuthError('')
      setShowStaffAuth(false)
      setAuthLogin('')
      setAuthPassword('')
      return
    }

    const matchedDriver = driverAccounts.find((driver) => driver.login.toLowerCase() === login && driver.password === password)
    if (matchedDriver) {
      setStaffSession({ role: 'driver', login: matchedDriver.login })
      setAuthError('')
      setShowStaffAuth(false)
      setAuthLogin('')
      setAuthPassword('')
      return
    }

    setAuthError(t.invalidCredentials)
  }

  const handleStaffLogout = () => {
    setStaffSession(null)
    setDesktopTab('home')
    setMobileTab('home')
  }

  const addDriverAccount = (event) => {
    event.preventDefault()
    const login = newDriverLogin.trim().toLowerCase()
    const password = newDriverPassword.trim()
    if (!login || !password) return
    if (login === ADMIN_LOGIN) return
    if (driverAccounts.some((driver) => driver.login.toLowerCase() === login)) return
    const newDriver = { id: Date.now(), login, password }
    setDriverAccounts((prev) => [newDriver, ...prev])
    setNewDriverLogin('')
    setNewDriverPassword('')
  }

  const repeatOrder = (order) => {
    setFormData({ name: order.name, phone: order.phone, service: order.service, date: getTodayDate(), comment: order.comment, address: order.address || '' })
    setMobileTab('booking')
  }

  const addFavorite = () => {
    if (formData.address && !favorites.find(f => f.address === formData.address)) {
      const newFav = { address: formData.address, name: `${t.favoriteAddressPrefix} ${favorites.length + 1}`, id: Date.now() }
      setFavorites([...favorites, newFav])
      localStorage.setItem('favorites', JSON.stringify([...favorites, newFav]))
    }
  }

  const removeFavorite = (id) => {
    const updated = favorites.filter(f => f.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const updateTransferDraftField = (field, value) => {
    const nextDraft = { ...transferDraft, [field]: value }
    setTransferDraft(nextDraft)
    setTransferNotice('')
    setTransferConflict(findTransferConflict(nextDraft))
  }

  const updateTransferFilter = (field, value) => {
    setTransferFilters((prev) => ({ ...prev, [field]: value }))
  }

  const clearTransferFilters = () => setTransferFilters({ date: '', driver: '', vehicle: '', query: '' })

  const createTransfer = (event) => {
    event.preventDefault()
    const conflictMessage = findTransferConflict(transferDraft)
    if (conflictMessage) {
      setTransferConflict(conflictMessage)
      setTransferNotice('')
      return
    }
    const newTransfer = { ...transferDraft, id: Date.now() }
    setTransfers((prev) => [newTransfer, ...prev])
    setTransferDraft(getEmptyTransferDraft())
    setTransferConflict('')
    setTransferNotice(t.transferSaved)
    setImportNotice('')
  }

  const removeTransfer = (transferId) => {
    setTransfers((prev) => prev.filter((transfer) => transfer.id !== transferId))
  }

  const exportTransfers = () => {
    const dataStr = JSON.stringify(transfers, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'transfers.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importTransfers = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result)
        if (!Array.isArray(parsed)) throw new Error('invalid')
        const normalized = parsed.map((item) => ({
          id: item.id || Date.now() + Math.random(),
          clientName: item.clientName || '',
          service: item.service || services[0]?.title || '',
          routeFrom: item.routeFrom || '',
          routeTo: item.routeTo || '',
          date: item.date || getTodayDate(),
          startTime: item.startTime || '09:00',
          endTime: item.endTime || '10:00',
          driver: item.driver || '',
          vehicle: item.vehicle || '',
          status: item.status || 'confirmed',
        }))
        setTransfers(normalized)
        setImportNotice(t.importSuccess)
        setTransferNotice('')
        setTransferConflict('')
      } catch (error) {
        setImportNotice(t.importError)
      }
    }
    reader.readAsText(file)
  }

  const printSchedule = () => window.print()

  const applyQuickScenario = (scenario, target = 'mobile') => {
    setFormData((prev) => ({
      ...prev,
      service: scenario.service,
      address: prev.address || scenario.address,
      date: prev.date || getTodayDate(),
    }))
    if (target === 'mobile') {
      setMobileTab('booking')
    } else {
      setDesktopTab('booking')
    }
  }

  const whatsappHref = useMemo(() => {
    const message = [
      t.waMessageTitle,
      `${t.waName}: ${formData.name || '-'}`,
      `${t.waPhone}: ${formData.phone || '-'}`,
      `${t.waService}: ${formData.service || '-'}`,
      `${t.waDate}: ${formData.date || '-'}`,
      `${t.waAddress}: ${formData.address || '-'}`,
    ].join('\n')
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }, [formData, t])

  const submitOrder = () => {
    if (!canSubmit) return
    addToHistory()
    const popup = window.open(whatsappHref, '_blank', 'noopener,noreferrer')
    if (!popup) {
      window.location.href = whatsappHref
      return
    }
    setSubmitNotice(t.submitSuccess)
    setTimeout(() => setSubmitNotice(''), 3500)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitOrder()
  }

  const updateField = (event) => {
    const { name, value } = event.target
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 11)
      let normalized = digits
      if (digits.startsWith('8')) {
        normalized = `7${digits.slice(1)}`
      } else if (!digits.startsWith('7')) {
        normalized = `7${digits}`.slice(0, 11)
      }
      const formatted = `+${normalized}`
      setFormData((prev) => ({ ...prev, phone: formatted }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="dark">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="font-serif text-lg tracking-[0.2em] text-accent">TRANSFER PRO</a>
          
          <div className="hidden md:flex gap-5 items-center text-sm">
            {role === 'client' && (
              <nav className="flex gap-5">
                <button onClick={() => setDesktopTab('services')} className="hover:text-accent transition">{t.services}</button>
                <button onClick={() => setDesktopTab('standards')} className="hover:text-accent transition">{t.standards}</button>
                <button onClick={() => setDesktopTab('booking')} className="hover:text-accent transition">{t.booking}</button>
                <button onClick={() => setDesktopTab('contacts')} className="hover:text-accent transition">{t.contacts}</button>
              </nav>
            )}
            
            <div className="flex gap-2 border-l border-white/20 pl-5">
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs cursor-pointer hover:border-accent transition">
                <option value="ru">РУ</option>
                <option value="kk">KK</option>
                <option value="en">EN</option>
              </select>
              {role === 'client' ? (
                <button onClick={() => setShowStaffAuth(true)} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs hover:border-accent transition">
                  {t.staffLogin}
                </button>
              ) : (
                <button onClick={handleStaffLogout} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs hover:border-accent transition">
                  {t.signOut}
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label={t.menuMore}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-black/95">
            <nav className="flex flex-col gap-2 px-4 py-4 text-sm">
              <div className="border-t border-white/10 my-2 pt-2">
                {role === 'client' && (
                  <>
                    <button
                      onClick={() => { setMobileMenuOpen(false); setMobileTab('history') }}
                      className="w-full text-left py-2 px-3 rounded-lg bg-cyan-950/20 hover:bg-cyan-950/30 transition text-xs"
                    >
                      📋 {t.history} ({orderHistory.length})
                    </button>
                    <button
                      onClick={() => { setMobileMenuOpen(false); setMobileTab('favorites') }}
                      className="w-full text-left py-2 px-3 rounded-lg bg-pink-950/20 hover:bg-pink-950/30 transition text-xs mt-2"
                    >
                      ❤️ {t.favorites} ({favorites.length})
                    </button>
                  </>
                )}
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="mt-2 w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs cursor-pointer hover:border-accent transition">
                  <option value="ru">РУ</option>
                  <option value="kk">KK</option>
                  <option value="en">EN</option>
                </select>
                {role === 'client' ? (
                  <button onClick={() => { setShowStaffAuth(true); setMobileMenuOpen(false) }} className="mt-2 w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs hover:border-accent transition">
                    {t.staffLogin}
                  </button>
                ) : (
                  <button onClick={() => { handleStaffLogout(); setMobileMenuOpen(false) }} className="mt-2 w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs hover:border-accent transition">
                    {t.signOut}
                  </button>
                )}
              </div>
              <button
                onClick={closeMobileMenu}
                className="w-full py-2 text-center rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                {t.close}
              </button>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 w-full block py-3 text-center rounded-lg bg-accent text-black font-semibold">{t.whatsapp}</a>
            </nav>
          </div>
        )}
      </header>

      {showStaffAuth && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <form onSubmit={handleStaffLogin} className="w-full max-w-md rounded-2xl border border-white/15 bg-black p-5 space-y-4">
            <h3 className="text-xl font-serif text-accent">{t.staffLogin}</h3>
            <div>
              <label className="text-xs text-white/80">{t.loginLabel}</label>
              <input
                value={authLogin}
                onChange={(event) => setAuthLogin(event.target.value)}
                placeholder="email"
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs text-white/80">{t.passwordLabel}</label>
              <input
                type="password"
                value={authPassword}
                onChange={(event) => setAuthPassword(event.target.value)}
                placeholder="••••••"
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>
            {authError && <p className="text-xs text-red-400">{authError}</p>}
            <div className="flex gap-2">
              <button type="button" onClick={() => setShowStaffAuth(false)} className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 transition">{t.close}</button>
              <button type="submit" className="flex-1 rounded-lg bg-accent text-black px-3 py-2 text-sm font-semibold hover:bg-accent/90 transition">{t.signIn}</button>
            </div>
          </form>
        </div>
      )}

      {role === 'client' ? (
      <>
      {/* Mobile single-screen tabbed view */}
      <div onPointerDown={closeMobileMenu} className="md:hidden min-h-[calc(100vh-120px)] w-full flex flex-col bg-gradient-to-b from-black to-black/90 pb-24">
        <div className="flex-1 flex flex-col justify-start items-start px-4 sm:px-5 py-6 sm:py-8 overflow-y-auto">
          {mobileTab === 'home' && (
            <motion.div className="w-full space-y-5 sm:space-y-6 bg-gradient-to-b from-black via-amber-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <div className="border-l-3 border-accent pl-4 sm:pl-5">
                <p className="text-accent text-sm sm:text-base font-bold tracking-wide">{t.heroBadge}</p>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-white">{t.heroTitle}</h1>
              
              <div className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base leading-relaxed font-light">
                <p>{t.heroP1}</p>
                <p>{t.heroP2}</p>
                <p>{t.heroP3}</p>
              </div>
              
              <button
                onClick={() => setMobileTab('booking')}
                className="w-full mt-5 sm:mt-6 py-3.5 sm:py-4 rounded-xl bg-accent text-black font-bold text-base sm:text-lg hover:bg-accent/90 active:scale-95 transition shadow-lg"
              >
                {t.startOrder}
              </button>

              {hasDraft && (
                <button
                  onClick={() => setMobileTab('booking')}
                  className="w-full py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/15 transition"
                >
                  {t.continueDraft}
                </button>
              )}

              <div className="grid grid-cols-1 gap-2">
                {trustPoints.map((point) => (
                  <div key={point} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90">
                    ✓ {point}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-accent font-semibold">{t.quickScenarios}</p>
                <div className="grid grid-cols-3 gap-2">
                  {quickScenarios.map((scenario) => (
                    <button
                      key={scenario.label}
                      onClick={() => applyQuickScenario(scenario, 'mobile')}
                      className="rounded-lg bg-white/8 border border-white/10 px-2 py-2 text-xs font-semibold hover:bg-white/12 transition"
                    >
                      {scenario.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-accent font-semibold">{t.reviews}</p>
                {reviews.slice(0, 2).map((review) => (
                  <div key={review.author} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-white/80">“{review.text}”</p>
                    <p className="text-xs text-accent mt-2 font-semibold">★ 5.0 · {review.author}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {mobileTab === 'services' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-blue-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">{t.services}</h2>
              
              <div className="space-y-3 sm:space-y-4 text-white/75">
                {services.map((service, idx) => {
                  const Icon = service.icon
                  return (
                    <button
                      key={service.title}
                      onClick={() => { setFormData(prev => ({ ...prev, service: service.title })); setMobileTab('booking') }}
                      className="w-full text-left p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent shadow-md hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Icon className="text-accent flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="flex-1">
                          <p className="font-bold text-accent text-base sm:text-lg">{service.title}</p>
                          <p className="text-xs sm:text-sm text-white/60 mt-0.5">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-accent font-semibold mb-3 text-sm sm:text-base">{service.price}</p>
                      <ul className="text-xs sm:text-sm space-y-1.5 text-white/70">
                        {service.details.slice(0, 3).map((detail, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                        {service.details.length > 3 && (
                          <li className="text-accent/80 italic pt-1">+ {service.details.length - 3} ещё...</li>
                        )}
                      </ul>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {mobileTab === 'standards' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-purple-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">{t.standards}</h2>
              
              <div className="space-y-3 sm:space-y-4 text-white/75">
                {standards.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.title}
                      onClick={() => { setMobileTab('booking') }}
                      className="w-full text-left p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent flex items-start gap-3 sm:gap-4 shadow-md"
                      aria-label={item.title}
                    >
                      <Icon className="text-accent flex-shrink-0 mt-0.5 w-6 h-6 sm:w-7 sm:h-7" />
                      <div className="flex-1">
                        <p className="font-bold text-accent mb-2 text-base sm:text-lg">{item.title}</p>
                        <p className="text-sm sm:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {mobileTab === 'contacts' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-emerald-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">{t.contacts}</h2>
              <div className="space-y-3 sm:space-y-4 text-white/90">
                <a href="tel:+77781556699" className="block w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 active:scale-95 transition border-l-4 border-accent text-base sm:text-lg font-semibold text-accent shadow-md">+7 778 155 6699</a>
                <a href="tel:+77089389145" className="block w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent text-base sm:text-lg font-semibold shadow-md">+7 708 938 9145</a>
                <a href="tel:+77771351387" className="block w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent text-base sm:text-lg font-semibold shadow-md">+7 777 135 1387</a>
              </div>
            </motion.div>
          )}

          {mobileTab === 'booking' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-rose-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">{t.bookingTitle}</h2>
                  <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">{t.bookingSubtitle}</p>
                </div>
                {savedSince && <span className="text-xs text-green-400 font-semibold whitespace-nowrap mt-1">{t.saved}</span>}
              </div>

              {submitNotice && <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-xs text-green-300">{submitNotice}</p>}

              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                  <span>{t.bookingProgress}</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent transition-all" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="mt-2 flex gap-2 text-[11px]">
                  <span className={primaryStepComplete ? 'text-accent' : 'text-white/40'}>{t.progressStep1}</span>
                  <span className={secondStepComplete ? 'text-accent' : 'text-white/40'}>{t.progressStep2}</span>
                  <span className={thirdStepComplete ? 'text-accent' : 'text-white/40'}>{t.progressStep3}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {trustPoints.map((point) => (
                  <div key={point} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90">
                    ✓ {point}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-accent font-semibold">{t.quickChoice}</p>
                <div className="grid grid-cols-3 gap-2">
                  {quickScenarios.map((scenario) => (
                    <button
                      key={scenario.label}
                      type="button"
                      onClick={() => applyQuickScenario(scenario, 'mobile')}
                      className="rounded-lg bg-white/8 border border-white/10 px-2 py-2 text-xs font-semibold hover:bg-white/12 transition"
                    >
                      {scenario.label}
                    </button>
                  ))}
                </div>
              </div>

              <form className="space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">{t.nameLabel}</label>
                  <input 
                    id="name_mobile" 
                    name="name" 
                    placeholder={t.namePlaceholder} 
                    value={formData.name} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition placeholder-white/40 shadow-md" 
                  />
                </div>

                <div>
                  <label htmlFor="phone_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">{t.phoneLabel}</label>
                  <input 
                    id="phone_mobile" 
                    name="phone" 
                    type="tel" 
                    inputMode="tel" 
                    pattern="\\+7[0-9]{10}" 
                    placeholder={t.phonePlaceholder} 
                    value={formData.phone} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className={`w-full rounded-xl border-2 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none transition ${
                      formData.phone.length > 2 && !isValidPhone(formData.phone)
                        ? 'border-red-500/60 bg-red-500/10 focus:border-red-500/80 focus:bg-red-500/15'
                        : 'border-white/20 bg-black/60 focus:border-accent focus:bg-black/80'
                    } placeholder-white/40 shadow-md`}
                  />
                  {formData.phone.length > 2 && !isValidPhone(formData.phone) && (
                    <p className="mt-1.5 text-xs sm:text-sm text-red-400 font-medium">{t.phoneInvalid}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">{t.serviceLabel}</label>
                  <select 
                    id="service_mobile"
                    name="service" 
                    value={formData.service} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition shadow-md"
                  >
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">{t.dateLabel}</label>
                  <input 
                    id="date_mobile"
                    name="date" 
                    type="date" 
                    min={getTodayDate()} 
                    value={formData.date} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition shadow-md" 
                  />
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setShowMobileDetails((prev) => !prev)}
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    {showMobileDetails ? t.hideDetails : t.showDetails}
                  </button>
                </div>

                {showMobileDetails && (
                  <>
                    <div>
                      <label htmlFor="address_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">{t.addressLabel}</label>
                      <input
                        id="address_mobile"
                        name="address"
                        placeholder={t.addressPlaceholder}
                        value={formData.address}
                        onChange={updateField}
                        onFocus={closeMobileMenu}
                        className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition placeholder-white/40 shadow-md"
                      />
                      <button
                        type="button"
                        onClick={addFavorite}
                        disabled={!formData.address}
                        className={`mt-2 w-full rounded-lg px-3 py-2 text-sm font-semibold transition ${
                          formData.address ? 'bg-accent/20 text-accent hover:bg-accent/30' : 'bg-white/5 text-white/50 cursor-not-allowed'
                        }`}
                      >
                        {t.saveAddress}
                      </button>
                    </div>

                    <div>
                      <label htmlFor="comment_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">{t.commentLabel}</label>
                      <textarea 
                        id="comment_mobile"
                        name="comment" 
                        placeholder={t.commentPlaceholder} 
                        value={formData.comment} 
                        onChange={updateField} 
                        onFocus={closeMobileMenu} 
                        className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition resize-none placeholder-white/40 shadow-md" 
                        rows="4" 
                      />
                    </div>
                  </>
                )}
              

              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full rounded-xl px-4 sm:px-5 py-4 sm:py-4.5 font-bold text-lg sm:text-xl transition active:scale-95 shadow-lg ${
                  canSubmit
                    ? 'bg-gradient-to-r from-accent to-accent/90 text-black hover:from-accent/95 hover:to-accent/85 cursor-pointer'
                    : 'bg-accent/40 text-black/60 cursor-not-allowed'
                }`}
              >
                {canSubmit ? t.submitNow : t.fillForm}
              </button>
              </form>
            </motion.div>
          )}

          {mobileTab === 'history' && (
            <motion.div className="w-full space-y-3 bg-gradient-to-b from-black via-cyan-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">📋 {t.history}</h2>
              {orderHistory.length === 0 ? (
                <p className="text-white/60 text-center py-8">{t.noOrders}</p>
              ) : (
                <div className="space-y-2">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="p-3 bg-white/5 rounded-lg border-l-4 border-accent">
                      <p className="text-sm text-white/80">{order.service}</p>
                      <p className="text-xs text-white/60">{order.name} • {order.createdAt}</p>
                      <p className="text-xs text-accent mt-1">{t.orderStatus}: {getStatusLabel(order.status || 'new')}</p>
                      <button onClick={() => repeatOrder(order)} className="text-xs mt-2 px-3 py-1 bg-accent/20 text-accent rounded hover:bg-accent/30 transition">
                        {t.repeat}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {mobileTab === 'favorites' && (
            <motion.div className="w-full space-y-3 bg-gradient-to-b from-black via-pink-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" {...sectionMotionProps}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">❤️ {t.favorites}</h2>
              {favorites.length === 0 ? (
                <p className="text-white/60 text-center py-8">{t.noFavorites}</p>
              ) : (
                <div className="space-y-2">
                  {favorites.map((fav) => (
                    <div key={fav.id} className="p-3 bg-white/5 rounded-lg border-l-4 border-accent flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-accent">{fav.name}</p>
                        <p className="text-xs text-white/60">{fav.address}</p>
                      </div>
                      <button onClick={() => removeFavorite(fav.id)} className="text-red-400 hover:text-red-500" aria-label={`${t.removeFavoriteAria}: ${fav.name}`}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>

        <div className="border-t border-white/10 p-2 sm:p-3 bg-black/98 backdrop-blur fixed bottom-0 left-0 right-0 md:hidden">
          <div className="flex items-center justify-between gap-2 sm:gap-2.5 px-2">
            <div className="flex gap-1.5 sm:gap-2 w-full overflow-x-auto">
                <button onClick={() => setMobileTab('home')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'home' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label={t.home}>{t.home}</button>
                <button onClick={() => setMobileTab('services')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'services' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label={t.services}>{t.services}</button>
                <button onClick={() => setMobileTab('standards')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'standards' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label={t.standards}>{t.standards}</button>
                <button onClick={() => setMobileTab('contacts')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'contacts' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label={t.contacts}>{t.contacts}</button>
                <button onClick={() => setMobileTab('booking')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'booking' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label={t.booking}>{t.booking}</button>
              </div>
            <div className="flex gap-1.5 sm:gap-2">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-accent text-black text-xs sm:text-sm font-bold whitespace-nowrap hover:bg-accent/90 active:scale-95 transition shadow-md">{t.whatsapp}</a>
            </div>
          </div>
        </div>
      </div>

      <main id="top" className="hidden md:flex md:flex-col md:min-h-screen">
        {/* Desktop Tab Navigation */}
        <div className="sticky top-[60px] z-40 border-b border-white/10 bg-black/70 backdrop-blur py-3 px-8">
          <div className="mx-auto max-w-7xl flex gap-4">
            <button onClick={() => setDesktopTab('home')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'home' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>{t.home}</button>
            <button onClick={() => setDesktopTab('services')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'services' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>{t.services}</button>
            <button onClick={() => setDesktopTab('standards')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'standards' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>{t.standards}</button>
            <button onClick={() => setDesktopTab('contacts')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'contacts' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>{t.contacts}</button>
            <button onClick={() => setDesktopTab('booking')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'booking' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>{t.booking}</button>
          </div>
        </div>

        {/* Desktop Content Area */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-6xl">
            {desktopTab === 'home' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-amber-950/30 to-black rounded-2xl p-12" {...sectionMotionProps}>
                <div className="border-l-4 border-accent pl-6">
                  <p className="text-accent text-sm font-semibold">{t.heroBadge}</p>
                </div>
                
                <h1 className="font-serif text-5xl leading-tight text-white max-w-3xl">{t.heroTitle}</h1>
                
                <div className="space-y-4 text-white text-base leading-relaxed max-w-3xl">
                  <p>{t.heroP1}</p>
                  <p>{t.heroP2}</p>
                  <p>{t.heroP3}</p>
                </div>
                
                <button
                  onClick={() => setDesktopTab('booking')}
                  className="mt-6 px-8 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition"
                >
                  {t.startOrder}
                </button>

                {hasDraft && (
                  <button
                    onClick={() => setDesktopTab('booking')}
                    className="mt-2 px-8 py-3 rounded-lg bg-white/10 text-white font-semibold text-base hover:bg-white/15 transition"
                  >
                    {t.continueDraft}
                  </button>
                )}

                <div className="grid grid-cols-3 gap-3 max-w-3xl mt-4">
                  {trustPoints.map((point) => (
                    <div key={point} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">
                      ✓ {point}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-accent font-semibold">{t.quickScenarios}</p>
                  <div className="flex gap-2 flex-wrap">
                    {quickScenarios.map((scenario) => (
                      <button
                        key={scenario.label}
                        onClick={() => applyQuickScenario(scenario, 'desktop')}
                        className="rounded-lg bg-white/8 border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/12 transition"
                      >
                        {scenario.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {reviews.map((review) => (
                    <div key={review.author} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/85">“{review.text}”</p>
                      <p className="text-xs text-accent mt-3 font-semibold">★ 5.0 · {review.author}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {desktopTab === 'services' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-blue-950/30 to-black rounded-2xl p-12" {...sectionMotionProps}>
                <h2 className="section-title text-4xl text-accent">{t.services}</h2>
                
                <div className="grid gap-6 grid-cols-2">
                  {services.map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <motion.article
                        key={service.title}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 backdrop-blur transition duration-300 hover:border-accent/60 hover:bg-white/12 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                        onClick={() => { setFormData(prev => ({ ...prev, service: service.title })); setDesktopTab('booking') }}
                        {...cardMotionProps(idx * 0.08)}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <Icon className="text-accent flex-shrink-0 w-8 h-8" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-sm text-accent/80 font-semibold mt-1">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {service.details[0]}
                        </p>
                        
                        <div className="space-y-2 mb-4 pb-4 border-b border-white/10">
                          {service.details.slice(1).map((detail, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                              <span className="text-accent mt-1 flex-shrink-0">✓</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-accent font-bold text-lg">{service.price}</p>
                      </motion.article>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {desktopTab === 'standards' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-purple-950/30 to-black rounded-2xl p-12" {...sectionMotionProps}>
                <h2 className="section-title text-4xl text-accent">{t.standardsTitleDesktop}</h2>
                
                <div className="grid gap-4 grid-cols-3">
                  {standards.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:border-accent/60 hover:-translate-y-1"
                        {...cardMotionProps(idx * 0.06)}
                      >
                        <Icon className="mx-auto mb-3 text-accent text-base" />
                        <p className="text-base text-center mb-3 text-white">{item.title}</p>
                        <p className="text-white/90 text-sm text-center">{item.desc}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {desktopTab === 'contacts' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-emerald-950/30 to-black rounded-2xl p-12" {...sectionMotionProps}>
                <h2 className="section-title text-4xl text-accent">{t.contacts}</h2>
                <p className="text-white text-base mb-6">{t.contactsHint}</p>
                <div className="flex gap-4 flex-wrap">
                  <a href="tel:+77781556699" className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition">+7 778 155 6699</a>
                  <a href="tel:+77089389145" className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition">+7 708 938 9145</a>
                  <a href="tel:+77771351387" className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition">+7 777 135 1387</a>
                </div>
              </motion.div>
            )}

            {desktopTab === 'booking' && (
              <motion.div
                className="rounded-2xl border border-accent/35 bg-gradient-to-br from-rose-950/20 via-black to-black p-8 max-w-2xl"
                {...(prefersReducedMotion ? {} : { variants: fadeUp, initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.3 } })}
              >
                <h2 className="section-title text-4xl text-accent">{t.booking}</h2>
                <p className="mt-3 text-white text-base mb-6">{t.bookingSubtitle}</p>

                {submitNotice && <p className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-xs text-green-300">{submitNotice}</p>}

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-5">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                    <span>{t.bookingProgress}</span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent transition-all" style={{ width: `${progressPercent}%` }} />
                  </div>
                  <div className="mt-2 flex gap-3 text-xs">
                    <span className={primaryStepComplete ? 'text-accent' : 'text-white/40'}>{t.progressStep1}</span>
                    <span className={secondStepComplete ? 'text-accent' : 'text-white/40'}>{t.progressStep2}</span>
                    <span className={thirdStepComplete ? 'text-accent' : 'text-white/40'}>{t.progressStep3}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  {trustPoints.map((point) => (
                    <div key={point} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90">
                      ✓ {point}
                    </div>
                  ))}
                </div>

                <div className="mb-5">
                  <p className="text-accent font-semibold text-sm mb-2">{t.quickChoice}</p>
                  <div className="flex gap-2 flex-wrap">
                    {quickScenarios.map((scenario) => (
                      <button
                        key={scenario.label}
                        type="button"
                        onClick={() => applyQuickScenario(scenario, 'desktop')}
                        className="rounded-lg bg-white/8 border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/12 transition"
                      >
                        {scenario.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name_desktop" className="text-sm font-semibold text-white">{t.nameLabel}</label>
                    <input id="name_desktop" name="name" required placeholder={t.namePlaceholder} value={formData.name} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15" />
                  </div>
                  <div>
                    <label htmlFor="phone_desktop" className="text-sm font-semibold text-white">{t.phoneLabel}</label>
                    <input id="phone_desktop" name="phone" type="tel" inputMode="tel" pattern="\+7[0-9]{10}" required placeholder={t.phonePlaceholder} value={formData.phone} onChange={updateField} className={`mt-1 w-full rounded-lg border px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition ${
                      formData.phone.length > 2 && !isValidPhone(formData.phone)
                        ? 'border-red-500/50 bg-red-500/10 focus:bg-red-500/15 focus:border-red-500'
                        : 'border-white/30 bg-white/10 focus:border-accent focus:bg-white/15'
                    }`} />
                    {formData.phone.length > 2 && !isValidPhone(formData.phone) && (
                      <p className="mt-1 text-xs text-red-400">{t.phoneInvalid}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="service_desktop" className="text-sm font-semibold text-white">{t.serviceLabel}</label>
                    <select id="service_desktop" name="service" value={formData.service} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white outline-none transition focus:border-accent focus:bg-white/15">
                      {services.map((service) => (
                        <option key={service.title} value={service.title} className="text-black">{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date_desktop" className="text-sm font-semibold text-white">{t.dateLabel}</label>
                    <input id="date_desktop" name="date" type="date" required min={getTodayDate()} value={formData.date} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white outline-none transition focus:border-accent focus:bg-white/15" />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowDesktopDetails((prev) => !prev)}
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      {showDesktopDetails ? t.hideDetails : t.showDetails}
                    </button>
                  </div>

                  {showDesktopDetails && (
                    <>
                      <div>
                        <label htmlFor="address_desktop" className="text-sm font-semibold text-white">{t.addressLabel}</label>
                        <input id="address_desktop" name="address" placeholder={t.addressPlaceholder} value={formData.address} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15" />
                        <button
                          type="button"
                          onClick={addFavorite}
                          disabled={!formData.address}
                          className={`mt-2 w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
                            formData.address ? 'bg-accent/20 text-accent hover:bg-accent/30' : 'bg-white/5 text-white/50 cursor-not-allowed'
                          }`}
                        >
                          {t.saveAddress}
                        </button>
                      </div>
                      <div>
                        <label htmlFor="comment_desktop" className="text-sm font-semibold text-white">{t.commentDesktopLabel}</label>
                        <textarea id="comment_desktop" name="comment" placeholder={t.commentPlaceholder} value={formData.comment} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15 resize-none" rows="3" />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`w-full mt-4 px-4 py-3 rounded-lg text-base font-semibold transition ${
                      canSubmit
                        ? 'bg-accent text-black hover:bg-accent/90 cursor-pointer'
                        : 'bg-accent/40 text-black/60 cursor-not-allowed'
                    }`}
                  >
                    {t.submitWhatsapp}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      </>
      ) : (
      <main className="min-h-[calc(100vh-140px)] px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto max-w-6xl space-y-4">
          <motion.section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-8" {...sectionMotionProps}>
            <h1 className="text-2xl md:text-3xl font-serif text-accent font-bold">
              {role === 'admin' ? t.adminPanel : t.driverPanel}
            </h1>
            <p className="mt-2 text-white/70 text-sm md:text-base">
              {role === 'admin' ? t.adminSubtitle : t.driverSubtitle}
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">{t.ordersTotal}: {orderHistory.length}</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">{t.ordersActive}: {activeOrdersCount}</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">{t.ordersDone}: {completedOrdersCount}</div>
            </div>

            {role === 'admin' && (
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                <form onSubmit={addDriverAccount} className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                  <p className="text-sm font-semibold text-accent">{t.addDriver}</p>
                  <div>
                    <label className="text-xs text-white/70">{t.driverLogin}</label>
                    <input
                      value={newDriverLogin}
                      onChange={(event) => setNewDriverLogin(event.target.value)}
                      className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      placeholder="driver@mail.ru"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/70">{t.driverPassword}</label>
                    <input
                      type="text"
                      value={newDriverPassword}
                      onChange={(event) => setNewDriverPassword(event.target.value)}
                      className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      placeholder="******"
                    />
                  </div>
                  <button type="submit" className="w-full rounded-lg bg-accent text-black px-3 py-2 text-sm font-semibold hover:bg-accent/90 transition">
                    {t.addDriver}
                  </button>
                </form>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-accent mb-2">{t.driversList}</p>
                  {driverAccounts.length === 0 ? (
                    <p className="text-xs text-white/60">{t.noDrivers}</p>
                  ) : (
                    <div className="space-y-2">
                      {driverAccounts.map((driver) => (
                        <div key={driver.id} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2">
                          <p className="text-sm text-white">{driver.login}</p>
                          <p className="text-xs text-white/50">{t.passwordLabel}: {driver.password}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{role === 'admin' ? t.transferSchedule : t.myTransfers}</p>
                  <p className="text-sm text-white/60">{t.transferScheduleSubtitle}</p>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs">
                  {transferNotice && (
                    <span className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-1 text-green-200">{transferNotice}</span>
                  )}
                  {transferConflict && (
                    <span className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1 text-red-200">{transferConflict}</span>
                  )}
                  {importNotice && (
                    <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-200">{importNotice}</span>
                  )}
                </div>
              </div>

              {role === 'admin' && (
                <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.filterDate}</label>
                    <input
                      type="date"
                      value={transferFilters.date}
                      onChange={(event) => updateTransferFilter('date', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.filterDriver}</label>
                    <input
                      value={transferFilters.driver}
                      onChange={(event) => updateTransferFilter('driver', event.target.value)}
                      placeholder="driver@mail.ru"
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.filterVehicle}</label>
                    <input
                      value={transferFilters.vehicle}
                      onChange={(event) => updateTransferFilter('vehicle', event.target.value)}
                      placeholder="V-class"
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.searchTransfers}</label>
                    <input
                      value={transferFilters.query}
                      onChange={(event) => updateTransferFilter('query', event.target.value)}
                      placeholder="Имя, адрес, маршрут"
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs text-white/70">{t.bufferLabel}</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={bufferMinutes}
                        onChange={(event) => setBufferMinutes(Math.max(0, Number(event.target.value) || 0))}
                        className="w-28 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      />
                      <p className="text-xs text-white/60 self-center">{t.bufferHelper}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2 md:items-end">
                    <div className="flex flex-wrap gap-2">
                      <button type="button" onClick={clearTransferFilters} className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10">{t.clearFilters}</button>
                      <button type="button" onClick={exportTransfers} className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10">{t.exportJson}</button>
                      <label className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10 cursor-pointer">
                        {t.importJson}
                        <input type="file" accept="application/json" className="hidden" onChange={importTransfers} />
                      </label>
                      <button type="button" onClick={printSchedule} className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10">{t.printSchedule}</button>
                    </div>
                  </div>
                </div>

                <form onSubmit={createTransfer} className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.clientName}</label>
                    <input
                      value={transferDraft.clientName}
                      onChange={(event) => updateTransferDraftField('clientName', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      placeholder="Имя клиента"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.serviceLabel}</label>
                    <select
                      value={transferDraft.service}
                      onChange={(event) => updateTransferDraftField('service', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    >
                      {services.map((service) => (
                        <option key={service.title} value={service.title} className="text-black">{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.dateLabel}</label>
                    <input
                      type="date"
                      min={getTodayDate()}
                      value={transferDraft.date}
                      onChange={(event) => updateTransferDraftField('date', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.startTime}</label>
                    <input
                      type="time"
                      value={transferDraft.startTime}
                      onChange={(event) => updateTransferDraftField('startTime', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.endTime}</label>
                    <input
                      type="time"
                      value={transferDraft.endTime}
                      onChange={(event) => updateTransferDraftField('endTime', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.routeFrom}</label>
                    <input
                      value={transferDraft.routeFrom}
                      onChange={(event) => updateTransferDraftField('routeFrom', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      placeholder="Астана, аэропорт"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.routeTo}</label>
                    <input
                      value={transferDraft.routeTo}
                      onChange={(event) => updateTransferDraftField('routeTo', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      placeholder="Отель"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.assignedDriver}</label>
                    {driverAccounts.length > 0 ? (
                      <select
                        value={transferDraft.driver}
                        onChange={(event) => updateTransferDraftField('driver', event.target.value)}
                        className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      >
                        <option value="" className="text-black">—</option>
                        {driverAccounts.map((driver) => (
                          <option key={driver.id} value={driver.login} className="text-black">{driver.login}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        value={transferDraft.driver}
                        onChange={(event) => updateTransferDraftField('driver', event.target.value)}
                        className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                        placeholder="driver@mail.ru"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-white/70">{t.vehicle}</label>
                    <input
                      value={transferDraft.vehicle}
                      onChange={(event) => updateTransferDraftField('vehicle', event.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
                      placeholder="Mercedes V-class"
                    />
                  </div>
                  <div className="flex flex-col justify-end">
                    <button
                      type="submit"
                      disabled={!isTransferReady}
                      className={`w-full rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        isTransferReady ? 'bg-accent text-black hover:bg-accent/90' : 'bg-white/5 text-white/50 cursor-not-allowed'
                      }`}
                    >
                      {t.createTransfer}
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-2">
                {transfersToDisplay.length === 0 ? (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/70">
                    {role === 'admin' ? t.noTransfers : t.noTransfersForRole}
                  </div>
                ) : (
                  transfersToDisplay.map((transfer) => {
                    const conflictMessage = findTransferConflict(transfer, transfer.id)
                    return (
                      <div
                        key={transfer.id}
                        className={`rounded-xl border p-4 ${
                          conflictMessage ? 'border-red-400/50 bg-red-500/5' : 'border-white/10 bg-white/5'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-white font-semibold">{transfer.service || t.transferSchedule}</p>
                            <p className="text-xs text-white/60">{transfer.clientName || t.clientName}</p>
                          </div>
                          {role === 'admin' && (
                            <button
                              type="button"
                              onClick={() => removeTransfer(transfer.id)}
                              className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
                              aria-label="Delete transfer"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3 text-sm text-white/80">
                          <div>{transfer.date} · {transfer.startTime}–{transfer.endTime}</div>
                          <div>{t.routeFrom}: {transfer.routeFrom || '—'}</div>
                          <div>{t.routeTo}: {transfer.routeTo || '—'}</div>
                          <div>{t.assignedDriver}: {transfer.driver || '—'}</div>
                          <div>{t.vehicle}: {transfer.vehicle || '—'}</div>
                        </div>
                        {conflictMessage && <p className="mt-2 text-xs text-red-300">{conflictMessage}</p>}
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </motion.section>

          <div className="space-y-3">
            {orderHistory.length === 0 ? (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white/70">{t.noOrdersForRole}</div>
            ) : (
              orderHistory.map((order) => {
                const currentStatus = order.status || 'new'
                return (
                  <div key={order.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <p className="text-white font-semibold">{order.service}</p>
                      <p className="text-xs text-accent">{t.orderStatus}: {getStatusLabel(currentStatus)}</p>
                    </div>
                    <p className="mt-1 text-sm text-white/80">{order.name} · {order.phone}</p>
                    <p className="mt-1 text-xs text-white/60">{t.orderCreated}: {order.createdAt}</p>
                    {order.address && <p className="mt-1 text-xs text-white/70">{t.waAddress}: {order.address}</p>}

                    {role === 'admin' ? (
                      <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center">
                        <span className="text-xs text-white/70">{t.setStatus}</span>
                        <select
                          value={currentStatus}
                          onChange={(event) => updateOrderStatus(order.id, event.target.value)}
                          className="w-full md:w-64 rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-sm"
                        >
                          <option value="new">{t.statusNew}</option>
                          <option value="confirmed">{t.statusConfirmed}</option>
                          <option value="on_way">{t.statusOnWay}</option>
                          <option value="completed">{t.statusCompleted}</option>
                          <option value="canceled">{t.statusCanceled}</option>
                        </select>
                      </div>
                    ) : (
                      <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
                        <button type="button" onClick={() => updateOrderStatus(order.id, 'confirmed')} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/15 transition">{t.markConfirmed}</button>
                        <button type="button" onClick={() => updateOrderStatus(order.id, 'on_way')} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/15 transition">{t.markOnWay}</button>
                        <button type="button" onClick={() => updateOrderStatus(order.id, 'completed')} className="rounded-lg bg-accent/20 text-accent px-3 py-2 text-xs font-semibold hover:bg-accent/30 transition">{t.markCompleted}</button>
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </div>
      </main>
      )}

      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60 md:px-8 md:translate-y-0">
        © {new Date().getFullYear()} TransferPro · Premium transfer in Astana
      </footer>

      {role === 'client' && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-accent text-black font-bold shadow-lg hover:bg-accent/90 transition"
        >
          {t.whatsapp}
        </a>
      )}
    </div>
  )
}

export default App
