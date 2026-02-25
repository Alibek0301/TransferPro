# Развертывание сайта через GitHub Pages

Ниже инструкция для этого репозитория. Основные настройки уже реализованы, вам остается включить Pages в настройках GitHub.

## Что уже реализовано в проекте

- Добавлен workflow для деплоя: `.github/workflows/deploy-pages.yml`.
- В `vite.config.js` production `base` берется из `VITE_BASE_PATH` (с fallback на `/TransferPro/`), поэтому форки/переименованные репозитории деплоятся без ручной правки кода.
- В workflow `VITE_BASE_PATH` автоматически задается как `/${{ github.event.repository.name }}/`.
- Добавлен `package-lock.json`, поэтому в CI используется `npm ci`.

## Как запустить деплой

1. Убедитесь, что дефолтная ветка для деплоя — `main` (или поменяйте ветку в workflow).
2. В GitHub откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **Source: GitHub Actions**.
4. Сделайте push в `main`.
5. Откройте вкладку **Actions** и дождитесь выполнения workflow `Deploy to GitHub Pages`.
6. Ссылка на сайт появится в:
   - логах job `deploy`,
   - **Settings → Pages**.

## Локальная проверка перед push

```bash
npm ci
npm run build
```

Если хотите проверить production-base для другого репозитория локально:

```bash
VITE_BASE_PATH=/my-repo/ npm run build
```

## Частые проблемы

- **404 / белая страница**: проверьте, что `VITE_BASE_PATH` совпадает с именем репозитория (`/<repo>/`).
- **Ошибка `npm ci`**: проверьте, что `package-lock.json` закоммичен и актуален.
- **Workflow не запускается**: убедитесь, что push идет в ветку, указанную в `on.push.branches`.
- **Ошибка прав доступа при деплое**: проверьте permissions в workflow (`pages: write`, `id-token: write`).
