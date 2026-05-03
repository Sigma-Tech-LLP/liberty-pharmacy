"use client";

import { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  ChevronRight, 
  Beaker, 
  Syringe, 
  ShieldCheck, 
  Globe, 
  ClipboardCheck,
  ArrowUpRight,
  PackageSearch,
  LayoutGrid,
  List,
  ChevronLeft
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Formulations', icon: <ClipboardCheck size={16} /> },
  { id: 'tablets', name: 'Tablets & Capsules', icon: <Beaker size={16} /> },
  { id: 'injectables', name: 'Injectables & Vaccines', icon: <Syringe size={16} /> },
  { id: 'surgicals', name: 'Surgicals & Consumables', icon: <ShieldCheck size={16} /> },
  { id: 'wellness', name: 'Nutraceuticals', icon: <Globe size={16} /> },
];

const allProducts = [
  { id: 1, name: "Amoxicillin & Potassium Clavulanate", category: "tablets", therapeutic: "Antibiotic", origin: "WHO-GMP Certified" },
  { id: 2, name: "Insulin Glargine Injection", category: "injectables", therapeutic: "Anti-Diabetic", origin: "Cold-Chain Maintained" },
  { id: 3, name: "Paracetamol 500mg IP", category: "tablets", therapeutic: "Antipyretic", origin: "WHO-GMP Certified" },
  { id: 4, name: "Ceftriaxone 1gm Injection", category: "injectables", therapeutic: "Antibiotic", origin: "Sterile Facility" },
  { id: 5, name: "Multivitamin Gold", category: "wellness", therapeutic: "Supplement", origin: "ISO Certified" },
  { id: 6, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
  { id: 7, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
  { id: 8, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
  { id: 9, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
  { id: 10, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
  { id: 11, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
  { id: 12, name: "Disposable Syringes 2ml", category: "surgicals", therapeutic: "Consumable", origin: "CE Certified" },
];

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = viewMode === 'grid' ? 6 : 10; // Show more in table view

  // Logic: Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.therapeutic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, viewMode]);

  // Calculate Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Helper for pagination numbers
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-16 bg-white text-slate-900">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Sidebar (Mobile Scrollable / Desktop Vertical) */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-32">
            <h3 className="hidden lg:block font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6">
              Browse Categories
            </h3>
            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 p-3 lg:p-4 rounded-xl text-xs lg:text-sm transition-all duration-300 border shrink-0 ${
                    activeCategory === cat.id 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                    : 'bg-slate-50 border-transparent text-slate-500 hover:border-slate-200'
                  }`}
                >
                  <span className={activeCategory === cat.id ? 'text-teal-400' : 'text-slate-400'}>{cat.icon}</span>
                  <span className="font-medium whitespace-nowrap">{cat.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search molecule..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500/20 text-sm"
              />
            </div>
            <div className="flex p-1 bg-slate-100 rounded-lg shrink-0 self-end md:self-auto">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}><LayoutGrid size={18} /></button>
              <button onClick={() => setViewMode('table')} className={`p-2 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}><List size={18} /></button>
            </div>
          </div>

          {/* List Rendering (Grid or Table) */}
          {visibleProducts.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleProducts.map((p) => (
                  <div key={p.id} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-500/50 hover:shadow-lg transition-all flex flex-col h-full">
                     <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-500 uppercase">{p.therapeutic}</span>
                      <ArrowUpRight size={16} className="text-slate-300 group-hover:text-teal-500" />
                    </div>
                    <h3 className="font-serif text-lg text-slate-900 mb-4">{p.name}</h3>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{p.origin}</span>
                      <button className="text-xs font-bold text-teal-600 hover:text-teal-700">Quote &rarr;</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      <th className="px-6 py-4">Molecule</th>
                      <th className="px-6 py-4">Class</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {visibleProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-teal-50/30 transition-colors group">
                        <td className="px-6 py-4 text-sm font-medium">{p.name}</td>
                        <td className="px-6 py-4 text-xs text-slate-500">{p.therapeutic}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[10px] font-bold uppercase py-2 px-4 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">Quote</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            <div className="py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <PackageSearch className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500">No results found.</p>
            </div>
          )}

          {/* ─── Pagination Controls ─── */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 font-medium order-2 sm:order-1">
                Showing <span className="text-slate-900 font-bold">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)}</span> of <span className="text-slate-900 font-bold">{filteredProducts.length}</span> molecules
              </p>
              
              <div className="flex items-center gap-1 order-1 sm:order-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>

                {getPageNumbers().map((pageNum, idx) => (
                  <button
                    key={idx}
                    onClick={() => typeof pageNum === 'number' && setCurrentPage(pageNum)}
                    disabled={pageNum === '...'}
                    className={`min-w-[40px] h-10 rounded-lg text-xs font-bold transition-all ${
                      currentPage === pageNum 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : pageNum === '...' ? 'cursor-default' : 'hover:bg-slate-100 text-slate-500'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}