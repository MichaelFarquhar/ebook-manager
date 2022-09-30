import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardCard = () => {
    return (
        <div>
            <Link
                to="/file/test"
                className="card card-compact w-max bg-base-100 shadow-xl hover:bg-slate-100 transition"
            >
                <figure>
                    <img src="https://placeimg.com/200/250" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">filename.pdf</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
