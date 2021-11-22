export function setUserData(state, payload){
    state.userData = payload.user;
    state.token = payload.token;
    state.isLogged = true;
    state.error = false;
    state.errorMessage = "";
}

export function logout(state){
    state.userData = null;
    state.token = null;
    state.isLogged = false;
}

export function setError(state, error){
    state.error = true;
    state.errorMessage = error;
    state.userData = null;
    state.token = null;
}