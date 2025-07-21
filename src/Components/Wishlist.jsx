import React, { useState } from 'react';
import { Heart, Plus, Trash2, ExternalLink, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      category: "Electronics",
      priority: "high",
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 125.50,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      category: "Fashion",
      priority: "medium",
      dateAdded: "2024-01-20"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop",
      category: "Electronics",
      priority: "high",
      dateAdded: "2024-01-10"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    priority: 'medium'
  });

  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dateAdded');

  const removeItem = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      const item = {
        id: Date.now(),
        ...newItem,
        price: parseFloat(newItem.price),
        dateAdded: new Date().toISOString().split('T')[0],
        image: newItem.image || `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop`
      };
      setWishlistItems(prev => [...prev, item]);
      setNewItem({ name: '', price: '', image: '', category: '', priority: 'medium' });
      setShowAddForm(false);
    }
  };

  const filteredItems = wishlistItems.filter(item => {
    if (filter === 'all') return true;
    return item.priority === filter;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      default:
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
  });

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">My Wishlist</h1>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="text-gray-600">
              {wishlistItems.length} items • Total value: ${totalValue.toFixed(2)}
            </div>
            {/* <button
              onClick={() => setShowAddForm(true)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Item
            </button> */}
          </div>
        </div>

        {/* Filters and Sort */}
        {/* <div className="mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Filter:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Items</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="dateAdded">Date Added</option>
              <option value="name">Name</option>
              <option value="price">Price (Low to High)</option>
              <option value="priceDesc">Price (High to Low)</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div> */}

        {/* Add Item Form */}
        {/* {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Item</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Item name"
                  value={newItem.name}
                  onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  value={newItem.price}
                  onChange={(e) => setNewItem(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="url"
                  placeholder="Image URL (optional)"
                  value={newItem.image}
                  onChange={(e) => setNewItem(prev => ({ ...prev, image: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={newItem.category}
                  onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <select
                  value={newItem.priority}
                  onChange={(e) => setNewItem(prev => ({ ...prev, priority: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={addItem}
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add Item
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Wishlist Items */}
        {sortedItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-400">Add some items to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                    {item.priority}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-purple-600">${item.price}</span>
                    {item.category && (
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    Added: {new Date(item.dateAdded).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </button>
                    <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;