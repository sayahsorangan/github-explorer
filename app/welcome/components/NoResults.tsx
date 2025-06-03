interface NoResultsProps {
    searchTerm: string;
    type: 'users' | 'repositories';
    isDarkMode: boolean;
}

export function NoResults({ searchTerm, type, isDarkMode }: NoResultsProps) {
    if (type === 'users') {
        return (
            <div className='text-center py-12'>
                <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                        isDarkMode
                            ? 'bg-gradient-to-r from-gray-700 to-gray-600'
                            : 'bg-gradient-to-r from-gray-200 to-gray-300'
                    }`}
                >
                    <svg
                        className={`w-8 h-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                    </svg>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    No users found
                </h3>
                <p className={`max-w-md mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    We couldn't find any GitHub users matching "{searchTerm}". Try a different search term or check the
                    spelling.
                </p>
            </div>
        );
    }

    // Repositories no results
    return (
        <div className='text-center py-8 sm:py-12'>
            <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center ${
                    isDarkMode
                        ? 'bg-gradient-to-r from-gray-700 to-gray-600'
                        : 'bg-gradient-to-r from-gray-200 to-gray-300'
                }`}
            >
                <svg
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                </svg>
            </div>
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No repositories found.
            </p>
        </div>
    );
}
