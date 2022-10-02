import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body prose">
                        <h2>Sign In</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name@email.com"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="••••••"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                        <div className="form-control mt-2">
                            <Link className="btn" to="/register">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
