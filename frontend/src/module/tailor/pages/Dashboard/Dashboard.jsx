import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scissors,
    ShoppingBag,
    TrendingUp,
    Star,
    IndianRupee,
    ArrowUpRight,
    ArrowDownRight,
    ChevronRight,
    Activity,
    Wallet,
    Clock
} from 'lucide-react';

const Dashboard = () => {
    const [reportTab, setReportTab] = useState('weekly');

    const stats = [
        {
            label: 'Net Earnings',
            value: reportTab === 'daily' ? '₹2,450' : reportTab === 'weekly' ? '₹18,240' : '₹52,840',
            icon: IndianRupee,
            color: 'bg-emerald-500',
            trend: '+18.5%',
            positive: true,
            subtext: 'Revenue Hub'
        },
        {
            label: 'Work Orders',
            value: reportTab === 'daily' ? '3' : reportTab === 'weekly' ? '12' : '42',
            icon: Scissors,
            color: 'bg-blue-500',
            trend: '+12%',
            positive: true,
            subtext: 'Queue'
        },
        {
            label: 'Shop Sales',
            value: reportTab === 'daily' ? '1' : reportTab === 'weekly' ? '5' : '18',
            icon: ShoppingBag,
            color: 'bg-primary-500',
            trend: '+24%',
            positive: true,
            subtext: 'Listings'
        },
        {
            label: 'Rating',
            value: '4.9',
            icon: Star,
            color: 'bg-amber-500',
            trend: 'Master',
            positive: true,
            subtext: 'Top Performer'
        },
    ];

    const chartData = {
        daily: [20, 45, 30, 80, 55, 90, 40],
        weekly: [50, 70, 40, 95, 60, 85, 100],
        monthly: [80, 60, 90, 75, 100, 85, 95]
    };

    const recentOrders = [
        { id: 'ST-9921', type: 'Stitching', customer: 'Suresh Kumar', item: 'Executive 3-Piece Suit', status: 'Cutting', price: '₹2,450', date: 'Just now' },
        { id: 'SH-7612', type: 'Shop', customer: 'Anisha Roy', item: 'Linen Kurti (Large)', status: 'Packed', price: '₹1,200', date: '2 hours ago' },
        { id: 'ST-9884', type: 'Stitching', customer: 'Rahul Sharma', item: 'Formal Cotton Shirt', status: 'Ready', price: '₹850', date: '5 hours ago' },
    ];

    return (
        <div className="space-y-8 lg:space-y-12 animate-in fade-in duration-700">
            {/* Mobile Header Section */}
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        Workshop <span className="text-primary-600">Pulse</span>
                    </h1>
                    <p className="text-slate-500 text-xs lg:text-sm font-medium mt-3">Welcome, Master Iqbal. Efficiency is at 98% today.</p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
                    <div className="bg-white p-3 lg:p-4 rounded-2xl border border-slate-100 shadow-sm flex-1">
                        <p className="text-[8px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Payout</p>
                        <p className="text-xs lg:text-sm font-black text-slate-800 tracking-tight italic mt-1 uppercase">02 March</p>
                    </div>
                    <button className="bg-primary-600 text-white px-5 lg:px-8 py-4 rounded-2xl font-black text-[9px] lg:text-[10px] uppercase tracking-widest shadow-xl shadow-primary-100 hover:bg-primary-500 active:scale-95 transition-all flex items-center justify-center gap-2 flex-1 shadow-none lg:shadow-xl">
                        <TrendingUp size={14} className="lg:w-4 lg:h-4" /> <span className="whitespace-nowrap">Analytics</span>
                    </button>
                </div>
            </div>

            {/* Quick Stats Grid - Mobile Multi-Column */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white p-5 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 shadow-sm group overflow-hidden relative"
                    >
                        <div className="flex items-center justify-between relative z-10">
                            <div className={`${stat.color} w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                                <stat.icon size={18} className="lg:w-6 lg:h-6" />
                            </div>
                            <div className="flex items-center gap-1 text-[8px] lg:text-[10px] font-black px-2 py-0.5 lg:py-1 rounded-full bg-slate-50 text-slate-500">
                                {stat.trend}
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-8 relative z-10">
                            <p className="text-slate-400 text-[8px] lg:text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-xl lg:text-3xl font-black text-slate-900 mt-1 tracking-tight italic">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Operational Matrix */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
                <div className="xl:col-span-2 space-y-8 lg:space-y-12">
                    {/* Period Switcher */}
                    <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm w-full sm:w-fit overflow-x-auto scrollbar-hide shrink-0">
                        {['daily', 'weekly', 'monthly'].map((period) => (
                            <button
                                key={period}
                                onClick={() => setReportTab(period)}
                                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${reportTab === period ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400'
                                    }`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                        <div className="flex items-center gap-3">
                            <Activity size={20} className="text-primary-600" />
                            <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Productivity</h2>
                        </div>
                        <div className="flex items-end justify-between gap-2 lg:gap-4 h-48 lg:h-64 pt-4">
                            {chartData[reportTab].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                    <div className="w-full relative flex-1 bg-slate-50 rounded-xl lg:rounded-2xl overflow-hidden">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-xl"
                                        />
                                    </div>
                                    <span className="text-[8px] lg:text-[10px] font-black text-slate-300 uppercase shrink-0">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Active Order Stream Table - Mobile List View */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Active Reel</h2>
                            <button className="text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline">View All</button>
                        </div>

                        <div className="space-y-4">
                            {recentOrders.map((order) => (
                                <motion.div
                                    key={order.id}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 group cursor-pointer"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-inner ${order.type === 'Stitching' ? 'bg-blue-50 text-blue-500' : 'bg-primary-50 text-primary-500'}`}>
                                            {order.type === 'Stitching' ? <Scissors size={20} /> : <ShoppingBag size={20} />}
                                        </div>
                                        <div>
                                            <p className="text-sm lg:text-base font-black text-slate-900 uppercase tracking-tight italic leading-none">{order.item}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">#{order.id}</span>
                                                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                                <span className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{order.customer}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-4 sm:pt-0">
                                        <div className="text-left sm:text-right">
                                            <p className="text-lg font-black text-slate-900 italic leading-none">{order.price}</p>
                                            <p className={`text-[8px] lg:text-[9px] font-black uppercase mt-1.5 ${order.status === 'Ready' ? 'text-emerald-500' : 'text-amber-500'}`}>{order.status}</p>
                                        </div>
                                        <ChevronRight size={18} className="text-slate-300 group-hover:text-primary-600 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Performance & Insights */}
                <div className="space-y-8 lg:space-y-12">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-col gap-6 lg:gap-12">
                        {/* Payout Card */}
                        <div className="bg-slate-900 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                                    <Wallet size={20} />
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">Settlement</h4>
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-black tracking-tighter italic font-sans italic">₹42,100</h3>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mt-3 italic">Verified Clearance Pending</p>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-600 opacity-20 rounded-full blur-[60px]" />
                        </div>

                        {/* Efficiency Score */}
                        <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-sm text-center relative overflow-hidden group">
                            <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-8">Artisan Index</h4>
                            <div className="relative inline-flex items-center justify-center">
                                <svg className="w-40 h-40 lg:w-48 lg:h-48 -rotate-90">
                                    <circle cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-50" />
                                    <circle cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="264" strokeDashoffset="21" strokeLinecap="round" className="text-primary-600 transition-all duration-1000 group-hover:stroke-primary-500" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter italic italic">92%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Stream */}
                    <div className="bg-white p-6 lg:p-8 rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                            <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest italic leading-none">Reviews</h4>
                            <Star size={14} className="text-amber-400 fill-amber-400" />
                        </div>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white transition-all group">
                                    <p className="text-xs font-bold text-slate-700 italic leading-relaxed">"Masterful fit. The silhouette is absolute perfection."</p>
                                    <p className="text-[8px] text-slate-400 font-black uppercase mt-3 tracking-widest">— Client #{i}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
