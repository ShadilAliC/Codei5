const Pagination = ({
    setCurrentPage = () => {},
    current_page,
    pages
}) => {
    return (
        <div className="flex justify-end mt-2 p-2">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setCurrentPage(1)}
                    disabled={current_page === 1}
                >
                    &lt;&lt;
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setCurrentPage(current_page - 1)}
                    disabled={current_page === 1}
                >
                    &lt;
                </button>
                {current_page > 1 && (
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                        onClick={() => setCurrentPage(current_page - 1)}
                    >
                        {current_page - 1}
                    </button>
                )}
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border-t border-b border-gray-200"
                >
                    {current_page}
                </button>
                {current_page < pages && (
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                        onClick={() => setCurrentPage(current_page + 1)}
                    >
                        {current_page + 1}
                    </button>
                )}
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setCurrentPage(current_page + 1)}
                    disabled={current_page === pages}
                >
                    &gt;
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setCurrentPage(pages)}
                    disabled={current_page === pages}
                >
                    &gt;&gt;
                </button>
            </div>
        </div>
    )
}

export default Pagination

