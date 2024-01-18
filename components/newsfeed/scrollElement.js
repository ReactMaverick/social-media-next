import styles from './scrollElement.module.css';

export default function ScrollElement({ scrollXorY }) {
    return (
        <div
            className={`scroll-element ${scrollXorY == 'X' ? 'scroll-x' : 'scroll-y'} scroll-scrolly_visible`}

        >
            <div
                className="scroll-element_outer"

            >
                <div
                    className="scroll-element_size"

                />
                <div
                    className="scroll-element_track"

                />
                <div
                    className={` ${scrollXorY == 'X' ? styles.scrollBarX : ''} scroll-bar`}

                />
            </div>
        </div>
    )
};