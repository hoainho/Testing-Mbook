import React from 'react'
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import RatingItem from '../components/reviews/RatingItem';
import { mockRateItems } from './mock';


describe('Snapshoot testing react componsent', () => {
  const getRateItems = jest.fn(()=>mockRateItems)

  const data = getRateItems()[0]
  it('So sánh 1 component', () => {
    const tree = renderer.create(< RatingItem 
        avatar={data.avatar} 
        author_name={data.author_name} 
        book={data.book} 
        time={data.time} 
        content={data.content}  
        title={data.title}
      />).toJSON();
    expect(tree).toMatchSnapshot(); 
  });

})

describe("Snapshoot testing react componsents", () => {
  const getRateItems = jest.fn(()=>mockRateItems)
  const data = getRateItems()
  data.map((elm, index) => {
    it(`So sánh component thứ ${index}`, () => {
      const tree = renderer.create(< RatingItem 
          avatar={elm.avatar} 
          author_name={elm.author_name} 
          book={elm.book} 
          time={elm.time} 
          content={elm.content}  
          title={elm.title}
        />).toJSON();
      expect(tree).toMatchSnapshot(); 
    });
  })
});