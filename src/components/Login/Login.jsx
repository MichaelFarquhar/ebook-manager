import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebaseError } from '../../firebase/useFirebaseError';

import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { useFormik } from 'formik';
import { LoginSchema } from '../../validation/auth';
import { InputField } from '../general/InputField';

export const Login = () => {
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useFirebaseError('');

    // If logged in, skip login form and go to profile
    useEffect(() => {
        const onAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/');
            }
        });

        return onAuth;
    });

    // Setup form
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then(() => {
                    navigate('/profile');
                })
                .catch((err) => setFirebaseError(err));
        },
    });

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card-body prose">
                            <h2>Sign In</h2>
                            <InputField
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@email.com"
                                className="input input-bordered"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                error={
                                    formik.touched.email && Boolean(formik.errors.email)
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

                            {firebaseError && (
                                <div className="alert alert-error shadow-lg mt-2">
                                    {firebaseError}
                                </div>
                            )}

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Sign In
                                </button>
                            </div>
                            <div className="form-control mt-2">
                                <Link className="btn" to="/register">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
