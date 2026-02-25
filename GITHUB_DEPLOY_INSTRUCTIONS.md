# Развертывание сайта через GitHub Pages

Ниже инструкция для этого репозитория. Основные настройки уже реализованы, вам остается включить Pages в настройках GitHub.

## Почему могла быть пустая страница

Самая частая причина — 404 на JS/CSS ассетах из-за неверного `base` в Vite.
Для этого репозитория нужно использовать проектный путь GitHub Pages: `base: '/TransferPro/'`.

## Что уже реализовано в проекте

- Добавлен workflow для деплоя: `.github/workflows/deploy-pages.yml`.
- В `vite.config.js` выставлен `base: '/TransferPro/'`.
- Добавлен `package-lock.json`, поэтому в CI используется `npm ci`.

## Как запустить деплой

1. Убедитесь, что дефолтная ветка для деплоя — `main` (или поменяйте ветку в workflow).
2. В GitHub откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **Source: GitHub Actions**.
4. Сделайте push в `main`.
5. Откройте вкладку **Actions** и дождитесь выполнения workflow `Deploy to GitHub Pages`.
6. Откройте сайт по адресу вида `https://<username>.github.io/TransferPro/` (именно с именем репозитория).

## Локальная проверка перед push

```bash
npm ci
npm run build
```

## Быстрая диагностика пустой страницы

1. Откройте DevTools → **Console** и **Network**.
2. Если есть 404 на `assets/index-*.js` или `assets/index-*.css`, проблема в `base` или URL.
3. Проверьте, что открываете именно `.../TransferPro/`, а не другой путь.
4. Проверьте, что в GitHub Pages выбран источник **GitHub Actions**.
