interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    score: number;
}

interface UserCardProps {
    user: GitHubUser;
    onClick: (user: GitHubUser) => void;
    isDarkMode: boolean;
}

export function UserCard({ user, onClick, isDarkMode }: UserCardProps) {
    return (
        <div
            onClick={() => onClick(user)}
            className={`flex items-center p-3 sm:p-4 border rounded-xl cursor-pointer transition-all duration-200 transform hover:-translate-y-1 ${
                isDarkMode
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:shadow-lg hover:border-purple-500'
                    : 'bg-gradient-to-r from-white to-gray-50 border-gray-200 hover:shadow-lg hover:border-purple-300'
            }`}
        >
            <div className='relative'>
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className='w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 ring-2 ring-purple-200'
                />
            </div>
            <div className='flex-1 min-w-0'>
                <h3
                    className={`font-semibold text-base sm:text-lg truncate ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-900'
                    }`}
                >
                    {user.login}
                </h3>
                {user.score && (
                    <div className='flex justify-start mt-1'>
                        <div className='flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full group-hover:from-amber-200 group-hover:to-orange-200 transition-colors duration-300'>
                            <svg
                                className='w-3 h-3 text-amber-600'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                            >
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                            <span className='text-xs font-medium text-amber-700'>{Math.round(user.score)}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
