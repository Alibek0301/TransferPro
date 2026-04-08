# Регистрация TransferPro в поисковых системах

## 🔍 Google Search Console

### 1. Загрузите сайт
1. Перейдите на https://search.google.com/search-console/
2. Нажмите "Добавить свойство" 
3. Выберите "Веб-сайт" и введите домен
4. Выберите способ верификации:
   - **HTML тег** (самый простой): скопируйте meta tag и добавьте в `<head>` index.html
   - **DNS запись**: добавьте TXT запись в DNS хостера
   - **Google Analytics**: если используется

### 2. Загрузите sitemap
```
https://transferpro.kz/sitemap.xml
```
Или в интерфейсе Search Console → Карты сайта → Добавить карту сайта

### 3. Проверьте для каких запросов показывается сайт
- Перейдите в "Результаты поиска"
- Проверьте "Средний CTR" и "Среднюю позицию"
- Оптимизируйте Title и Meta Description для улучшения CTR

### 4. Мониторьте ошибки
- Check "URL inspection" для диагностики проблем
- Исправьте ошибки 404, 5xx
- Убедитесь что мобильная версия работает корректно

## 🔍 Yandex Webmaster

### 1. Загрузите сайт
1. Перейдите на https://webmaster.yandex.ru/
2. Нажмите "Добавить сайт"
3. Выберите "На основе DNS":
   - Добавьте TXT запись в DNS: `ya-verification: YOUR_CODE`
   - Или используйте meta tag в HTML

### 2. Загрузите sitemap
- Перейдите в "Карты сайта"
- Добавьте: `https://transferpro.kz/sitemap.xml`

### 3. Проверьте индексацию
- "Индексирование" → "Статистика"
- "Статистика по хостам"
- Убедитесь что все страницы проиндексированы

## 📍 Google My Business (для локального SEO)

### 1. Создайте компанию
1. Перейдите на https://www.google.com/business/
2. "Создать аккаунт" → заполните информацию
3. Подтвердите адрес (будет отправлено письмо)

### 2. Заполните профиль
- **Название**: TransferPro
- **Категория**: Служба такси (Taxi Service) / Служба трансфера (Transfer Service)
- **Адрес**: улица Кабанбай батыра, Астана
- **Телефон**: +7 778 155 6699
- **Веб-сайт**: https://transferpro.kz/
- **Часы работы**: 24/7
- **Описание**: Премиальный трансфер в Астане

### 3. Добавьте фото и видео
- Фото салона, водителей, автомобилей
- Видео процесса бронирования
- 360° фото интерьера авто

### 4. Мониторьте отзывы
- Отвечайте на все отзывы (положительные и отрицательные)
- Стимулируйте клиентов оставить отзыв

## 🗺️ Yandex.Maps I 2Gis

### Yandex.Maps
1. Перейдите на https://yandex.ru/maps/
2. Найдите "TransferPro" 
3. Если нет - нажмите "Добавить место"
4. Заполните информацию (категория, часы, контакты)
5. Загрузите фото

### 2GIS
1. Перейдите на https://2gis.kz/
2. "Добавить организацию"
3. Заполните профиль
4. Дождитесь модерации (2-3 дня)

## 📱 Социальные сети (для ссылок referral)

### Создайте профили:
- **Instagram**: @transferpro_astana
- **WhatsApp Business**: используйте существующий номер
- **Facebook**: TransferPro Astana Transfer Service
- **LinkedIn**: компания для B2B контактов
- **Telegram**: @TransferPro_Astana

Все ссылки добавьте в footer и в schema.org

## 📊 Мониторинг и аналитика

### Install Google Analytics 4
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX', {
    'page_path': window.location.pathname
  });
</script>
```

### Install Яндекс.Метрика
```html
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window,"document","script","https://mc.yandex.ru/metrika/tag.js","ym");
   ym(XXXXXXX, "init", {
     clickmap:true,
     trackLinks:true,
     accurateTrackBounce:true,
     webvisor:true
   });
</script>
```

### Настройки трекинга
- Отслеживайте "Отправка заявки"
- Трекируйте клики на номер телефона и WhatsApp
- Установите Goal для конверсии (заполнение формы)

## ⏰ Timeline ожидаемых результатов

| Период | Ожидаемые результаты |
|--------|---------------------|
| День 1-3 | Индексация в Google (-48ч после submit) |
| Неделя 1 | Появление в локальном поиске Google Maps |
| Неделя 2-4 | Индексация Yandex, добавления в 2GIS и Yandex.Maps |
| Месяц 1 | Выход в поиск по основным ключевикам |
| Месяц 2-3 | Рост позиций, появление в предложениях автодополнения |
| Месяц 3-6 | Стабилизация позиций в топ-10 для локальных запросов |

## 🚀 Бонус: Микроразметка для Events и Services

Добавьте для каждой услуги в App.jsx:
```jsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Название услуги",
  "description": "Описание",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TransferPro"
  },
  "price": "10000-15000",
  "priceCurrency": "KZT"
}
</script>
```

## 📞 Контакты для поддержки

- **Google**: https://support.google.com/webmasters
- **Yandex**: https://yandex.ru/support/webmaster
- **2GIS**: support@2gis.kz

