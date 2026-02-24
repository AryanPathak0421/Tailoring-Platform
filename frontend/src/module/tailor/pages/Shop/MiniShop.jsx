import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    ShoppingBag,
    Tag,
    Edit3,
    Trash2,
    ArrowRight,
    Package,
    TrendingUp,
    Store,
    CheckCircle,
    X,
    Filter,
    Layers
} from 'lucide-react';

const MiniShop = () => {
    const [activeTab, setActiveTab] = useState('inventory');
    const [showAddModal, setShowAddModal] = useState(false);

    const products = [
        { id: 1, name: 'Summer Cotton Kurti', category: 'Ladies Wear', price: '₹1,299', stock: 15, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=400' },
        { id: 2, name: 'Linen Slim Shirt', category: 'Gents Wear', price: '₹1,599', stock: 8, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400' },
        { id: 3, name: 'Tailored Waistcoat', category: 'Festive', price: '₹2,199', stock: 4, image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=400' },
    ];

    const shopOrders = [
        { id: 'E-7721', product: 'Cotton Kurti', size: 'M', customer: 'Rohan M.', status: 'New', date: 'Just now', price: '₹1,299' },
        { id: 'E-7690', product: 'Linen Shirt', size: 'L', customer: 'Anjali S.', status: 'Packed', date: '3h ago', price: '₹1,599' },
    ];

    return (
        <div className="space-y-8 lg:space-y-12 animate-in fade-in duration-700">
            {/* Header Hero Section - Scaled for Mobile */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-[3rem] overflow-hidden group shadow-2xl ring-1 ring-slate-100">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.4]"
                    alt="Shop Banner"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end sm:justify-center p-8 sm:px-12">
                    <div className="max-w-xl space-y-4 lg:space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <Store size={14} className="text-primary-400" />
                            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] italic">Global Boutique</span>
                        </div>
                        <h1 className="text-3xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] italic uppercase">Curate Your<br /><span className="text-primary-400">Inventory</span></h1>
                        <p className="hidden sm:block text-slate-300 text-xs lg:text-sm font-medium leading-relaxed max-w-md">List premium ready-made creations for the global audience. Instant visibility, no wait.</p>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-primary-600 text-white px-8 lg:px-12 py-3.5 lg:py-5 rounded-[1.5rem] lg:rounded-[2.5rem] font-black text-[9px] lg:text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary-500/30 hover:bg-primary-500 active:scale-95 transition-all flex items-center gap-3 w-full sm:w-fit justify-center"
                        >
                            <Plus size={18} /> Publish New
                        </button>
                    </div>
                </div>
            </div>

            {/* Controls Bar - Mobile Specific */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 w-full md:w-fit overflow-x-auto scrollbar-hide">
                    <button
                        onClick={() => setActiveTab('inventory')}
                        className={`flex-1 sm:flex-none px-8 lg:px-12 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all gap-3 flex items-center justify-center whitespace-nowrap ${activeTab === 'inventory' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        Collection
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`flex-1 sm:flex-none px-8 lg:px-12 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all gap-3 flex items-center justify-center relative whitespace-nowrap ${activeTab === 'orders' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        Shipments
                        {shopOrders.length > 0 && (
                            <span className="absolute -top-1 -right-0 w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-[9px] font-black border-2 border-white">
                                {shopOrders.length}
                            </span>
                        )}
                    </button>
                </div>

                <div className="hidden sm:flex items-center gap-4 bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100">
                    <TrendingUp size={20} className="text-emerald-500 shrink-0" />
                    <div>
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest italic leading-none">Boutique Pulse</p>
                        <p className="text-[11px] font-black text-emerald-900 tracking-tight mt-1 italic uppercase">Top 1% Performers</p>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'inventory' ? (
                    <motion.div
                        key="inventory"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
                    >
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm group overflow-hidden hover:shadow-2xl transition-all duration-700">
                                <div className="relative h-72 lg:h-80 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md text-primary-600 text-[9px] font-black px-4 py-2 rounded-xl shadow-lg uppercase tracking-widest italic leading-none">
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                                        <button className="w-12 h-12 bg-white text-slate-900 rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center">
                                            <Edit3 size={20} />
                                        </button>
                                        <button className="w-12 h-12 bg-white text-rose-500 rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8 space-y-4 lg:space-y-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl lg:text-2xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight">{product.name}</h3>
                                        <p className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter italic">{product.price}</p>
                                    </div>
                                    <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                                <Package size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Availability</p>
                                                <p className="text-[10px] lg:text-xs font-black text-slate-900 italic uppercase mt-1">{product.stock} Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="orders"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden"
                    >
                        <div className="overflow-x-auto scrollbar-hide">
                            <table className="w-full text-left min-w-[700px]">
                                <thead className="bg-slate-50/50 border-b border-slate-50">
                                    <tr>
                                        <th className="px-8 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Transaction</th>
                                        <th className="px-8 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Masterpiece</th>
                                        <th className="px-8 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Acquiree</th>
                                        <th className="px-8 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                                        <th className="px-8 py-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {shopOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-slate-50/20 transition-all cursor-pointer">
                                            <td className="px-8 py-7">
                                                <span className="text-xs font-black text-primary-600 uppercase italic">#{order.id}</span>
                                                <p className="text-[9px] text-slate-400 font-bold uppercase mt-2 tracking-widest">{order.date}</p>
                                            </td>
                                            <td className="px-8 py-7">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary-400 shadow-inner shrink-0">
                                                        <ShoppingBag size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-black text-slate-800 uppercase italic leading-none">{order.product}</p>
                                                        <p className="text-[10px] text-primary-600 font-black uppercase mt-1.5 leading-none italic">Tier {order.size}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-7 whitespace-nowrap">
                                                <p className="text-xs font-black text-slate-900 uppercase italic leading-none">{order.customer}</p>
                                                <p className="text-[9px] text-emerald-500 font-black uppercase mt-1.5 italic tracking-widest">Verified</p>
                                            </td>
                                            <td className="px-8 py-7">
                                                <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${order.status === 'New' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                        'bg-blue-50 text-blue-600 border-blue-100'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-7 text-right whitespace-nowrap">
                                                <ArrowRight size={18} className="text-slate-300 ml-auto" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal Logic (Mock for brevity) */}
            <AnimatePresence>
                {showAddModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-[150] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white w-full max-w-2xl rounded-[3rem] p-10 relative overflow-hidden"
                        >
                            <button onClick={() => setShowAddModal(false)} className="absolute top-8 right-8 p-3 bg-slate-50 text-slate-400 rounded-2xl hover:text-rose-500 transition-all">
                                <X size={24} />
                            </button>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic mb-8">Publish <span className="text-primary-600">Creation</span></h2>
                            <p className="text-slate-500 font-medium mb-10">Add a new ready-made masterpiece to your public digital boutique.</p>

                            {/* Simple Form Mock for Mobile UI Check */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Masterpiece Name</label>
                                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none ring-1 ring-slate-100 focus:ring-primary-600 transition-all font-black uppercase italic tracking-tighter" placeholder="E.G. Traditional Kurti" />
                                </div>
                                <button className="w-full bg-slate-900 text-white h-16 rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 transition-all mt-4">Confirm & List</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MiniShop;
