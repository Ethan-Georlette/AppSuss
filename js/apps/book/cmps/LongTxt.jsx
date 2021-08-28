export function LongTxt({ txt, isLongTxtShown, onReadMore }) {
    const restTxt = txt.slice(99);

    return (
        <p className="long-txt">{txt}{(!isLongTxtShown && restTxt)&&<span>...</span>}
            {isLongTxtShown && <span>{restTxt}</span>}
            {(restTxt) && (
                <React.Fragment>
                    <br />
                    <span onClick={onReadMore}>{isLongTxtShown ? 'Read less' : 'Read more'}</span>
                </React.Fragment>
            )}
        </p>
    )
}