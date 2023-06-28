export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const userSessionActive = (value: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem(ACCESS_TOKEN, value.accessToken);
  localStorage.setItem(REFRESH_TOKEN, value.refreshToken);
};
export const userSessionInactive = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const getError = (name: string, errors: any) => {
  if (!Object.keys(errors).length) return undefined;

  return name
    .split(".")
    .map((item) => item.replaceAll("[", "").replaceAll("]", ""))
    .reduce((prev, curr: any) => (prev ? prev[curr] : prev), errors);
};
