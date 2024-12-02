import { atom } from 'nanostores';

export type Tab = 'fri' | 'sat'
export const selectedTabStore = atom<Tab>('fri');
