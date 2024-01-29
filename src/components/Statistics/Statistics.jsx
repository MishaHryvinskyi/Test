import PropTypes from 'prop-types';
import { 
    StatisticsSection, 
    StatisticsItem,
    StatisticsList,
    StatisticsTitle 
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
    
    return (
        <StatisticsSection>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatisticsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatisticsItem key={id}>
                    <span>
                        {label}
                    </span>
                    <span>
                        {percentage}
                    </span>
                </StatisticsItem>
                ))}
                
            </StatisticsList>
        </StatisticsSection>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}