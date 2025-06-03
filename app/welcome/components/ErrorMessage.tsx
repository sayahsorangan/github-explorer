interface ErrorMessageProps {
    message: string;
    isDarkMode: boolean;
}

export function ErrorMessage({ message, isDarkMode }: ErrorMessageProps) {
    return (
        <div
            className={`text-center py-4 px-6 border rounded-xl ${
                isDarkMode ? 'bg-red-900/50 border-red-700 text-red-300' : 'bg-red-50 border-red-200 text-red-700'
            }`}
        >
            <svg
                className='h-5 w-5 inline-block mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
            >
                <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                    clipRule='evenodd'
                />
            </svg>
            Error: {message}
        </div>
    );
}
