# Telegram-Mini-App

This repository offers an npm package for developing web applications for your Telegram bot. It re-exports the API provided by Telegram's JS module.

The benefit of this package is that it includes TypeScript types, simplifying project setup.

## Installation

```bash
npm install telegram-mini-app
```
you don't need to install the Telegram JS module separately, as it is included in this package.

## Usage

```typescript
import WebApp from 'telegram-mini-app';

// to display the initData
console.log(WebApp.initData);

// to show the main button
WebApp.MainButton.show();

// to set the app background color
WebApp.setBackgroundColor('#f60000')

// to set the app header color
WebApp.setHeaderColor('bg_color');
```

Refer to the official [Telegram documentation](https://core.telegram.org/bots/webapps#initializing-web-apps) for Web Apps to explore additional features available through WebApp.