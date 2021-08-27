const { Link } = ReactRouterDOM
export function MailCatagories({ onSetCategory, currCategory }) {
    return (
        <ul className="clean-list category-list">
            <li key="1"
                className={!currCategory ? "active mail-category fas fa-inbox" : "category fas fa-inbox"}
                onClick={() => onSetCategory(null)}>
            </li>
            <li key="2"
                className={'isStarred' === currCategory ? "active mail-category fas fa-star" : "category fas fa-star"}
                onClick={() => onSetCategory('isStarred')}>
            </li>
            <li key="3"
                className={'isSent' === currCategory ? "active mail-category fas fa-share-square" : "category fas fa-share-square"}
                onClick={() => onSetCategory('isSent')}>
            </li>
            <li key="4"
                className={'isDrafts' === currCategory ? "active mail-category fab fa-firstdraft" : "category fab fa-firstdraft"}
                onClick={() => onSetCategory('isDraft')}>
            </li>
        </ul>
    );
}