import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <section class="min-h-screen flex items-center">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
                        404
                    </h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
                        Something's missing.
                    </p>
                    <p class="mb-4 text-lg font-light text-gray-500">
                        Sorry, we can't find that page.
                    </p>
                    <Link to="/" class="btn btn-primary text-center my-4">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};
