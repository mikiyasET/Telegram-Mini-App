export type Telegram = {
    WebApp: WebAppType;
}
export type WebAppType = {
    initData: string;
    initDataUnsafe: WebAppInitData;
    version: string;
    platform: string;
    colorScheme: DefaultColorSchemeTypes;
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: ColorHexType;
    backgroundColor: ColorHexType;
    isClosingConfirmationEnabled: boolean;
    isVerticalSwipesEnabled: boolean;
    BackButton: BackButton;
    MainButton: MainButton;
    SettingsButton: SettingsButton;
    HapticFeedback: HapticFeedback;
    CloudStorage: CloudStorage;
    BiometricManager: BiometricManager;
    isVersionAtLeast: (version: string) => boolean;
    setHeaderColor: (color: "bg_color" | "secondary_bg_color") => void;
    setBackgroundColor: (color: ColorThemeTypes | ColorHexType) => void;
    enableClosingConfirmation: Function;
    disableClosingConfirmation: Function;
    enableVerticalSwipes: Function;
    disableVerticalSwipes: Function;
    onEvent: <T extends EventTypes>(
        eventType: T,
        eventHandler: (params: EventHandlers[T]) => unknown
    ) => void;
    offEvent: <T extends EventTypes>(
        eventType: T,
        eventHandler: (params: EventHandlers[T]) => unknown
    ) => void;
    sendData: (data: unknown) => void;
    switchInlineQuery: (
        query: string,
        choose_chat_types?: Array<"users" | "bots" | "groups" | "channels">
    ) => void;
    openLink: (url: string, options?: { try_instant_view: boolean }) => void;
    openTelegramLink: (url: string) => void;
    openInvoice: (
        url: string,
        callback?: (status: InvoiceStatus) => unknown
    ) => void;
    showPopup: (params: PopupParams, callback?: (id?: string) => unknown) => void;
    showAlert: (message: string, callback?: () => unknown) => void;
    showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
    showScanQrPopup: (
        params: ScanQrPopupParams,
        callback?: (text: string) => void | true
    ) => void;
    closeScanQrPopup: () => void;
    readTextFromClipboard: (callback?: (text: string) => unknown) => void;
    requestWriteAccess: (callback?: (access: boolean) => unknown) => void;
    requestContact: (callback?: (access: boolean) => unknown) => void;
    ready: Function;
    expand: Function;
    close: Function;
}
export type WebAppInitData = {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat?: WebAppChat;
    chat_type: DefaultCategoryTypes;
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date: number;
    hash: string;
}
export type WebAppUser = {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
    photo_url?: string;
}
export type WebAppChat = {
    id: number;
    type: GroupChannelCategoryTypes;
    title: string;
    username?: string;
    photo_url?: string;
}
export type ThemeParams = {
    bg_color: ColorHexType;
    text_color: ColorHexType;
    hint_color: ColorHexType;
    link_color: ColorHexType;
    button_color: ColorHexType;
    button_text_color: ColorHexType;
    secondary_bg_color: ColorHexType;
    header_bg_color: ColorHexType;
    accent_text_color: ColorHexType;
    section_bg_color: ColorHexType;
    section_header_text_color: ColorHexType;
    subtitle_text_color: ColorHexType;
    destructive_text_color: ColorHexType;
}
export type BackButton = {
    isVisible: boolean;
    onClick: (cb: Function) => void;
    offClick: (cb: Function) => void;
    show: Function;
    hide: Function;
}
export type MainButton = {
    text: string;
    color: ColorHexType;
    textColor: ColorHexType;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (text: string) => void;
    onClick: (callback: Function) => void;
    offClick: (callback: Function) => void;
    show: Function;
    hide: Function;
    enable: Function;
    disable: Function;
    showProgress: (leaveActive?: boolean) => void;
    hideProgress: Function;
    setParams: (params: {
        color?: string;
        text?: string;
        text_color?: string;
        is_active?: boolean;
        is_visible?: boolean;
    }) => void;
}
export type SettingsButton = {
    isVisible: boolean;
    onClick: (callback: Function) => SettingsButton;
    offClick: (callback: Function) => SettingsButton;
    show: () => SettingsButton;
    hide: () => SettingsButton;
}
export type HapticFeedback = {
    impactOccurred: (style: ImpactOccurredStyleType) => HapticFeedback;
    notificationOccurred: (type: StatusType) => HapticFeedback;
    selectionChanged: () => HapticFeedback;
}
export type CloudStorage = {
    setItem: (
        key: CloudStorageKey,
        value: CloudStorageValue,
        callback?: (error: string | null, result?: boolean) => void
    ) => void;
    getItem: (
        key: CloudStorageKey,
        callback?: (error: string | null, result?: CloudStorageValue) => void
    ) => void;
    getItems: (
        keys: Array<CloudStorageKey>,
        callback?: (error: string | null, result?: CloudStorageItems) => void
    ) => void;
    getKeys: (
        callback?: (error: string | null, result?: Array<CloudStorageKey>) => void
    ) => void;
    removeItem: (
        key: CloudStorageKey,
        callback?: (error: string | null, result?: boolean) => void
    ) => void;
    removeItems: (
        key: Array<CloudStorageKey>,
        callback?: (error: string | null, result?: boolean) => void
    ) => void;
}
export type BiometricManager = {
    isInited: boolean;
    isBiometricAvailable: boolean;
    biometricType: BiometricType;
    isAccessRequested: boolean;
    isAccessGranted: boolean;
    isBiometricTokenSaved: boolean;
    deviceId: string;
    init: (callback?: () => unknown) => unknown;
    requestAccess: (params: BiometricRequestAccessParams, callback?: (access: string) => unknown) => void;
    authenticate: (params: BiometricAuthenticateParams, callback?: (authenticated: boolean, token: string) => unknown) => void;
    updateBiometricToken: (token: string, callback?: (updated: boolean) => unknown) => unknown;
    openSettings: Function;
}
export type GroupChannelCategoryTypes = 'group' | 'supergroup' | 'channel';
export type DefaultCategoryTypes = "sender" | "private" | "group" | "supergroup" | "channel";
export type DefaultColorSchemeTypes = "light" | "dark";
export type ColorHexType = `#${string}`
export type ColorThemeTypes = "bg_color" | "secondary_bg_color";
export type ImpactOccurredStyleType = "light" | "medium" | "heavy" | "rigid" | "soft";
export type StatusType = "error" | "success" | "warning";
export type CloudStorageKey = string;
export type CloudStorageValue = string;
export type CloudStorageItems = Record<CloudStorageKey, CloudStorageValue>
export type BiometricType = 'finger' | 'face' | 'unknown';
export type BiometricRequestAccessParams = {
    reason?: string;
}
export type BiometricAuthenticateParams = {
    reason?: string;
}
export type EventTypes = "themeChanged" | "viewportChanged" | "mainButtonClicked"
    | "backButtonClicked" | "settingsButtonClicked" | "invoiceClosed" | "popupClosed"
    | "qrTextReceived" | "clipboardTextReceived" | "writeAccessRequested" | "contactRequested"
    | "biometricManagerUpdated" | "biometricAuthRequested" | "biometricTokenUpdated";
export type EventHandlers = {
    themeChanged: void;
    viewportChanged: { isStateStable: boolean };
    mainButtonClicked: void;
    backButtonClicked: void;
    settingsButtonClicked: void;
    invoiceClosed: { url: string; status: InvoiceStatus };
    popupClosed: { button_id: string | null };
    qrTextReceived: { data: string };
    clipboardTextReceived: { data: string };
    writeAccessRequested: { status: "allowed" | "cancelled" };
    contactRequested: { status: "sent" | "cancelled" };
    biometricManagerUpdated: void;
    biometricAuthRequested: {
        isAuthenticated: boolean;
        biometricToken?: string;
    };
    biometricTokenUpdated: {
        isUpdated: boolean;
    };
};
export type PopupParams = {
    title?: string;
    message: string;
    buttons?: PopupButton[];
}
export type PopupButton = { id?: string; } & ({
        type: "default" | "destructive";
        text: string;
    } | {
        type: "ok" | "close" | "cancel";
    });
export type ScanQrPopupParams = {
    text?: string;
}
export type InvoiceStatus = "paid" | "cancelled" | "failed" | "pending";