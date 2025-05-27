
import { useState } from 'react';
import { BarChart, Users, Package, DollarSign, ShoppingCart, Activity, Bell, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { useToast } from '../../hooks/use-toast';

const DashboardSection = () => {
  const { toast } = useToast();
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  
  const [metrics] = useState({
    totalProducts: 50,
    totalUsers: 123,
    totalOrders: 45,
    totalRevenue: 12750
  });

  const [storeSettings, setStoreSettings] = useState({
    storeName: 'My Amazing Store',
    storeDescription: 'The best online store for all your needs',
    announcement: 'Welcome to our store! Free shipping on orders over $50.',
    contactEmail: 'contact@mystore.com',
    phoneNumber: '+1 (555) 123-4567'
  });

  const [isEditingSettings, setIsEditingSettings] = useState(false);
  const [tempSettings, setTempSettings] = useState(storeSettings);

  const handleMaintenanceToggle = () => {
    setMaintenanceMode(!maintenanceMode);
    toast({
      title: "Maintenance Mode Updated",
      description: `Maintenance mode is now ${!maintenanceMode ? 'ON' : 'OFF'}`,
    });
  };

  const handleSettingsUpdate = () => {
    setStoreSettings(tempSettings);
    setIsEditingSettings(false);
    toast({
      title: "Settings Updated",
      description: "Store settings have been successfully updated.",
    });
  };

  const handleCancelEdit = () => {
    setTempSettings(storeSettings);
    setIsEditingSettings(false);
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-[800px] mx-auto">
      {/* Maintenance Mode Alert */}
      {maintenanceMode && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="text-amber-800">
              <strong>Maintenance Mode Active</strong> - Your store is currently offline for visitors.
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="bg-none">
          <CardTitle className="flex items-center gap-3 text-gray-800">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Activity className="h-4 w-4 text-purple-500" />
            </div>
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex items-center space-x-4">
              <Label htmlFor="maintenance-mode" className="text-sm font-medium text-gray-700">
                Maintenance Mode
              </Label>
              <div className="flex items-center gap-3">
                <Switch
                  id="maintenance-mode"
                  checked={maintenanceMode}
                  onCheckedChange={handleMaintenanceToggle}
                />
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  maintenanceMode 
                    ? 'text-red-700 bg-red-100' 
                    : 'text-green-700 bg-green-100'
                }`}>
                  {maintenanceMode ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-gray-600" />
              Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Products</CardTitle>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{metrics.totalProducts}</div>
            <p className="text-xs text-gray-600 mt-1">Active inventory items</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">+5 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Users</CardTitle>
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 text-emerald-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{metrics.totalUsers}</div>
            <p className="text-xs text-gray-600 mt-1">Registered customers</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">+12 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Orders</CardTitle>
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{metrics.totalOrders}</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">+8 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Revenue</CardTitle>
            <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-rose-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">${metrics.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">+15% vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Store Settings */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="bg-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <BarChart className="h-4 w-4 text-indigo-500" />
              </div>
              <div>
                <CardTitle className="text-gray-800">Store Settings</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage your store information and announcements
                </CardDescription>
              </div>
            </div>
            {!isEditingSettings ? (
              <Button 
                onClick={() => setIsEditingSettings(true)} 
                variant="outline"
                className="hover:bg-gray-50"
              >
                Edit Settings
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  onClick={handleSettingsUpdate} 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="h-4 w-4 mr-2 text-white" />
                  Save
                </Button>
                <Button onClick={handleCancelEdit} variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {!isEditingSettings ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <Label className="text-sm font-medium text-gray-700">Store Name</Label>
                    <p className="text-lg font-semibold text-gray-900 mt-1">{storeSettings.storeName}</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <Label className="text-sm font-medium text-gray-700">Contact Email</Label>
                    <p className="text-gray-900 mt-1">{storeSettings.contactEmail}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <Label className="text-sm font-medium text-gray-700">Phone Number</Label>
                    <p className="text-gray-900 mt-1">{storeSettings.phoneNumber}</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <Label className="text-sm font-medium text-gray-700">Description</Label>
                    <p className="text-gray-900 mt-1">{storeSettings.storeDescription}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <Label className="text-sm font-medium text-gray-700">Current Announcement</Label>
                <p className="text-gray-900 mt-1">{storeSettings.announcement}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="storeName" className="text-gray-700">Store Name</Label>
                  <Input
                    id="storeName"
                    value={tempSettings.storeName}
                    onChange={(e) => setTempSettings({ ...tempSettings, storeName: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail" className="text-gray-700">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={tempSettings.contactEmail}
                    onChange={(e) => setTempSettings({ ...tempSettings, contactEmail: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="storeDescription" className="text-gray-700">Description</Label>
                <Textarea
                  id="storeDescription"
                  value={tempSettings.storeDescription}
                  onChange={(e) => setTempSettings({ ...tempSettings, storeDescription: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={tempSettings.phoneNumber}
                  onChange={(e) => setTempSettings({ ...tempSettings, phoneNumber: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="announcement" className="text-gray-700">Announcement</Label>
                <Textarea
                  id="announcement"
                  value={tempSettings.announcement}
                  onChange={(e) => setTempSettings({ ...tempSettings, announcement: e.target.value })}
                  className="mt-1"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSection;
