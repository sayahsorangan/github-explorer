import { useState, useEffect } from 'react';
import logoDark from './logo-dark.svg';
import logoLight from './logo-light.svg';
import {
    ThemeSwitcher,
    SearchInput,
    LoadingSkeletons,
    UserCard,
    Pagination,
    RepositoryCard,
    ErrorMessage,
    NoResults,
    UserProfile,
} from './components';

interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    score: number;
}

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

export function Welcome() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState<GitHubUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<GitHubUser | null>(null);
    const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [reposLoading, setReposLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('github-explorer-theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
        }
    }, []);

    // Update localStorage and document class when theme changes
    useEffect(() => {
        localStorage.setItem('github-explorer-theme', isDarkMode ? 'dark' : 'light');
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const usersPerPage = 5;

    const searchUsers = async (query: string, page: number = 1) => {
        if (!query.trim()) {
            setUsers([]);
            setTotalUsers(0);
            setHasNextPage(false);
            setCurrentPage(1);
            setHasSearched(false);
            return;
        }

        setSearchLoading(true);
        setHasSearched(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.github.com/search/users?q=${encodeURIComponent(
                    query
                )}&per_page=${usersPerPage}&page=${page}`
            );
            if (!response.ok) {
                throw new Error('Failed to search users');
            }
            const data = await response.json();
            setUsers(data.items || []);
            setTotalUsers(data.total_count || 0);
            setCurrentPage(page);

            // GitHub API has a limit of 1000 results, so we check if there are more pages
            const totalPages = Math.min(Math.ceil(data.total_count / usersPerPage), 200); // GitHub API limit
            setHasNextPage(page < totalPages && data.items.length === usersPerPage);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setUsers([]);
            setTotalUsers(0);
            setHasNextPage(false);
        } finally {
            setSearchLoading(false);
        }
    };

    const fetchUserRepositories = async (username: string) => {
        setReposLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const data = await response.json();
            setRepositories(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setRepositories([]);
        } finally {
            setReposLoading(false);
        }
    };

    const handleUserSelect = (user: GitHubUser) => {
        setSelectedUser(user);
        fetchUserRepositories(user.login);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchUsers(searchTerm);
        }
    };

    const handleNextPage = () => {
        if (hasNextPage) {
            searchUsers(searchTerm, currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            searchUsers(searchTerm, currentPage - 1);
        }
    };

    return (
        <main
            className={`min-h-screen transition-all duration-300 p-4 sm:p-8 ${
                isDarkMode
                    ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900'
                    : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'
            }`}
        >
            <div className='max-w-6xl mx-auto'>
                {/* Theme Switcher */}
                <div className='flex justify-end mb-4'>
                    <ThemeSwitcher
                        isDarkMode={isDarkMode}
                        onToggle={toggleTheme}
                    />
                </div>

                <div className='text-center mb-8 sm:mb-12'>
                    <div className='mb-4 sm:mb-6'>
                        <div
                            className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 shadow-lg ${
                                isDarkMode ? 'shadow-purple-500/25' : ''
                            }`}
                        >
                            <svg
                                className='w-8 h-8 sm:w-10 sm:h-10 text-white'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>
                        </div>
                    </div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4'>
                        GitHub Explorer
                    </h1>
                    <p
                        className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                        Discover amazing developers and explore their incredible repositories with our beautiful search
                        interface
                    </p>
                </div>

                <div
                    className={`backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-8 mb-6 sm:mb-8 ${
                        isDarkMode ? 'bg-gray-800/90 border border-gray-700/50' : 'bg-white/80 border border-white/20'
                    }`}
                >
                    <SearchInput
                        searchTerm={searchTerm}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                        onSearch={() => searchUsers(searchTerm)}
                        isDarkMode={isDarkMode}
                    />

                    {searchLoading && (
                        <LoadingSkeletons
                            type='search'
                            isDarkMode={isDarkMode}
                        />
                    )}
                    {error && (
                        <ErrorMessage
                            message={error}
                            isDarkMode={isDarkMode}
                        />
                    )}

                    {/* No Results Message */}
                    {searchTerm.trim() && users.length === 0 && !searchLoading && !error && hasSearched && (
                        <NoResults
                            searchTerm={searchTerm}
                            type='users'
                            isDarkMode={isDarkMode}
                        />
                    )}

                    {users.length > 0 && (
                        <div className='mb-6'>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2'>
                                <h2
                                    className={`text-lg sm:text-xl font-semibold ${
                                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                                    }`}
                                >
                                    Found Users
                                </h2>
                                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Showing {(currentPage - 1) * usersPerPage + 1}-
                                    {Math.min(currentPage * usersPerPage, totalUsers)} of {totalUsers.toLocaleString()}{' '}
                                    results
                                </div>
                            </div>
                            <div className='grid gap-3 mb-4'>
                                {users.map((user) => (
                                    <UserCard
                                        key={user.id}
                                        user={user}
                                        onClick={handleUserSelect}
                                        isDarkMode={isDarkMode}
                                    />
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            <Pagination
                                currentPage={currentPage}
                                totalUsers={totalUsers}
                                usersPerPage={usersPerPage}
                                hasNextPage={hasNextPage}
                                onPrevPage={handlePrevPage}
                                onNextPage={handleNextPage}
                                isDarkMode={isDarkMode}
                            />
                        </div>
                    )}
                </div>

                {selectedUser && (
                    <div
                        className={`backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-8 ${
                            isDarkMode
                                ? 'bg-gray-800/90 border border-gray-700/50'
                                : 'bg-white/90 border border-white/30'
                        }`}
                    >
                        <UserProfile
                            user={selectedUser}
                            repositoriesCount={repositories.length}
                            isDarkMode={isDarkMode}
                        />
                        {reposLoading && (
                            <LoadingSkeletons
                                type='repositories'
                                isDarkMode={isDarkMode}
                            />
                        )}
                        {repositories.length === 0 && !reposLoading && (
                            <NoResults
                                searchTerm=''
                                type='repositories'
                                isDarkMode={isDarkMode}
                            />
                        )}{' '}
                        {!reposLoading && repositories.length > 0 && (
                            <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                                {repositories.map((repo) => (
                                    <RepositoryCard
                                        key={repo.id}
                                        repo={repo}
                                        isDarkMode={isDarkMode}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
