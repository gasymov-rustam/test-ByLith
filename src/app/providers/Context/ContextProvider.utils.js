export const reducer = {
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
  setLabels(state, payload) {
    state.labels = state.labels.filter((item) => item.attribute_id !== payload.attribute_id);
    state.labels.push(payload);
  },
  setImages(state, payload) {
    const newImages = state.product?.data?.images.filter((image) => image.url !== payload.url);
    newImages.unshift(payload);

    state.product.data.images = newImages;
  },
  setWithResetLabels(state, payload) {
    state.labels = payload.labels.reduce((accum, item) => {
      const attribute = state?.product?.data?.attributes.find((value) => value.id === item.attribute_id);
      const label = attribute.labels.find((value) => value.id === item.label_id);
      accum.push({ attribute_id: attribute.id, label_id: label.id });

      return accum;
    }, []);

    state.variantPrice = payload.price;
    state.variantTitle = payload.title;
    state.variantId = payload.id;
    this.setImages(state, payload.image);
  },
};
