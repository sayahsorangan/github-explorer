interface LoadingSkeletonsProps {
    type: 'search' | 'repositories';
    isDarkMode: boolean;
}

export function LoadingSkeletons({ type, isDarkMode }: LoadingSkeletonsProps) {
    if (type === 'search') {
        return (
            <div className='mb-6'>
                <div className='flex items-center justify-between mb-4'>
                    <div
                        className={`h-6 rounded w-32 animate-pulse ${isDarkMode ? 'bg-blue-400' : 'bg-blue-300'}`}
                    ></div>
                    <div
                        className={`h-4 rounded w-48 animate-pulse ${isDarkMode ? 'bg-blue-400' : 'bg-blue-300'}`}
                    ></div>
                </div>
                <div className='grid gap-3 mb-4'>
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className={`flex items-center p-4 border rounded-xl animate-pulse ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-blue-700'
                                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className={`w-14 h-14 rounded-full mr-4 animate-pulse ${
                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                                }`}
                            ></div>
                            <div className='flex-1'>
                                <div
                                    className={`h-5 rounded w-24 mb-2 animate-pulse ${
                                        isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                                    }`}
                                ></div>
                                <div
                                    className={`h-4 rounded w-32 animate-pulse ${
                                        isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                                    }`}
                                ></div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <div
                                    className={`w-4 h-4 rounded animate-pulse ${
                                        isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                                    }`}
                                ></div>
                                <div
                                    className={`h-4 rounded w-8 animate-pulse ${
                                        isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                                    }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center py-4'>
                    <div className='inline-flex items-center gap-3 text-blue-600'>
                        <svg
                            className='animate-spin h-6 w-6 text-blue-600'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <circle
                                className='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='4'
                            ></circle>
                            <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                        </svg>
                        <span className='text-lg font-medium'>Searching for users...</span>
                    </div>
                </div>
            </div>
        );
    }

    // Repositories skeleton
    return (
        <>
            <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6'>
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl p-4 sm:p-6 ${
                            isDarkMode
                                ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-700'
                                : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'
                        }`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className='flex items-start justify-between mb-3 sm:mb-4'>
                            <div
                                className={`h-6 rounded w-32 animate-pulse ${
                                    isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
                                }`}
                            ></div>
                            <div className='flex items-center gap-1'>
                                <div
                                    className={`w-4 h-4 rounded animate-pulse ${
                                        isDarkMode ? 'bg-yellow-400' : 'bg-yellow-300'
                                    }`}
                                ></div>
                                <div
                                    className={`h-4 rounded w-8 animate-pulse ${
                                        isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
                                    }`}
                                ></div>
                            </div>
                        </div>
                        <div className='space-y-2 mb-4'>
                            <div
                                className={`h-4 rounded w-full animate-pulse ${
                                    isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
                                }`}
                            ></div>
                            <div
                                className={`h-4 rounded w-3/4 animate-pulse ${
                                    isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
                                }`}
                            ></div>
                            <div
                                className={`h-4 rounded w-1/2 animate-pulse ${
                                    isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
                                }`}
                            ></div>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                            <div
                                className={`h-6 rounded-full w-20 animate-pulse ${
                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                                }`}
                            ></div>
                            <div
                                className={`h-4 rounded w-24 animate-pulse ${
                                    isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
                                }`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center py-8'>
                <div className='inline-flex items-center gap-3 text-purple-600'>
                    <div className='relative'>
                        <div
                            className={`w-8 h-8 border-4 rounded-full animate-spin ${
                                isDarkMode ? 'border-purple-400' : 'border-purple-200'
                            }`}
                        ></div>
                        <div className='absolute top-0 left-0 w-8 h-8 border-4 border-transparent border-t-purple-600 rounded-full animate-spin'></div>
                    </div>
                    <span className='text-lg font-medium'>Loading repositories...</span>
                </div>
            </div>
        </>
    );
}
