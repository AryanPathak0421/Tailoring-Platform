import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Camera,
    Shield,
    CreditCard,
    Briefcase,
    Settings,
    MapPin,
    Star,
    Award,
    ChevronRight,
    Clock,
    Plus,
    CheckCircle
} from 'lucide-react';

const TailorProfile = () => {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'Identity', icon: User },
        { id: 'portfolio', label: 'Gallery', icon: Briefcase },
        { id: 'availability', label: 'Availability', icon: Clock },
        { id: 'payout', label: 'Settlement', icon: CreditCard },
    ];

    return (
        <div className="space-y-8 lg:space-y-12 animate-in fade-in duration-700 pb-20">
            {/* Identity Hero - Scaled for Mobile */}
            <div className="relative h-64 sm:h-80 md:h-[400px] rounded-[3rem] overflow-hidden group shadow-2xl ring-1 ring-slate-100">
                <img
                    src="https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-1000"
                    alt="Workshop"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="relative group/avatar cursor-pointer mb-6">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-[2.5rem] border-4 border-white shadow-2xl overflow-hidden relative ring-4 ring-white/20">
                            <img
                                src="https://images.unsplash.com/photo-1540560826466-41999c54839b?auto=format&fit=crop&q=80&w=300"
                                alt="M. Iqbal"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                                <Camera size={24} className="text-white" />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 bg-emerald-500 rounded-2xl border-4 border-white flex items-center justify-center text-white shadow-lg">
                            <Shield size={14} className="lg:w-4 lg:h-4" />
                        </div>
                    </div>

                    <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">Master <span className="text-primary-400">Iqbal</span></h1>
                    <div className="flex items-center gap-4 mt-4 lg:mt-6">
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-emerald-400">
                            <Star size={12} className="fill-emerald-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">4.9 Elite</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
                            <MapPin size={12} />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Mumbai Hub</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation - Horizontal Scroller for Mobile */}
            <div className="flex bg-white p-2 rounded-[2.5rem] shadow-sm border border-slate-100 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[120px] lg:min-w-0 px-6 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all gap-3 flex items-center justify-center whitespace-nowrap ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-2xl' : 'text-slate-400 hover:bg-slate-50'
                            }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8 lg:space-y-12"
                >
                    {activeTab === 'about' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Identity Dossier */}
                            <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-10 group">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-6 bg-primary-600 rounded-full group-hover:h-8 transition-all"></div>
                                    <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Workshop Bio</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Primary Expertise</p>
                                            <p className="text-sm font-black text-slate-800 italic uppercase">Gents Formalwear</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Experience</p>
                                            <p className="text-sm font-black text-slate-800 italic uppercase">12+ Seasons</p>
                                        </div>
                                    </div>
                                    <div className="pt-8 border-t border-slate-50">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Workshop Narrative</p>
                                        <p className="text-xs lg:text-sm text-slate-600 font-bold leading-relaxed italic">
                                            "Specializing in the art of precision tailoring since 2012. Our laboratory focuses on bespoke silhouettes and textile integrity for the discerning modern gentleman."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Stats */}
                            <div className="space-y-8">
                                <div className="bg-emerald-500 p-8 lg:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="space-y-4">
                                            <Award size={32} className="opacity-40" />
                                            <h3 className="text-3xl font-black tracking-tighter italic uppercase leading-tight">Master Guild<br />Verified</h3>
                                        </div>
                                        <CheckCircle size={40} className="text-white/20" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-[60px]" />
                                </div>

                                <div className="bg-white p-8 lg:p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                                    <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest italic leading-none">Verified Credentials</h4>
                                    <div className="space-y-4">
                                        {['Aadhaar Identity', 'Workshop Premise', 'Trade Certificate'].map((item) => (
                                            <div key={item} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-colors">
                                                <span className="text-[10px] font-black text-slate-600 uppercase italic">{item}</span>
                                                <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                                                    <CheckCircle size={12} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'portfolio' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="aspect-[4/5] bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=300`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        alt="Portfolio"
                                    />
                                </motion.div>
                            ))}
                            <div className="aspect-[4/5] bg-slate-50 border-4 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-300 hover:bg-primary-50 hover:border-primary-100 transition-all cursor-pointer group">
                                <Plus size={40} className="group-hover:scale-110 transition-transform text-slate-400" />
                                <span className="text-[10px] font-black uppercase mt-4 tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-primary-600">Add Project</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'payout' && (
                        <div className="max-w-xl mx-auto space-y-8">
                            <div className="bg-slate-900 p-8 lg:p-12 rounded-[3.5rem] text-white shadow-3xl text-center space-y-8 relative overflow-hidden group">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Clearance Active</p>
                                <h3 className="text-5xl lg:text-6xl font-black italic tracking-tighter">₹42,100</h3>
                                <button className="w-full bg-primary-600 text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary-500/30 hover:bg-primary-500 transition-all active:scale-95 relative z-10">
                                    Initiate Settlement
                                </button>
                                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
                            </div>

                            <div className="bg-white p-8 lg:p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest italic leading-none border-b border-slate-50 pb-6">Settlement Ledger</h4>
                                <div className="space-y-4">
                                    {[1, 2].map(i => (
                                        <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary-100 transition-all">
                                            <div>
                                                <p className="text-[10px] font-black text-slate-900 uppercase italic">#TR-882{i}</p>
                                                <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">20 Feb, 2026</p>
                                            </div>
                                            <p className="text-lg font-black text-slate-900 italic">+₹12,450</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TailorProfile;
