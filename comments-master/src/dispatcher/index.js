import flux from 'flux'

let Dispatcher = flux.Dispatcher;
let AppDispatcher = new Dispatcher();

export default AppDispatcher

/*
export default function createThunkMiddleware(extraArgument) {
	return ({dispatch, getState}) => next => action => {
	    if(typeof action === ‘function’) 
			{
			    return action(dispatch, getState, extraArgument);
			}

	    return next(action)
	}

}

*/