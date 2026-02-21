import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Filter, LayoutGrid, List, TrendingUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Projects = () => {
    // Crypto/Web3 Project Data Mock
    const projects = [
        { id: 1, title: 'NFT Marketplace V2', client: 'OpenSea', status: 'In Progress', progress: 65, team: ['JD', 'AL', 'ZK'], deadline: 'Oct 24', budget: '12 ETH', type: 'DApp' },
        { id: 2, title: 'Token Smart Contract', client: 'DeFi Protocol', status: 'Auditing', progress: 95, team: ['ZK', 'JD'], deadline: 'Sep 12', budget: '5.5 ETH', type: 'Smart Contract' },
        { id: 3, title: 'Wallet Integration', client: 'Metamask', status: 'Pending', progress: 15, team: ['AL'], deadline: 'Nov 01', budget: '8 ETH', type: 'Backend' },
        { id: 4, title: 'DAO Governance Portal', client: 'Uniswap', status: 'In Progress', progress: 45, team: ['JD', 'AL', 'ZK'], deadline: 'Oct 30', budget: '15 ETH', type: 'Frontend' },
        { id: 5, title: 'Cross-Chain Bridge', client: 'Polygon', status: 'Testing', progress: 90, team: ['JD'], deadline: 'Oct 15', budget: '20 ETH', type: 'Infrastructure' },
        { id: 6, title: 'Staking Dashboard', client: 'Liquid Stake', status: 'In Progress', progress: 30, team: ['AL', 'ZK'], deadline: 'Nov 12', budget: '4.2 ETH', type: 'UI/UX' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'In Progress': return 'bg-primary/10 text-primary border-primary/20';
            case 'Pending': return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
            case 'Auditing': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
            case 'Testing': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
            default: return 'bg-dark-700 text-gray-400';
        }
    };

    return (
        <div className="space-y-8 animate-fade-in font-sans text-white pt-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-dark-600 pb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Active Projects: <span className="text-white font-bold">12</span></span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span>Total Value: <span className="text-white font-bold">245 ETH</span></span>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative group flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            placeholder="Search project..."
                            className="pl-10 pr-4 py-2.5 bg-dark-800 border border-dark-600 rounded-xl text-sm focus:outline-none focus:border-primary w-full md:w-64 transition-all"
                        />
                    </div>

                    <button className="p-2.5 bg-dark-800 border border-dark-600 rounded-xl hover:bg-dark-700 text-gray-400 hover:text-white transition-colors">
                        <Filter className="w-4 h-4" />
                    </button>

                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 transition-all active:scale-95">
                        <Plus className="w-4 h-4" /> New Project
                    </button>
                </div>
            </div>

            {/* View Toggle (Mock) */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 bg-dark-800 p-1 rounded-lg border border-dark-600">
                    <button className="p-1.5 bg-dark-600 rounded text-white shadow-sm"><LayoutGrid className="w-4 h-4" /></button>
                    <button className="p-1.5 text-gray-500 hover:text-white"><List className="w-4 h-4" /></button>
                </div>

                <button className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1">
                    Sort by: Deadline <ChevronDown className="w-3 h-3" />
                </button>
            </div>

            {/* Project Grid - High Art Style */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={project.id} className="group relative bg-[#0F172A] rounded-xl overflow-hidden border border-blue-900/30 flex h-64 hover:border-blue-500/50 transition-all duration-500 shadow-2xl">

                        {/* 30% Image Section */}
                        <div className="w-[30%] relative overflow-hidden">
                            <img
                                src={`https://images.unsplash.com/photo-${1600000000000 + project.id}?auto=format&fit=crop&q=80&w=800`}
                                alt="Project Art"
                                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-black/60 backdrop-blur-md text-[10px] font-black text-white px-3 py-1.5 rounded-full border border-white/10 tracking-widest uppercase">
                                    {project.type}
                                </span>
                            </div>
                        </div>

                        {/* 70% Data Section */}
                        <div className="w-[70%] p-8 flex flex-col relative bg-gradient-to-br from-[#0F172A] to-[#1E293B]/50">

                            {/* Header Row */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-black text-white italic tracking-tighter group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.3em] mt-1">
                                        NODE: {project.client}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-green-400 font-mono text-xs">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>+12.5%</span>
                                    </div>
                                    <span className={twMerge("text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border block mt-1", getStatusColor(project.status))}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Middle Row: Stats */}
                            <div className="flex flex-1 gap-8 items-center">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Allocation</p>
                                    <p className="text-xl font-black text-yellow-400 tracking-tighter">{project.budget}</p>
                                </div>
                                <div className="w-px h-10 bg-blue-900/30" />
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Temporal Unit</p>
                                    <p className="text-xl font-black text-orange-500 tracking-tighter">{project.deadline}</p>
                                </div>
                                <div className="ml-auto w-24 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {/* Mock Graph Visual */}
                                    <svg viewBox="0 0 100 40" className="w-full h-full text-blue-500">
                                        <path
                                            d="M0 35 Q 25 35, 40 20 T 70 25 T 100 5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Footer Row: Progress & Team */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="w-48 space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-slate-400 italic">Sync Rate</span>
                                        <span className="text-blue-400">{project.progress}%</span>
                                    </div>
                                    <div className="h-1 bg-blue-900/30 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="flex -space-x-2">
                                    {project.team.map((m, i) => (
                                        <div key={i} className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/20 flex items-center justify-center text-[9px] font-black text-blue-400 uppercase shadow-xl transition-transform group-hover:-translate-y-1" style={{ transitionDelay: `${i * 100}ms` }}>
                                            {m}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Aesthetic Add Button */}
                <div className="border-2 border-dashed border-blue-900/30 rounded-xl flex flex-col items-center justify-center p-8 hover:border-blue-500/50 hover:bg-blue-900/5 transition-all cursor-pointer group h-64">
                    <div className="w-16 h-16 rounded-full bg-blue-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all border border-blue-500/10 group-hover:border-blue-500/40">
                        <Plus className="w-8 h-8 text-blue-500" />
                    </div>
                    <span className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Initialize New Node</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;
