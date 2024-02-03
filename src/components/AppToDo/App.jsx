// import  Form  from "components/Form/Form";
import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistic/Statistics";
import Section from "components/Painting/Section";
import { Notification } from "components/Notification/Notification";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

    handleChangeGood = () => {
        this.setState(prevState => ({ good: prevState.good + 1 }))
    }

    handleChangeNeutral = () => {
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
    }

    handleChangeBad = () => {
        this.setState(prevState => ({ bad: prevState.bad + 1 }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback()
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        handleChangeBad={this.handleChangeBad}
                        handleChangeGood={this.handleChangeGood}
                        handleChangeNeutral={this.handleChangeNeutral}
                    />
                </Section>
                <Section title="Statistics">
                    {totalFeedback > 0 ? (<Statistics 
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        countTotalFeedback={this.countTotalFeedback}
                        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                    />) : (<Notification message="There is no feedback"></Notification>)}
                </Section>
            </>
        )
    }

    // formSubmitHandler = data => {
    //     console.log("data", data);
    // }

    // render() {
    //     return (
    //         <div>
    //             <Form onSubmit={this.formSubmitHandler}/>
    //         </div>
    //     );
    // }
}

export default App;