import axios from "axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  profile: {}
};

export default {
  state: initialState,
  reducers: {
    login: (state, { token, profile }) => ({
      ...state,
      token,
      profile,
      isLoggedIn: true
    }),
    logout: () => initialState,
    updateProfile: (state, { profile }) => ({
      ...state,
      profile
    })
  },
  effects: dispatch => ({
    async fetchProfile(payload, { user: { token, profile }}) {
      const { data } = await axios({
        method: "GET",
        url: `https://tweet-api.webdxd.com/profile/${profile._id}`,
        headers: {
          Authorization: `Bearer ${token} `
        }
      });
      if (data.success) {
        dispatch.user.updateProfile(data);
      }
    }
  })
};
