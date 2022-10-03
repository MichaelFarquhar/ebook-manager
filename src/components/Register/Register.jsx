import { useState } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { RegisterSchema } from '../../validation/auth';
import { InputField } from '../general/InputField';
import { useFirebaseError } from '../../firebase/useFirebaseError';

const RegisterComplete = () => {
    return (
        <div className="card-body prose">
            <div className="alert alert-success shadow-lg mb-4">
                Successfully registered new account.
            </div>
            <Link className="btn" to="/login">
                Proceed To Login
            </Link>
        </div>
    );
};

export const Register = () => {
    const [registerComplete, setRegisterComplete] = useState(false);
    const [firebaseError, setFirebaseError] = useFirebaseError('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(() => {
                    setRegisterComplete(true);
                    signOut(auth);
                })
                .catch((err) => setFirebaseError(err));
        },
    });

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {registerComplete ? (
                        <RegisterComplete />
                    ) : (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body prose">
                                <h2>Create Account</h2>
                                <InputField
                                    label="Email"
                                    id="email"
                                    name="email"
                                    placeholder="name@email.com"
                                    className="input input-bordered"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error={
                                        formik.touched.email &&
                                        Boolean(formik.errors.email)
                                    }
                                    errorText={formik.errors.email}
                                />
                                <InputField
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••"
                                    className="input input-bordered"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    error={
                                        formik.touched.password &&
                                        Boolean(formik.errors.password)
                                    }
                                    errorText={formik.errors.password}
                                />
                                <InputField
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="••••••"
                                    className="input input-bordered"
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                    error={
                                        formik.touched.confirmPassword &&
                                        Boolean(formik.errors.confirmPassword)
                                    }
                                    errorText={formik.errors.confirmPassword}
                                />

                                {firebaseError && (
                                    <div className="alert alert-error shadow-lg mt-2">
                                        {firebaseError}
                                    </div>
                                )}

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
