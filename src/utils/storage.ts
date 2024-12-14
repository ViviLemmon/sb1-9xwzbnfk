const STORAGE_PREFIX = '@gabinete:';

export const storage = {
  get(key: string) {
    const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    return item ? JSON.parse(item) : null;
  },

  set(key: string, value: any) {
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
  },

  remove(key: string) {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
  },

  clear() {
    localStorage.clear();
  }
};