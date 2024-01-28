// import css from './PageTitle.module.css';
import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';
export const PageTitle = ({ text }) => {
    return (
        // <h1 className={css.title}>{text}</h1>
        <Title>{text}</Title>
    );
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}