"use client"

interface SidebarProps {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function Sidebar({ categories, selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
