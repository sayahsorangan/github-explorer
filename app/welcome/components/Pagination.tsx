interface PaginationProps {
    currentPage: number;
    totalUsers: number;
    usersPerPage: number;
    hasNextPage: boolean;
    onPrevPage: () => void;
    onNextPage: () => void;
    isDarkMode: boolean;
}

export function Pagination({
    currentPage,
    totalUsers,
    usersPerPage,
    hasNextPage,
    onPrevPage,
    onNextPage,
    isDarkMode,
}: PaginationProps) {
    return (
        <div className='flex items-center justify-between gap-2 sm:gap-4'>
            <button
                onClick={onPrevPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 w-auto sm:w-auto ${
                    currentPage === 1
                        ? isDarkMode
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : isDarkMode
                        ? 'bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-purple-400 shadow-sm hover:shadow-md'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-300 shadow-sm hover:shadow-md'
                }`}
            >
                <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                    />
                </svg>
                <span className='hidden sm:inline'>Previous</span>
            </button>

            <div className='flex items-center gap-2'>
                <span className='px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium'>
                    {currentPage}
                </span>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>of</span>
                <span
                    className={`px-3 py-2 rounded-lg font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    {Math.min(Math.ceil(totalUsers / usersPerPage), 200)}
                </span>
            </div>

            <button
                onClick={onNextPage}
                disabled={!hasNextPage}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 w-auto sm:w-auto ${
                    !hasNextPage
                        ? isDarkMode
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : isDarkMode
                        ? 'bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-purple-400 shadow-sm hover:shadow-md'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-300 shadow-sm hover:shadow-md'
                }`}
            >
                <span className='hidden sm:inline'>Next</span>
                <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                    />
                </svg>
            </button>
        </div>
    );
}
