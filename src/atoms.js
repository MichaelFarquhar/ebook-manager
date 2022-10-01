import { atom } from 'recoil';

// The current page of the PDF that is being viewed
export const currentPageState = atom({
    key: 'currentPageState',
    default: 1,
});

// The total number of pages on the loaded pdf
export const totalPagesState = atom({
    key: 'totalPagesState',
    default: 10,
});
