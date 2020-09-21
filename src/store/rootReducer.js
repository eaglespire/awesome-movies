import {combineReducers} from "redux";
import {reducer as PopularMoviesReducer} from './popular-movies/reducer'
import {reducer as MovieDetailsReducer} from './movie-details/reducer'
import {reducer as CastReducer} from './cast/reducer'
import {reducer as RecommendedMoviesReducer} from './recommendations/reducer'
import {reducer as ReviewsReducer} from './reviews/reducer'
import {reducer as ActorReducer } from './actor-bio/reducer'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['popular']
}


const rootReducer = combineReducers({
    popular : PopularMoviesReducer,
    movie_detail : MovieDetailsReducer,
    cast : CastReducer,
    recommendations : RecommendedMoviesReducer,
    reviews : ReviewsReducer,
    actor : ActorReducer
})
export default persistReducer(persistConfig, rootReducer)