const initialState = {
  test: 222,
  users: null,
  usersError: null,
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
