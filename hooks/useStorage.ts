export default function useStorage() {
  const get = <T = any>(key: string) => {
    const val = localStorage.getItem(key);
    if (!val) return null;

    try {
      return JSON.parse(val) as T;
    } catch (e) {
      return val as T;
    }
  };

  const set = (key: string, value: any) => {
    if (typeof value === "object")
      return localStorage.setItem(key, JSON.stringify(value));
    return localStorage.setItem(key, value);
  };

  const remove = (key: string) => localStorage.removeItem(key);

  return [get, set, remove];
}
