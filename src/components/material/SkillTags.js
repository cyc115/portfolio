import React from 'react'
import Chip from 'material-ui/Chip'
import { lightGreen100 } from 'material-ui/styles/colors'


const styles = {
  chip: {
    margin: 2,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
/**
 * <SkillTags skills=[{label : 'Android', color? : colors}]
 */
class SkillTags extends React.Component {
  render() {
    const {
      skills = [{
        label: 'Android',
        color: lightGreen100
      }],
      className=''
    } = this.props

    return (
      <div style={styles.wrapper} className={`experience-tags ${className}`}>
        {skills.map(skill => {
          return (
          <Chip
            style={styles.chip}
            backgroundColor={skill.color}
            key={skill.label}>
            {skill.label}
            </Chip>
          )
        })}
      </div>
    )
  }

}



export default SkillTags