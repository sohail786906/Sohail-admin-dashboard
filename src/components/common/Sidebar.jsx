import { BarChart2, DollarSign, LogOut, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import sohailLogo from '../images/logo.png'; 

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#000", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#ff6c0a", href: "/products" },
  { name: "Users", icon: Users, color: "#3bcbd5", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#00e922", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#f99507", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#00d1c1", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#000", href: "/settings" },
  { name: "Logout", icon: LogOut, color: "#ff0000", href: "/logout" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
      animate={{ width: isSidebarOpen ? "256px" : "80px" }}
    >
      <div className='flex items-center p-4'>
        <img src={sohailLogo} alt="Sohail Logo" className='h-10 w-auto' />
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className='p-2 rounded-full hover:bg-yellow-700 transition-colors max-w-fit'
      >
        <Menu size={24} />
      </motion.button>

      <nav className='mt-8 flex-grow'>
        {SIDEBAR_ITEMS.map((item) => (
          <Link key={item.href} to={item.href}>
            <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-white-700 transition-colors mb-2'>
              <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    className='ml-4 whitespace-nowrap'
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
