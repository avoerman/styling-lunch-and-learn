export const Row2UtilityCss = () => {
    return (
        <Row>
            <Tile hint={'in-word'}>T</Tile>
            <Tile hint={'in-word'}>A</Tile>
            <Tile hint={''}>I</Tile>
            <Tile hint={''}>L</Tile>
            <Tile hint={'exact'}>W</Tile>
        </Row>
    );
};

const Row = ({ children }) => {
    return <div className={'flex mb-2'}>{children}</div>;
};

const Tile = ({ hint, children }) => {
    const hintClass = hint === 'exact' ? 'bg-guess-green' : hint === 'in-word' ? 'bg-guess-yellow' : 'bg-guess-grey';

    return <div className={`p-4 text-white bg-gray-500 text-3xl font-bold mr-2 flex-1 ${hintClass}`}>{children}</div>;
};
