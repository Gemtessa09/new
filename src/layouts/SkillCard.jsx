import PropTypes from 'prop-types';

const SkillCard = ({ title, val, width }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{val}</p>
      <div style={{ width }}></div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default SkillCard;
