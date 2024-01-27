import styles from './friendList.module.css';

export default function FriendList({ children }) {
    return (
        <div className='friendList'>
            <div className={`${styles.row} row`}>
                {children}
            </div>
        </div>
    )
}