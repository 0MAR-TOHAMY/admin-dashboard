import { 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  Home,
  Bell,
  FileText,
  CreditCard
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '../components/ui/sidebar';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    section: "dashboard",
    color: "text-blue-500"
  },
  {
    title: "Products",
    icon: Package,
    section: "products",
    color: "text-green-500"
  },
  {
    title: "Users",
    icon: Users,
    section: "users",
    color: "text-purple-500"
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    section: "orders",
    color: "text-orange-500"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    section: "analytics",
    color: "text-cyan-500"
  },
  {
    title: "Reports",
    icon: FileText,
    section: "reports",
    color: "text-indigo-500"
  },
  {
    title: "Payments",
    icon: CreditCard,
    section: "payments",
    color: "text-emerald-500"
  },
  {
    title: "Notifications",
    icon: Bell,
    section: "notifications",
    color: "text-yellow-500"
  },
  {
    title: "Settings",
    icon: Settings,
    section: "settings",
    color: "text-gray-500"
  },
];

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const AdminSidebar = ({ activeSection, onSectionChange }: AdminSidebarProps) => {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-xs text-gray-500">Management Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-medium">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.section}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.section)}
                    isActive={activeSection === item.section}
                    className="w-full text-base justify-start hover:bg-gray-50 transition-colors"
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-gray-700">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-100">
        <Link to="/">
          <Button variant="outline" size="sm" className="w-full">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
