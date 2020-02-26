export const UPDATE_ANIMATION = "UPDATE_ANIMATION";
export const STOP_GAME = "STOP_GAME";
export const RESUME_GAME = "RESUME_GAME";


export const handlePauseToggle = (pause: boolean) => {
    if(!pause){
        return { type: STOP_GAME };
    }else{
        return {type: RESUME_GAME };
    }
}

export const updateAnimation = (animation: boolean) => ({
    type: UPDATE_ANIMATION ,
    animation
});
