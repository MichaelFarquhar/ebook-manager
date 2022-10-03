import { atom } from 'recoil';

// ----
// AUTH
// ----

// User is current Logged In
export const isLoggedInState = atom({
    key: 'isLoggedInState',
    default: false,
});

// ----
// PDF
// ----

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
