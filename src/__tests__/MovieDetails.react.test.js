import React from 'react';
import MovieDetails from '../components/MovieDetails';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  getMovieDetails: jest.fn(),
  movieDetails: {
    title: 'some movie',
    releaseDate: '2011',
    runtime: 'some runtime',
    vote_average: 'some vote',
    overview: 'some overview',
    poster_path: 'some path'
  }
})

const wrapper = renderer.create(<MemoryRouter><Provider store={store}></Provider></MemoryRouter>)

describe('Movie Details component testsuite', () => {
  it('renders properly', () => {
    expect(wrapper.toJSON).toMatchSnapshot();
  })
});
