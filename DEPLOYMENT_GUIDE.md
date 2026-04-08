# 🚀 Развертывание TransferPro с SEO оптимизацией

## Для GitHub Pages

### Шаг 1: Обновите конфигурацию Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Шаг 2: Обновите домены в SEO файлах
```bash
# Замените все https://transferpro.kz/ на:
# https://Alibek0301.github.io/TransferPro/

# или используйте скрипт:
sed -i 's|https://transferpro.kz/|https://Alibek0301.github.io/TransferPro/|g' public/robots.txt
sed -i 's|https://transferpro.kz/|https://Alibek0301.github.io/TransferPro/|g' public/sitemap.xml
sed -i 's|https://transferpro.kz/|https://Alibek0301.github.io/TransferPro/|g' index.html
```

### Шаг 3: Обновите VITE_BASE_PATH для GitHub Pages
```bash
# Для среды GitHub Actions (автоматический деплой)
export VITE_BASE_PATH=/TransferPro/
npm run build

# Или локально
VITE_BASE_PATH=/TransferPro/ npm run build
```

### Шаг 4: Создайте workflow для GitHub Actions
Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Install Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: VITE_BASE_PATH=/TransferPro/ npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: # Оставьте пустым для GitHub Pages
```

### Шаг 5: Коммитьте и пушьте
```bash
git add .
git commit -m "chore: SEO optimization for search engines visibility"
git push origin main
```

## Для собственного домена (transferpro.kz)

### Требования:
- [ ] Владельческий домен transferpro.kz
- [ ] Хостинг с поддержкой статических файлов (Netlify, Vercel, или свой VPS)
- [ ] SSL сертификат (обязателен для SEO)

### Опция 1: Netlify (рекомендуется)
```bash
# 1. Установите Netlify CLI
npm install -g netlify-cli

# 2. Создайте netlify.toml в корне проекта
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
EOF

# 3. Деплойте
netlify deploy --prod

# 4. Привяжите домен в Netlify dashboard
```

### Опция 2: Vercel
```bash
# 1. Установите Vercel CLI
npm install -g vercel

# 2. Деплойте
vercel --prod

# 3. Привяжите домен
```

### Опция 3: Собственный VPS (nginx)
```bash
# 1. Скопируйте файлы на сервер
scp -r dist/* user@transferpro.kz:/var/www/transferpro/

# 2. Конфигурируйте nginx
sudo cat > /etc/nginx/sites-available/transferpro.kz << 'EOF'
server {
    listen 443 ssl http2;
    server_name transferpro.kz www.transferpro.kz;
    root /var/www/transferpro;

    ssl_certificate /etc/letsencrypt/live/transferpro.kz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/transferpro.kz/privkey.pem;

    gzip on;
    gzip_types text/css application/javascript text/javascript;
    gzip_min_length 1100;

    # Cache busting для CSS/JS
    location ~* \.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Media cache
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # SPA routing
    try_files $uri $uri/ /index.html;
}

server {
    listen 80;
    server_name transferpro.kz www.transferpro.kz;
    return 301 https://$server_name$request_uri;
}
EOF

# 3. Перезагрузите nginx
sudo systemctl reload nginx
```

## ✅ Проверка после деплоя

### 1. Тест базовой функциональности
```bash
# Проверьте что сайт доступен
curl -I https://transferpro.kz/

# Проверьте зенег robots.txt
curl https://transferpro.kz/robots.txt

# Проверьте sitemap
curl https://transferpro.kz/sitemap.xml
```

### 2. SEO диагностика
1. **Google PageSpeed Insights**
   - Перейдите: https://pagespeed.web.dev/
   - Введите URL: https://transferpro.kz/
   - Целевой score: 90+ для Desktop и Mobile

2. **Google Rich Results Test**
   - Перейдите: https://search.google.com/test/rich-results
   - Введите URL или HTML
   - Убедитесь что структурированные данные валидны

3. **Lighthouse Local Audit**
   ```bash
   npm install -g lighthouse
   lighthouse https://transferpro.kz/ --view
   ```

4. **W3C Markup Validation**
   - Перейдите: https://validator.w3.org/
   - Введите URL
   - Убедитесь что нет критических ошибок

### 3. Регистрация в поисковиках

**Google Search Console**
```
1. Перейдите: https://search.google.com/search-console/
2. Добавьте домен
3. Верифицируйте DNS или HTML tag
4. Загрузите sitemap: https://transferpro.kz/sitemap.xml
```

**Yandex Webmaster**
```
1. Перейдите: https://webmaster.yandex.ru/
2. Добавьте домен
3. Верифицируйте DNS запись или HTML tag
4. Загрузите sitemap: https://transferpro.kz/sitemap.xml
```

## 📊 Мониторинг

### Core Web Vitals (CWV)
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Используемые инструменты
- Google Search Console (https://search.google.com/search-console/)
- PageSpeed Insights (https://pagespeed.web.dev/)
- Lighthouse (локально или online)
- Web Vitals API (в Google Analytics)

## 🔒 Безопасность

### Обязательные заголовки
- [x] Content-Security-Policy
- [x] X-Content-Type-Options: nosniff
- [x] X-Frame-Options: DENY
- [x] X-XSS-Protection: 1; mode=block
- [x] Referrer-Policy: strict-origin-when-cross-origin

### SSL/TLS
- [x] HTTPS обязателен (настроен в index.html и nginx)
- [x] Редиректы с HTTP на HTTPS
- [x] SSL лучше всего через Let's Encrypt (бесплатно)

## 🚨 Troubleshooting

### Проблема: Robots.txt не найден
```bash
# Проверьте размещение
ls -la public/robots.txt

# Убедитесь что скопировано на сервер
curl https://transferpro.kz/robots.txt
```

### Проблема: Sitemap не индексируется
```bash
# Проверьте валидность XML
curl https://transferpro.kz/sitemap.xml | xmllint --format -

# Перепроверьте домены в sitemap
grep "loc" public/sitemap.xml
```

### Проблема: 404 на статических файлах
```bash
# Для SPA - убедитесь что fallback на index.html работает
# В nginx: try_files $uri $uri/ /index.html;
# В .htaccess: <IfModule mod_rewrite.c> RewriteBase / ...
```

## 📞 Контакты поддержки

- Google Support: https://support.google.com/webmasters
- Yandex Support: https://yandex.ru/support/webmaster
- Netlify Support: https://support.netlify.com
- Let's Encrypt Support: https://lets encrypt.org/docs/

---

**Версия**: 1.0  
**Последнее обновление**: 08 апреля 2026

