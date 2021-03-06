import Vue from "vue";
import Vuex from "vuex";
import fb from "./firebaseConfig";
import constants from "./constants";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: null,
    isAdmin: false,
    personCollection: [],
    expenseCollection: [],
    settings: {},
    photos: {}
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
      state.isAdmin = user && user.uid === constants.adminUid;
    },
    setPersonCollection(state, personCollection) {
      state.personCollection = personCollection;
    },
    setexpenseCollection(state, expenseCollection) {
      state.expenseCollection = expenseCollection;
    },
    saveSettings(state, settings) {
      state.settings = settings;
    },
    savePhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {}
});

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit("setCurrentUser", user);
  }
});

export default store;
