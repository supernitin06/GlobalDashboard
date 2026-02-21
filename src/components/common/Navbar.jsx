import React, { useState } from 'react';
import { Search, Bell, Settings, HelpCircle, Sun, Moon, CreditCard, ChevronDown, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const { user } = useAuth();
    const [active, setActive] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 h-20 z-40 pl-72 transition-all duration-300 pointer-events-none bg-transparent">
            <div className="h-full w-full px-8 flex items-center justify-between pointer-events-auto backdrop-blur-md bg-dark-900/90 border-b border-dark-600/50 shadow-lg">

                {/* Enhanced Search - Pill Style */}
                <div className="flex-1 max-w-xl relative group focus-within:max-w-2xl transition-all duration-500">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors duration-300" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search projects, clients, data..."
                        className="block w-full pl-14 pr-6 py-3 bg-dark-800/90 border border-dark-600 rounded-xl text-sm placeholder-text-muted text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-dark-800 focus:border-primary transition-all duration-300 hover:border-primary/50 shadow-lg"
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                    />
                    <div className={twMerge("absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary/20 rounded-lg text-[10px] text-primary font-mono opacity-0 transition-opacity duration-300 border border-primary/30", active && "opacity-100")}>
                        /
                    </div>
                </div>

                {/* Actions & Profile */}
                <div className="flex items-center gap-6 ml-8">
                    {/* Quick Stats */}
                    <div className="hidden xl:flex items-center gap-4 border-r border-dark-600 pr-8 mr-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-text-muted">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Live Projects
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-text-muted">
                            <Sun className="w-4 h-4 text-yellow" />
                            85 Active
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative p-3 rounded-xl bg-dark-800 border border-dark-600 hover:bg-dark-700 hover:border-primary/50 text-text-muted hover:text-white transition-all duration-200 group shadow-lg hover:shadow-primary/20">
                            <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-dark-800 animate-pulse"></span>
                        </button>
                        <button className="p-3 rounded-xl bg-dark-800 border border-dark-600 hover:bg-dark-700 hover:border-primary/50 text-text-muted hover:text-white transition-all duration-200 hover:rotate-90 shadow-lg hover:shadow-primary/20">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Profile Dropdown Simulation */}
                    <div className="flex items-center gap-4 pl-2 cursor-pointer group bg-dark-800 pr-2 pl-4 py-2 rounded-xl border border-dark-600 hover:border-primary transition-all shadow-lg hover:shadow-primary/20">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{user?.name || 'Admin User'}</p>
                            <p className="text-[10px] text-text-muted font-bold tracking-wide uppercase">{user?.role || 'Admin'}</p>
                        </div>
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-dark-700 p-0.5 border border-dark-600 overflow-hidden group-hover:scale-105 transition-transform group-hover:border-primary">
                                <div className="w-full h-full bg-gradient-to-br from-primary to-yellow flex items-center justify-center text-white font-bold text-xs">
                                    {user?.name?.charAt(0) || 'A'}
                                </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-dark-900 rounded-full flex items-center justify-center border border-dark-600">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                            </div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
