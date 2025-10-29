export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">E</span>
          </div>
          <h1 className="text-2xl font-bold">eShop</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-100 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-100 transition">
            Products
          </a>
          <a href="#" className="hover:text-blue-100 transition">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
