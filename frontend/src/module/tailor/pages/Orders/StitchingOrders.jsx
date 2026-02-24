import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Scissors,
    Layers,
    Shirt,
    ChevronRight,
    CheckCircle2,
    XCircle,
    Clock,
    Camera,
    MessageSquare,
    Check,
    X,
    Filter
} from 'lucide-react';

const stitchingSteps = [
    { id: 'cutting', label: 'Cutting', icon: Scissors },
    { id: 'stitching', label: 'Stitching', icon: Layers },
    { id: 'hemming', label: 'Hemming', icon: Shirt },
    { id: 'ironing', label: 'Ironing', icon: Shirt },
    { id: 'ready', label: 'Ready', icon: CheckCircle2 },
];

const mockOrders = [
    {
        id: 'ST-1024',
        customer: 'Amit Patel',
        type: 'Bespoke Suit',
        fabric: 'Midnight Blue Cashmere',
        deadline: 'Tomorrow, 04:00 PM',
        price: '₹2,850',
        status: 'stitching',
        measurements: { chest: '42"', waist: '36"', shoulder: '18"', sleeve: '25"', length: '30"' },
        isNew: true,
        designNotes: 'Slim fit cut, peak lapels, double vents on jacket.'
    },
    {
        id: 'ST-0998',
        customer: 'Sara Jones',
        type: 'Salwar Suits',
        fabric: 'Pure Banarasi Silk',
        deadline: '28 Feb, 2026',
        price: '₹1,500',
        status: 'cutting',
        measurements: { bust: '36"', waist: '30"', hip: '38"', length: '42"', sleeve: '16"' },
        isNew: false,
        designNotes: 'V-neck design with heavy embroidery on borders.'
    }
];

const StitchingOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [activeTab, setActiveTab] = useState('active');
    const [pendingOrders, setPendingOrders] = useState([
        { id: 'REQ-5521', customer: 'Rahul Verma', type: 'Formal Shirt', deadline: '05 Mar', price: '₹950' },
        { id: 'REQ-5510', customer: 'Priya Sharma', type: 'Ladies Salwar', deadline: '02 Mar', price: '₹650' }
    ]);

    return (
        <div className="space-y-8 lg:space-y-12 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        Work <span className="text-primary-600">Reel</span>
                    </h1>
                    <p className="text-slate-500 text-xs lg:text-sm font-medium mt-3">Precision management of your active workshop queue.</p>
                </div>

                <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 w-full sm:w-fit overflow-x-auto scrollbar-hide">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`flex-1 sm:flex-none px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'active' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}
                    >
                        Active Reel
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`flex-1 sm:flex-none px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'completed' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}
                    >
                        Dispatched
                    </button>
                </div>
            </div>

            {/* Pending Requests Visualizer - Optimized for Mobile Scrolling */}
            <AnimatePresence>
                {pendingOrders.length > 0 && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">Workshop Requests</h2>
                            </div>
                            <span className="text-[10px] font-black text-slate-400 bg-white border border-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{pendingOrders.length} Pending</span>
                        </div>

                        <div className="flex overflow-x-auto gap-4 lg:gap-8 scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0 lg:grid lg:grid-cols-2 lg:overflow-visible">
                            {pendingOrders.map(order => (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="min-w-[280px] sm:min-w-[340px] lg:min-w-0 bg-white border-2 border-primary-100 rounded-[2.5rem] p-6 lg:p-8 shadow-xl shadow-primary-50 relative overflow-hidden group shrink-0"
                                >
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="flex gap-4 lg:gap-6">
                                            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                                <Scissors size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-primary-600 uppercase tracking-widest leading-none italic">#{order.id}</p>
                                                <h4 className="text-base lg:text-lg font-black text-slate-800 tracking-tight mt-2 uppercase italic leading-none">{order.type}</h4>
                                                <p className="text-[9px] text-slate-400 font-bold uppercase mt-2 italic tracking-widest">{order.deadline} • {order.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 mt-8 relative z-10">
                                        <button className="flex-1 bg-primary-600 text-white py-3.5 rounded-xl font-black text-[9px] lg:text-[10px] uppercase tracking-widest shadow-lg shadow-primary-100 transition-all active:scale-95">Accept Dossier</button>
                                        <button className="px-5 bg-slate-50 text-slate-400 hover:text-rose-500 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all">Reject</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* Active Reel Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
                {/* List Container */}
                <div className="xl:col-span-2 space-y-6 lg:space-y-8">
                    {mockOrders.map((order) => (
                        <motion.div
                            key={order.id}
                            onClick={() => setSelectedOrder(order)}
                            whileTap={{ scale: 0.98 }}
                            className={`bg-white p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] border transition-all duration-500 cursor-pointer shadow-sm flex flex-col gap-8 ${selectedOrder?.id === order.id ? 'border-primary-500 ring-4 ring-primary-50 shadow-2xl translate-x-2' : 'border-slate-100 hover:border-primary-100'
                                }`}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                <div className="flex gap-5 lg:gap-6">
                                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 border border-slate-100 shadow-inner">
                                        <Shirt size={24} className="lg:w-7 lg:h-7" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[9px] lg:text-[10px] font-black text-primary-600 uppercase tracking-widest leading-none italic">#{order.id}</span>
                                            {order.isNew && (
                                                <span className="bg-rose-500 text-white text-[7px] lg:text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest animate-pulse">Priority</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-black text-slate-800 tracking-tight mt-2 uppercase italic leading-none">{order.type}</h3>
                                        <p className="text-[9px] lg:text-[10px] text-slate-400 font-bold uppercase mt-2.5 tracking-widest">Master: <span className="text-slate-900 font-black italic">{order.customer}</span></p>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-right">
                                    <p className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter italic">{order.price}</p>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-600 rounded-lg mt-2 justify-end">
                                        <Clock size={12} />
                                        <span className="text-[9px] font-black uppercase tracking-widest">{order.deadline}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Step Indicator Visualizer - Scrollable on Mobile or Flex Wrapped */}
                            <div className="relative pt-2 pb-6 px-1 overflow-x-auto scrollbar-hide sm:overflow-visible">
                                <div className="absolute top-6 left-0 w-full h-1 bg-slate-100 rounded-full"></div>
                                <div
                                    className="absolute top-6 left-0 h-1 bg-primary-600 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all duration-1000"
                                    style={{ width: `${(stitchingSteps.findIndex(s => s.id === order.status) / (stitchingSteps.length - 1)) * 100}%` }}
                                />
                                <div className="flex justify-between items-center relative z-10 min-w-[500px] sm:min-w-0">
                                    {stitchingSteps.map((step, idx) => {
                                        const stepIdx = stitchingSteps.findIndex(s => s.id === order.status);
                                        const isCompleted = idx < stepIdx;
                                        const isActive = idx === stepIdx;
                                        return (
                                            <div key={step.id} className="flex flex-col items-center gap-4">
                                                <div className={`w-9 h-9 lg:w-11 lg:h-11 rounded-1.5xl lg:rounded-2xl flex items-center justify-center transition-all duration-500 border-4 border-white shadow-lg ${isCompleted ? 'bg-emerald-500 text-white' : isActive ? 'bg-primary-600 text-white scale-125' : 'bg-slate-100 text-slate-400'
                                                    }`}>
                                                    <step.icon size={16} className="lg:w-4.5 lg:h-4.5" />
                                                </div>
                                                <span className={`text-[8px] lg:text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-primary-600' : 'text-slate-400'}`}>
                                                    {step.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column: Order Detail Dossier (Mobile Modal / Desktop Sticky) */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {selectedOrder ? (
                            <div className="fixed inset-0 z-[120] xl:relative xl:inset-auto xl:z-auto">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedOrder(null)}
                                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-md xl:hidden"
                                />

                                <motion.div
                                    key={selectedOrder.id}
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '100%' }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                    className="absolute bottom-0 left-0 right-0 h-[85vh] xl:h-[calc(100vh-140px)] xl:relative xl:bottom-auto xl:left-auto xl:right-auto bg-white rounded-t-[3rem] xl:rounded-[3rem] shadow-3xl overflow-hidden xl:sticky xl:top-36 border-t border-slate-100 xl:border shadow-none xl:shadow-2xl"
                                >
                                    <div className="p-6 lg:p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
                                        <button onClick={() => setSelectedOrder(null)} className="p-2 text-slate-400 hover:text-rose-500 transition-colors xl:hidden">
                                            <X size={24} />
                                        </button>
                                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest italic shrink-0">Operation Dossier</h4>
                                        <button onClick={() => setSelectedOrder(null)} className="hidden xl:block p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="p-6 lg:p-8 space-y-10 overflow-y-auto max-h-[calc(85vh-84px)] xl:max-h-[calc(100vh-224px)] scrollbar-hide pb-20">
                                        <section>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
                                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Anatomy Summary</h5>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                                {Object.entries(selectedOrder.measurements).map(([key, val]) => (
                                                    <div key={key} className="p-4 lg:p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-100 transition-colors group">
                                                        <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest group-hover:text-primary-600">{key}</p>
                                                        <p className="text-xl font-black text-slate-900 mt-1 italic uppercase">{val}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="space-y-4">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
                                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Bespoke Directives</h5>
                                            </div>
                                            <div className="p-6 bg-primary-50/50 rounded-[2rem] border border-primary-100 space-y-4">
                                                <div>
                                                    <p className="text-[8px] font-black text-primary-600 uppercase tracking-widest">Textile Integrity</p>
                                                    <p className="text-xs font-black text-slate-800 italic uppercase mt-1">"{selectedOrder.fabric}"</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] font-black text-primary-600 uppercase tracking-widest">Master's Commentary</p>
                                                    <p className="text-xs text-slate-600 font-bold leading-relaxed mt-2 italic">"{selectedOrder.designNotes}"</p>
                                                </div>
                                            </div>
                                        </section>

                                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                            <button className="flex flex-col items-center justify-center p-5 bg-slate-50 rounded-2xl text-slate-500 hover:text-primary-600 transition-all gap-2 group border border-slate-100 active:scale-95">
                                                <Camera size={20} className="group-hover:scale-110 transition-transform" />
                                                <span className="text-[9px] font-black uppercase tracking-widest">Snap Proof</span>
                                            </button>
                                            <button className="flex flex-col items-center justify-center p-5 bg-slate-50 rounded-2xl text-slate-500 hover:text-blue-600 transition-all gap-2 group border border-slate-100 active:scale-95">
                                                <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                                                <span className="text-[9px] font-black uppercase tracking-widest">Consult</span>
                                            </button>
                                        </div>

                                        <button className="w-full bg-slate-900 text-white h-16 rounded-[1.5rem] font-black text-[10px] lg:text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-3">
                                            <CheckCircle2 size={18} /> Mark Step Completed
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="hidden xl:flex bg-slate-50/50 h-[calc(100vh-280px)] flex-col items-center justify-center p-12 text-center rounded-[3rem] border-2 border-dashed border-slate-100 sticky top-40 animate-pulse">
                                <Scissors size={40} className="text-slate-200" />
                                <h4 className="text-2xl font-black text-slate-300 uppercase tracking-tighter italic mt-10 italic">Awaiting Dossier Selection</h4>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default StitchingOrders;
