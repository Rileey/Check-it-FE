export const LoginStart = (userDetails) = ({
    type: "LOGIN_START"
});

export const LoginSuccess = (userDetails) = ({
    type: "LOGIN_SUCCESS",
    payload: userDetails,
});

export const LoginFailure = (userDetails) = ({
    type: "LOGIN_FAILURE", 
    payload: error
});


export const Follow = (profileId) => ({
    type: "FOLLOW",
    payload: profileId,
});

export const Unfollow = (profileId) => ({
    type: "UNFOLLOW",
    payload: profileId,
});