import { useContext } from 'react';
import { GifContext } from '../../../context/context';
import { IElementData } from '../../../models/data';

export function ButtonDelete({ item }: { item: IElementData }) {
    const { handleEraser } = useContext(GifContext);
    const handleClickDelete = () => {
        handleEraser(item);
    };

    return (
        <button className={`๐`} onClick={handleClickDelete}>
            ๐งป
        </button>
    );
}
