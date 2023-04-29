export const reducer = {
  setLoading: (state, payload) => {
    state.isLoading = payload;
  },
  setData: (state, payload) => {
    state.data = payload;
  },
  setError: (state, payload) => {
    state.error = payload;
  },
  setProduct: (state, payload) => {
    state.product = payload;
  },
  setCurrentPage: (state, payload) => {
    state.currentPage = payload;
  },
};
