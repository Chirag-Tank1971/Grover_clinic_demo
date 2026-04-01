export const tr = (value, lang) => {
  if (value && typeof value === "object" && ("en" in value || "hi" in value)) {
    return value[lang] || value.en;
  }
  return value;
};
