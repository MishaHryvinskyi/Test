export const FeedbackOptions = ({ handleChangeGood, handleChangeNeutral, handleChangeBad }) => {
    return (
        <>
            <button name="good" type="button" onClick={handleChangeGood}>Good</button>
            <button name="neutral" type="button" onClick={handleChangeNeutral}>Neutral</button>
            <button name="bad" type="button" onClick={handleChangeBad}>Bad</button>
        </>
    )
}