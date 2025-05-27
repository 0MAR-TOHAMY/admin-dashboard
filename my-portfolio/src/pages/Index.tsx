import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, User, UserCheck } from 'lucide-react';

const Index = () => {

    const getAdminStatus = () => {
    const stored = localStorage.getItem("isAdmin");
    return stored ? JSON.parse(stored) : true;
    };

    const [isAdmin, setIsAdmin] = useState(getAdminStatus());
    useEffect(() => {
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    console.log("Admin status updated:", isAdmin);
    }, [isAdmin]);

    const toggleUserState = () => {
    setIsAdmin(!isAdmin);
    };

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-md w-full animate-scale-in">
        <Card className="shadow-none border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                Store Management
            </CardTitle>
            <p className="text-gray-600">Test the admin security system</p>
            </CardHeader>

            <CardContent className="space-y-6">
            {/* User Status Display */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border">
                <div className="flex items-center justify-center gap-3">
                {isAdmin ? (
                    <UserCheck className="h-5 w-5 text-green-600" />
                ) : (
                    <User className="h-5 w-5 text-blue-600" />
                )}
                <span className="font-medium text-gray-700">
                    Current Status: {isAdmin ? "Admin" : "User"}
                </span>
                </div>
            </div>

            {/* Toggle User State Button */}
            <Button
                onClick={toggleUserState}
                variant="outline"
                size="lg"
                className="w-full h-12 text-base font-medium border-1 hover:bg-gray-50 transition-all duration-200 hover:scale-101"
            >
                <User className="h-5 w-5 mr-2" />
                Switch to {isAdmin ? "User" : "Admin"}
            </Button>

            {/* Admin Dashboard Button */}
            <Link to="/admin" className="block">
                <Button
                size="lg"
                className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-101"
                >
                <Shield className="h-5 w-5 mr-2" />
                Access Admin Dashboard
                </Button>
            </Link>

            <p className="text-sm text-gray-500 text-center">
                {isAdmin
                ? "You have admin access - dashboard will load normally"
                : "You don't have admin access - will be redirected"}
            </p>
            </CardContent>
        </Card>
        </div>
    </div>
    );
};

export default Index;
