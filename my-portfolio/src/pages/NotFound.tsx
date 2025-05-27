import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
        );
    }, [location.pathname]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-md w-full animate-scale-in">
            <Card className="shadow-none border-0 bg-transparent backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
                <CardTitle className="text-9xl font-bold text-red-400 mb-2 animate-bounce">
                404
                </CardTitle>
                <p className="text-xl text-gray-600 mb-2">
                Oops! Page not found
                </p>
                <p className="text-gray-500">
                The page you're looking for doesn't exist
                </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border">
                <div className="flex items-center justify-center gap-3">
                    <ArrowLeft className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-gray-700">
                    Let's get you back on track
                    </span>
                </div>
                </div>

                <Link to="/" className="block">
                <Button 
                    size="lg"
                    className="w-full h-12 text-base font-medium bg-gradient-to-r from-red-400 to-orange-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-101"
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

export default NotFound;
