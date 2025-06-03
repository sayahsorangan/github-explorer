import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'GitHub User Search' },
        { name: 'description', content: 'Search for GitHub users and explore their repositories' },
    ];
}

export default function Home() {
    return <Welcome />;
}
