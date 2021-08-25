const { Link } = ReactRouterDOM
export function MailCatagories({ onSetCategory, currCategory }) {
    return (
        <ul className="clean-list">
            <li key="1"
                className={'inbox' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory(null)}>Inbox
            </li>
            <li key="2"
                className={'starred' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory('isStarred')}>
                Starred
            </li>
            <li key="3"
                className={'sent' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory('isSent')}>
                Sent
            </li>
            <li key="4"
                className={'drafts' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory('isDraft')}>
                Drafts
            </li>
        </ul>
    );
}