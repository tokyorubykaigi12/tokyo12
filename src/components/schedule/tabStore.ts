import { atom } from "nanostores";

export type Tab = "fri" | "sat";

const urlParams = new URLSearchParams(window.location.search);

function getDefaultValue(): Tab {
  const value = urlParams.get("tab");
  if (value !== null && (value === "fri" || value === "sat")) {
    return value;
  }

  return "fri"; // for temporary
}

export const selectedTabStore = atom<Tab>(getDefaultValue());
