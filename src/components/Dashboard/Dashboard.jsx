import React from 'react';
import { Header } from '../Header';
import { DashboardCard } from './DashboardCard';
import { DashboardMenu } from './DashboardMenu';

export const Dashboard = () => {
    return (
        <div class="container mx-auto">
            <Header />
            <DashboardMenu />
            <DashboardCard />
        </div>
    );
};
