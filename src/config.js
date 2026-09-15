/**
 * The deployed Texas Cancer Data Explorer app.
 *
 * Set this one value and it wires up all three places the Compass appears:
 *   - the embedded map on the home page
 *   - the "Open the Compass" button in the nav
 *   - the Compass link in the footer
 *
 * While it is null, the map section shows a placeholder and those links just
 * scroll to the map section instead, so nothing looks broken before it ships.
 */
export const COMPASS_URL = 'https://texascancer.netlify.app'
