export const UPDATE_DOTS = "UPDATE_DOTS";
export const UPDATE_POINTS = "UPDATE_POINTS";

export const updatePoints = (newPoints: number) => ({ 
    type: UPDATE_POINTS , 
    points: newPoints
});

export const updateSnake = (dots: Array<Array<number>>) => ({ 
    type: UPDATE_DOTS, 
    dots 
});
