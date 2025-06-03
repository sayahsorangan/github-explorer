interface SearchInputProps {
    searchTerm: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    isDarkMode: boolean;
}

export function SearchInput({ searchTerm, onChange, onKeyPress, onSearch, isDarkMode }: SearchInputProps) {
    return (
        <div className='flex flex-row gap-3 sm:gap-4 mb-6'>
            <div className='relative flex-1'>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    placeholder='Enter GitHub username...'
                    className={`w-full h-12 px-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 backdrop-blur-sm ${
                        isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                />
            </div>
            <button
                onClick={onSearch}
                className='w-12 h-12 sm:px-6 sm:h-12 sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center'
            >
                <svg
                    className='h-5 w-5 sm:hidden'
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
                <span className='hidden sm:inline'>Search</span>
            </button>
        </div>
    );
}
