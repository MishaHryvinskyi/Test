import css from './Event.module.css';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import {formatEventDuration, formatEventStart} from 'utils';
import { Chip } from './Event.styled';

export const Event = ({ 
    name, 
    location, 
    speaker, 
    type, 
    start, 
    end
}) => {
    const formatedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <FaMapMarkerAlt className={css.icon}/>
                {location}
            </p>
            <p className={css.info}>
                <FaUserAlt className={css.icon}/>
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon}/>
                {formatedStart}
            </p>
            <p className={css.info}>
                <FaClock className={css.icon}/>
                {duration}
            </p>
            <Chip eventType={type}>{type}</Chip>
        </div>
    );
}

Event.propTypes = {
    name: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    speaker: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
};