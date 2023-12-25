import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {option.map(item => {
        return (
          <li className={css.btnItem} key={item}>
            <button
              className={css.btn}
              type="button"
              name={item}
              onClick={onLeaveFeedback}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
