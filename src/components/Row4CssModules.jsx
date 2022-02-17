import styles from './Row4CssModules.module.scss';

export const Row4CssModules = () => {
    return (
        <Row>
            <Tile hint={''}>M</Tile>
            <Tile hint={'exact'}>O</Tile>
            <Tile hint={'in-word'}>D</Tile>
            <Tile hint={'in-word'}>U</Tile>
            <Tile hint={'exact'}>L</Tile>
        </Row>
    );
};

const Row = ({ children }) => {
    return <div className={styles.row}>{children}</div>;
};

const Tile = ({ hint, children }) => {
    return <div className={`${styles.tile} ${styleFromHint(hint)}`}>{children}</div>;
};

const styleFromHint = (hint) => {
    return hint === 'exact' ? styles.exact : hint === 'in-word' ? styles.inWord : styles.grey;
};
