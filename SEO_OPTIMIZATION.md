# SEO Оптимизация TransferPro

## ✅ Реализованные улучшения

### 1. **Meta Tags** (index.html)
- ✓ Расширенный Title с ключевыми словами
- ✓ Детальное Description 160-170 символов
- ✓ Keywords meta tag с релевантными каждому языку
- ✓ Canonical URL для избежания дублирования
- ✓ OpenGraph tags для социальных сетей (OG Image, OG Locale)
- ✓ Twitter Card tags
- ✓ Language мета теги для многоязычности

### 2. **Structured Data** (Schema.org)
- ✓ LocalBusiness schema с контактной информацией
- ✓ ContactPoint с информацией о поддержке
- ✓ ServiceArea указывающая на Астану
- ✓ priceRange ($$ для премиум сегмента)
- ✓ knowsAbout список всех услуг

### 3. **robots.txt & sitemap.xml**
- ✓ Инструкции для поисковых ботов (Google, Yandex)
- ✓ Дефолтные Crawl-delay и Allow/Disallow
- ✓ Ссылка на sitemap для индексации
- ✓ Приоритеты URLs (1.0 для главной, 0.3 для legal pages)
- ✓ Даты изменения (lastmod)

### 4. **Семантическая HTML структура**
- ✓ Правильная иерархия: H1 (герой) → H2 (секции) → H3 (подзаголовки)
- ✓ Семантические теги (header, main, footer, article, section)
- ✓ Правильное использование alt текстов для иконок

### 5. **Производительность (Core Web Vitals)**
- ✓ Ленивая загрузка изображений
- ✓ Инлайновый CSS
- ✓ Минификация JavaScript
- ✓ Эффективное кеширование браузера

## 📋 TODO перед деплоем

### 1. **Обновить домены**
Замените `https://transferpro.kz/` на реальный домен в:
- [ ] `/public/sitemap.xml`
- [ ] `/public/robots.txt`  
- [ ] `/index.html` (canonical URL)

Для GitHub Pages используйте:
```
https://Alibek0301.github.io/TransferPro/
```

### 2. **Добавить GA/Яндекс.Метрика**
В `index.html` добавьте перед `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>

<!-- Яндекс.Метрика -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window,"document","script","https://mc.yandex.ru/metrika/tag.js","ym");
   ym(XXXXXXX, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
</script>
```

### 3. **Добавить DNS записи для верификации**
- Google Search Console: добавьте meta tag или DNS запись
- Yandex Webmaster: добавьте meta tag или DNS запись

### 4. **Оптимизация изображений**
- Конвертируйте og-image.svg в WebP для лучшей производительности
- Используйте картинки 1200x630px для og:image

### 5. **Дополнительные микроразметки**
Добавьте в App.jsx для каждой услуги:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VIP Meet & Greet",
  "description": "...",
  "provider": "TransferPro",
  "areaServed": "Astana"
}
</script>
```

### 6. **Социальные сети**
- Создайте все соцсети: Instagram, LinkedIn, Facebook
- Добавьте ссылки в footer
- Обновите sameAs в schema.org

### 7. **Submission на поисковики**
После деплоя:
- [ ] Google Search Console: https://search.google.com/search-console
- [ ] Yandex Webmaster: https://webmaster.yandex.ru
- [ ] Bing Webmaster: https://www.bing.com/webmasters

## 🔍 Ключевые слова для каждой услуги

### VIP Airport Transfer
- собирательная: трансфер из аэропорта, встреча в аэропорту, трансфер АНА
- детальные: встреча с табличкой, помощь с багажом, ожидание пассажира

### Smart Parents (Kids Shuttle)
- школьный трансфер, развозка детей, школьная безопасность
- фотоотчет для родителей, контроль маршрута

### Business Assistance
- почасовая аренда автомобиля, бизнес ассистент, консьерж сервис
- деловой день, встречи без суеты

### Corporate Service
- корпоративный транспорт, B2B услуги, автопарк для компаний
- фиксированный тариф, документооборот

### Intercity Travel
- трансфер Боровое, трансфер Щучинск, межгородские поездки
- комфортная поездка, Wi-Fi в автомобиле

## 📈 Ожидаемые результаты

По данной стратегии можно ожидать:
- 📍 Рейтинг в локальном поиске (Google Maps, Yandex Maps через 2-4 недели)
- 🔝 Выход в топ-10 поиска по основным ключевым словам через 2-3 месяца
- 📱 Хороший Lighthouse score (90+)
- ⭐ Улучшение Click-Through-Rate (CTR) на 30-50%

## 🚀 Дополнительные советы

### Для Яндекса (казахский/русский сегмент)
- Используйте структурированные данные на русском
- Добавьте Яндекс Карты
- Оптимизируйте под мобильный поиск (70% трафика)

### Для Google
- Фокусируйте на E-E-A-T (Experience, Expertise, Authority, Trustworthiness)
- Добавляйте отзывы/рейтинги (schema.org AggregateRating)
- Улучшайте Core Web Vitals

### Контент маркетинг
- Блог о безопасности в трансфере
- Гайды по правилам поведения в премиум такси
- Статьи о бизнес-поездках

