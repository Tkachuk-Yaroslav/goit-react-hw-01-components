import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/generate-color';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  console.log(stats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(item => {
          return (
            <li
              className={css.item}
              key={item.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
