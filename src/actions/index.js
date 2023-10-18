export const YES_SHOW = "YES_SHOW";
export const NO_SHOW = "NO_SHOW";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const yesShow = () => {
    return({type:YES_SHOW});
}

export const noShow = () => {
    return({type:NO_SHOW});
}

export const fetchSuccess = data => {
    return({type:FETCH_SUCCESS, payload: data})
}