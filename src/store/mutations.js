export default {
    changeRouterConfig(state, newValue) {
        state.routerConfig = newValue
    },
    changeLange(state, newValue) {
        state.language = newValue
    },
    changeTheme(state, newValue) {
        state.themeName = newValue
        document.documentElement.setAttribute("data-theme", newValue);
    }
}