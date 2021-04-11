export const storage = {
  getItem(key, initialValue) {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const unparsedValue = localStorage[key];
      if (typeof unparsedValue === "undefined") {
        return initialValue;
      }

      return JSON.parse(unparsedValue);
    } catch (error) {
      return initialValue;
    }
  },

  setItem(key, value) {
    if (typeof window !== "undefined") {
      localStorage[key] = JSON.stringify(value);
      console.log("local state has been set", key);
    }
  },
};
