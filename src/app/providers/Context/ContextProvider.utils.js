export const reducer = {
  addToCart(state, payload) {
    state.cart.push(payload);
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setData(state, payload) {
    state.data = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setProduct(state, payload) {
    state.product = payload;
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },
  setProductCount(state, payload) {
    state.productCount = payload;
  },
  setImages(state, payload) {
    const newImages = state.product?.data?.images.filter((image) => image.url !== payload.url);
    newImages.unshift(payload);

    state.product.data.images = newImages;
  },
  setVariant(state, payload) {
    if (payload) {
      state.variant = payload;
    }

    if (payload?.image) {
      this.setImages(state, payload?.image);
    }
  },
  setLabels(state, payload) {
    if (payload.attribute_id === Object.keys(state.labels)[0]) {
      this.setResetLabels(state);
      this.variant = null;
    }
    state.labels[payload.attribute_id] = payload.label_id;
    const attribute = state.product?.data?.attributes.find((item) => item.id === payload.attribute_id);
    const label = attribute.labels.find((value) => value.id === payload.label_id);
    const image = state.product?.data?.images.find((item) => item.title.includes(label.title.toLowerCase()));

    if (image) {
      this.setImages(state, image);
    }

    window.localStorage.setItem('labels', JSON.stringify(state.labels));
  },
  setResetLabels(state) {
    state.labels = {};
    window.localStorage.removeItem('labels');
  },
};
