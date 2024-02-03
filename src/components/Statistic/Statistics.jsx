export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage  }) => {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {countTotalFeedback()}</p>
            <p>positive feedback: {countPositiveFeedbackPercentage()} %</p>
        </>
    )
}