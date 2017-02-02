import fetch from 'isomorphic-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}









export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function fetchPostsIfNeeded(subreddit) {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.
  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    let myState = getState();
    if (shouldFetchPosts(myState, subreddit)) {
      // Dispatch a thunk from thunk!
      let dispatchObject = fetchPosts(subreddit)
      return dispatch(dispatchObject)
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

// helper used by fetchPostsIfNeeded()
function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

//helper called by fetchPostsIfNeeded()
function fetchPosts(subreddit) {
    return function(dispatch) {
        // First dispatch: the app state is updated to inform that the API call is starting.
        let dispatchObj = requestPosts(subreddit); // {type: REQUEST_POSTS,subreddit: xxxxx}
        dispatch(dispatchObj)  
            // The function called by the thunk middleware can return a value,
            // that is passed on as the return value of the dispatch method.

            // In this case, we return a promise to wait for.
            // This is not required by thunk middleware, but it is convenient for us.

        return fetch('https://www.reddit.com/r/' + subreddit + '.json')
            .then(response => response.json())
            .then((json) => {
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                let dispatchObject = receivePosts(subreddit, json) //{type: RECEIVE_POSTS,subreddit: xxxxx, posts: []}
                dispatch(dispatchObject)
            })
            // In a real world app, you also want to
            // catch any error in the network call.
    }
}

//helper called by fetchPosts().  The result is dispatched
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit: subreddit
    }
}

// helper called in fetchPosts().  The result is dispatched
function receivePosts(subreddit, json) {
  const result =  {
    type: RECEIVE_POSTS,
    subreddit: subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
  return result;
}



// {
//   selectedSubreddit: 'frontend',
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [
//         {
//           id: 42,
//           title: 'Confusion about Flux and Relay'
//         },
//         {
//           id: 500,
//           title: 'Creating a Simple Application Using React JS and Flux Architecture'
//         }
//       ]
//     }
//   }
// }

