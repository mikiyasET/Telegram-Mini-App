import './js/telegram-web-app.js';
import {Telegram, WebAppType} from './types';

const coreWindow = window as unknown as Window & { Telegram: Telegram };
export const WebApp: WebAppType = coreWindow.Telegram.WebApp;
