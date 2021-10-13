export const CHANGE_FAVORITE_STATUS = "CHANGE_FAVORITE_STATUS";
export const RESET_ALL_STATUS = "RESET_ALL_STATUS";

export function changeFavoriteStatus(payload) {
  return { type: "CHANGE_FAVORITE_STATUS", payload };
}

export function resetAll() {
  return { type: "RESET_ALL_STATUS" };
}
