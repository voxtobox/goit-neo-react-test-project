export const DEFAULT_TITLE = 'Traver Trucks';
export const DEFAULT_DESCRIPTION =
  'Rent a modern, fully-equipped travel truck for your next adventure. Enjoy affordable prices, easy booking, and exceptional support for road trips, family vacations, and getaways.';

// To setup page title and description
export function setPageMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
} = {}) {
  document.title = title;
  document.getElementsByTagName('meta')['description'].content = description;
}
