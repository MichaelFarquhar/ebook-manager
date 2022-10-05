import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderDropdown } from './HeaderDropdown';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { HeaderDropdownAuth } from './HeaderDropdownAuth';

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const onAuth = onAuthStateChanged(auth, (user) => {
            if (user) setIsLoggedIn(true);
            else setIsLoggedIn(false);
        });

        return onAuth;
    });

    return (
        <div className="navbar bg-base-100 mt-4 mb-10">
            <div className="flex-1">
                <Link
                    className="btn btn-ghost normal-case text-xl flex items-centers space-x-2"
                    to={'/'}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 stroke-primary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                    </svg>

                    <span>Ebook Manager</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <a>
                            Account
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        {isLoggedIn ? <HeaderDropdownAuth /> : <HeaderDropdown />}
                    </li>
                </ul>
            </div>
        </div>
    );
};
