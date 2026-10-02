import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, DEPARTMENTS } from '../data/products';
import { Filter, Sparkles, Layers, RefreshCw } from 'lucide-react';

export default function ProductCatalog({ 
  searchQuery, 
  setSearchQuery, 
  selectedDepartment, 
  setSelectedDepartment,
  onAddToWishlist,
  wishlistIds,
  onQuickView
}) {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedFloorFilter, setSelectedFloorFilter] = useState('All');

  // Extract unique fabrics for filtering
  const fabrics = useMemo(() => {
    const list = new Set(PRODUCTS.map(p => p.fabric));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter products dynamically
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Department Filter
      if (selectedDepartment !== 'All Departments' && product.department !== selectedDepartment) {
        return false;
      }

      // Fabric Filter
      if (selectedFabric !== 'All' && product.fabric !== selectedFabric) {
        return false;
      }

      // Floor Filter
      if (selectedFloorFilter !== 'All' && !product.floor.includes(selectedFloorFilter)) {
        return false;
      }

      // Global Search Query Matching Title, Brand, Category, Fabric, SKU, Floor
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesDepartment = product.department.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        const matchesFloor = product.floor.toLowerCase().includes(query);

        return matchesTitle || matchesBrand || matchesCategory || matchesDepartment || matchesFabric || matchesFloor;
      }

      return true;
    });
  }, [selectedDepartment, selectedFabric, selectedFloorFilter, searchQuery]);

  const handleResetFilters = () => {
    setSelectedDepartment('All Departments');
    setSelectedFabric('All');
    setSelectedFloorFilter('All');
    setSearchQuery('');
  };

  return (
    <section id="catalog-section" className="py-12 px-4 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Sajan Clothings & Superstore Collection</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            In-Store Product Catalog
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Save your favorite garments & supplies to your Try-On List for fast fulfillment on store visit.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            Showing <strong className="text-amber-400 font-extrabold">{filteredProducts.length}</strong> Products
          </span>
          {(selectedDepartment !== 'All Departments' || selectedFabric !== 'All' || selectedFloorFilter !== 'All' || searchQuery !== '') && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Department Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDepartment(dept)}
            className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDepartment === dept
                ? 'bg-gradient-to-r from-brand-600 to-amber-600 text-white shadow-lg shadow-brand-600/20 scale-105'
                : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Additional Secondary Filters Bar (Fabric & Floor) */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
            <Filter className="w-4 h-4 text-brand-500" />
            <span>Filter Fabric / Material:</span>
          </div>
          <select
            value={selectedFabric}
            onChange={(e) => setSelectedFabric(e.target.value)}
            className="bg-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:border-brand-500"
          >
            {fabrics.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>Filter Floor Location:</span>
          </div>
          <div className="flex items-center gap-1">
            {['All', 'Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'].map((fl) => (
              <button
                key={fl}
                onClick={() => setSelectedFloorFilter(fl)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedFloorFilter === fl
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {fl}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToWishlist={onAddToWishlist}
              isInWishlist={wishlistIds.includes(product.id)}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Empty Search / Filter State */
        <div className="text-center py-16 p-8 glass-panel rounded-3xl space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center mx-auto border border-slate-700 text-2xl">
            🔍
          </div>
          <h3 className="text-xl font-extrabold text-white">No Matching Products Found</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            We couldn't find any items matching "{searchQuery || selectedDepartment}". Try searching for categories like "Kurti", "Sherwani", "Jeans", "Unomax", or reset your filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg transition-colors"
          >
            Show All Products
          </button>
        </div>
      )}

    </section>
  );
}
