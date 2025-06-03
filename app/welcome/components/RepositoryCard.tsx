interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
}

interface RepositoryCardProps {
    repo: GitHubRepo;
    isDarkMode: boolean;
}

export function RepositoryCard({ repo, isDarkMode }: RepositoryCardProps) {
    return (
        <div
            className={`group border rounded-xl p-4 sm:p-6 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full ${
                isDarkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:shadow-xl hover:border-purple-400'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:shadow-xl hover:border-purple-300'
            }`}
        >
            <div className='flex items-start justify-between mb-3 sm:mb-4'>
                <h4
                    className={`font-bold text-base sm:text-lg transition-colors flex-1 min-w-0 pr-2 ${
                        isDarkMode
                            ? 'text-gray-200 group-hover:text-purple-300'
                            : 'text-gray-900 group-hover:text-purple-700'
                    }`}
                >
                    <a
                        href={repo.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline break-words'
                    >
                        {repo.name}
                    </a>
                </h4>
                <div className='flex items-center gap-1 text-amber-500 flex-shrink-0'>
                    <svg
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                    >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <span className='text-sm font-medium'>{repo.stargazers_count}</span>
                </div>
            </div>

            {repo.description && (
                <p
                    className={`text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed flex-grow ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                    {repo.description}
                </p>
            )}

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-auto'>
                <div className='flex items-center gap-3'>
                    {repo.language && (
                        <span
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                            }`}
                        >
                            <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                            {repo.language}
                        </span>
                    )}
                </div>
                <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(repo.updated_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}
                </span>
            </div>
        </div>
    );
}
