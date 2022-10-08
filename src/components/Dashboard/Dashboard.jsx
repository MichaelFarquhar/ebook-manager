import React from 'react';
import { Header } from '../Header';
import { DashboardCard } from './DashboardCard';
import { DashboardUploadButton } from './DashboardUploadButton';

export const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <DashboardUploadButton />
            <DashboardCard />
        </div>
    );
};
