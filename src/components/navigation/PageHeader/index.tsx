function PageHeader() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl md:pl-4 py-6 lg:py-8 md:flex md:justify-between">
      <div>
        <h3>Home/Clothing/Men T-shirt</h3>
        <h2>Men T-Shirts-95000</h2>
      </div>
      <div>
        
      
        {/* ============== */}
        <select
          id="sort"
          className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Default</option>
          <option value="relevance">Relevance</option>
          <option value="highToLow">High to Low</option>
          <option value="lowToHigh">Low to High</option>
          <option value="loved">Most Loved</option>
        </select>
      </div>
    </div>
  );
}
export default PageHeader;
