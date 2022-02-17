const exactTxt = '#6aaa64';
const inWordTxt = '#c9b458';

export const Row5StyledJsx = () => {
    return (
        <Row>
            <Tile hint={'exact'}>S</Tile>
            <Tile hint={'exact'}>T</Tile>
            <Tile hint={'exact'}>Y</Tile>
            <Tile hint={'in-word'}>J</Tile>
            <Tile hint={''}>S</Tile>
        </Row>
    );
};

const Row = ({ children }) => {
    return (
        <div className="row">
            {children}

            <style jsx>{`
                .row {
                    margin: 0 0 0.5rem 0;
                    display: flex;
                }
            `}</style>
        </div>
    );
};

const Tile = ({ hint, children }) => {
    return (
        <div className={`tile ${hint}`}>
            {children}

            <style jsx>{`
                .tile {
                    flex: 1;
                    background: ${colorFromHint(hint)};
                    color: white;
                    padding: 1rem;
                    font-size: 1.875rem;
                    font-weight: bold;
                    margin-right: 0.5rem;
                }
            `}</style>
        </div>
    );
};

const colorFromHint = (hint) => {
    return hint === 'exact' ? exactTxt : hint === 'in-word' ? inWordTxt : 'grey';
};
