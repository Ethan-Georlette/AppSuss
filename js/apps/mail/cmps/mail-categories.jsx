const { Link } = ReactRouterDOM
export function MailCatagories({ onSetCategory, currCategory }) {
    return (
        <ul className="clean-list category-list">
            <li key="1"
                className={!currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory(null)}>Inbox
            </li>
            <li key="2"
                className={'isStarred' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory('isStarred')}>
                Starred
            </li>
            <li key="3"
                className={'isSent' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory('isSent')}>
                Sent
            </li>
            <li key="4"
                className={'isDrafts' === currCategory ? "active mail-category" : "category"}
                onClick={() => onSetCategory('isDraft')}>
                Drafts
            </li>
        </ul>
    );
}