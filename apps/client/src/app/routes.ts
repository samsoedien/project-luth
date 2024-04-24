/**
 * An array of routes that are public and do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/']

/**
 * An array of routes that require authentication
 * @type {string[]}
 */
export const authRoutes = ['/auth/signin', '/auth/signup']

/**
 * The prefix for the API routes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/'

// TODO: Implement routes in middleware
