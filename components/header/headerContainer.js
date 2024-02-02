import styles from './headerContainer.module.css';

export default function HeaderContainer({ children }) {
    return (
        <div className={`container-fluid`}>
            {children}
        </div>
    )
}
