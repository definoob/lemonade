import { FunctionComponent } from 'react';
import { ReactComponent as CreateButton } from '../../common/images/ic_create.svg';

const subtitle = [
  'hangout',
  'experience',
  'virtual festival',
  'yoga class',
  'stand up / open mic',
  'masterclass',
  'anything',
  'anytime',
  'anywhere'
];

const CreateCard: FunctionComponent = () => (
  <div className="create-card">
    <div className="create-card__createBtn">
      <CreateButton cursor={'pointer'} />
    </div>
    <div className="create-card__ripple create-card__ripple_1" />
    <div className="create-card__ripple create-card__ripple_2" />
    <div className="create-card__ripple create-card__ripple_3" />
    <div className="create-card__text">
      <span className="create-card__title">CREATE</span>
      <div style={{ position: 'relative' }}>
        {subtitle.map((ele, i) => (
          <p
            key={i}
            className="create-card__subtitle"
            style={{
              animation: `fade-animation 45s linear ${i * 5}s infinite`
            }}
          >
            {ele}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default CreateCard;
