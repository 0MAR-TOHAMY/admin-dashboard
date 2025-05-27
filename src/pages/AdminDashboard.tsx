import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '../components/ui/sidebar';
import AdminSidebar from '../components/AdminSidebar';
import DashboardSection from '../components/admin/DashboardSection';
import TestSection from '../components/admin/TestSection';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const getAdminStatus = () => {
        const stored = localStorage.getItem('isAdmin');
        return stored ? JSON.parse(stored) : true;
    };
    const [isAdmin] = useState(getAdminStatus());
    const [activeSection, setActiveSection] = useState('dashboard');
    useEffect(() => {
        console.log('Admin check:', isAdmin);
        if (!isAdmin) {
        console.log('Redirecting to not-allowed page');
        navigate('/not-allowed');
        return;
        }
    }, [isAdmin, navigate]);
    if (!isAdmin) {
        return null;
    }

    const renderActiveSection = () => {
        switch (activeSection) {
        case 'dashboard':
            return <DashboardSection />;
        case 'products':
            return <TestSection />;
        case 'users':
            return <TestSection />;
        case 'orders':
            return <TestSection />;
        case 'analytics':
            return <TestSection />;
        case 'reports':
            return <TestSection />;
        case 'payments':
            return <TestSection />;
        case 'notifications':
            return <TestSection />;
        case 'settings':
            return <TestSection />;
        default:
            return <TestSection />;
        }
    };

    return (
        <div className="min-h-screen bg-white w-full">
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
            <AdminSidebar 
                activeSection={activeSection} 
                onSectionChange={setActiveSection} 
            />
            
            <SidebarInset className="flex-1">
                {/* Header */}
                <div className="bg-white sticky top-0 z-10">
                <div className="flex items-center h-16 px-4">
                    <SidebarTrigger className="mr-4" />
                </div>
                </div>
                <main className="flex-1 p-6">
                {renderActiveSection()}
                </main>
            </SidebarInset>
            </div>
        </SidebarProvider>
        </div>
    );
};

export default AdminDashboard;
