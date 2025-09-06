import './HorizontalScroll.css'; 

export const HorizontalScroll = ({items}) => {

    const items1 = items.slice(0, Number(items.length / 2));
    const items2 = items.slice(Number(items.length / 2), items.length);

  return (
      <div className="horizontal-container">
        <div className="scroll-row-left">
          {[...items1, ...items1].map((skillItem, index) => (
            <div key={index} className="row-item">
              <p className="h-item-text">{skillItem.name}</p>
              <p className='h-item-rating'>{'★'.repeat(skillItem.rating)}</p>
            </div>
          ))}
        </div>
        <div className="scroll-row-right">
          {[...items2, ...items2].map((skillItem, index) => (
            <div key={index} className="row-item">
              <p className="h-item-text">{skillItem.name}</p>
              <p className='h-item-rating'>{'★'.repeat(skillItem.rating)}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default HorizontalScroll;