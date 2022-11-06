import { Link } from 'react-router-dom';
import { IElementData } from '../../models/data';
import { useAuth0 } from '@auth0/auth0-react';
import { ButtonAdd } from '../buttons/button.add/button.add';
import { ButtonDelete } from '../buttons/button.delete/button.delete';
import { useContext } from 'react';
import { GifContext } from '../../context/context';

export function GifItem({ item }: { item: IElementData }) {
    const { isAuthenticated } = useAuth0();
    const location = window.location.pathname;
    const { hasError } = useContext(GifContext);

    return (
        <li>
            <Link to={`/Details/${item.id}`}>
                <img
                    src={item.images.downsized.url}
                    alt={`gif ${item.title}`}
                ></img>
            </Link>

            {isAuthenticated && !hasError && <ButtonAdd item={item} />}

            {location === '/Fav' && isAuthenticated && (
                <ButtonDelete item={item} />
            )}
        </li>
    );
}
