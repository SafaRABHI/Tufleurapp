import { combineReducers } from 'redux';
import AuthReducer from 'aut/reducers/AuthReducer';
/*import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']); */

export default combineReducers({

	auth: AuthReducer
});