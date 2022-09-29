import React from 'react';
import { Header } from '../Header';

export const Dashboard = () => {
    return (
        <div class="container mx-auto">
            <Header />
            <div class="w-max bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="bg-slate-100 px-4 py-3 flex justify-end rounded-t-lg border-b">
                    <div>Test</div>
                    <div>Test</div>
                    <div>Test</div>
                </div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>
        </div>
    );
};
