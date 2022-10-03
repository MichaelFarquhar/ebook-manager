import { useState } from 'react';

// Will format a firebase error given the error code
export const useFirebaseError = (initialError) => {
    const [firebaseError, setError] = useState(initialError);

    const setFirebaseError = (error) => {
        let errorString = '';
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorString = 'Email already in use.';
                break;
            case 'auth/invalid-email':
                errorString = 'Please enter a valid email.';
                break;
            case 'auth/wrong-password':
                errorString = 'The password you entered is incorrect.';
                break;
            case 'auth/user-not-found':
                errorString = 'No account found for that email.';
                break;
            default:
                errorString = error.message;
        }
        setError(errorString);
    };

    return [firebaseError, setFirebaseError];
};
