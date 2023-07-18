export const API_VERSION_STR = "/rest/v1.1";

export const SITE = "react479.wordpress.com";

export const SITE_URL = `${API_VERSION_STR}/sites/${SITE}`;

export const POST_URL = `${SITE_URL}/posts`;

export const NEW_POST_URL = `${SITE_URL}/posts/new`;

export const AUTH_URL = `https://public-api.wordpress.com/oauth2/authorize?client_id=88600&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token`;

export const SETTINGS_URL = `${API_VERSION_STR}/me/settings/`;
