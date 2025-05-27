import { Shield, Home, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const NotAllowed = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-md w-full animate-scale-in">
            <Card className="shadow-none border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="h-10 w-10 text-red-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                Access Denied
                </CardTitle>
                <p className="text-gray-600">
                You don't have permission to access the admin dashboard
                </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border text-center">
                <Shield className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Admin Access Required</p>
                <p className="text-sm text-gray-500 mt-1">
                    This area is restricted to administrators only
                </p>
                </div>

                <Link to="/" className="block">
                <Button 
                    size="lg"
                    className="w-full h-12 text-base font-medium bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    <Home className="h-5 w-5 mr-2" />
                    Return to Home
                </Button>
                </Link>
            </CardContent>
            </Card>
        </div>
        </div>
    );
};

export default NotAllowed;
