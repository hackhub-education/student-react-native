const initialState = {
  isLoggedIn: false,
  token: '',
  profile: {}
};

export default {
  state: initialState,
  reducers: {
    login: (state, { token, profile }) => ({
      ...state,
      token,
      profile,
      isLoggedIn: true,
    }),
    logout: () => initialState,
  },
}