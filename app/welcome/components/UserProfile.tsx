interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    score: number;
}

interface UserProfileProps {
    user: GitHubUser;
    repositoriesCount: number;
    isDarkMode: boolean;
}

export function UserProfile({ user, repositoriesCount, isDarkMode }: UserProfileProps) {
    return (
        <div className='flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8 gap-4'>
            <div className='relative flex-shrink-0'>
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className='w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-4 ring-purple-200 shadow-lg'
                />
                <div className='absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full border-3 sm:border-4 border-white shadow-lg'></div>
            </div>
            <div className='text-center sm:text-left flex-1'>
                <h2
                    className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-2 ${
                        isDarkMode
                            ? 'bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'
                    }`}
                >
                    {user.login}
                </h2>
                <a
                    href={user.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base'
                >
                    <svg
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    View Profile on GitHub
                </a>
            </div>
        </div>
    );
}
