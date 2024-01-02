import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import { sortByTime, sortByPrice, sortByDuration } from "../service/dataTransform";
// eslint-disable-next-line no-unused-vars
import { makeArgs } from "../service/dataTransform";

const initialState = {
    trainsList: [],
    printTrainsList: [],
    request: ''
};


const trainsParamsSlice = createSlice({
  name: "trainsParams",
  initialState,
    reducers: {
    setTrainsResult: (prevState, action) => ({
          ...prevState,
            trainsList: action.payload,
            printTrainsList: sortByTime(action.payload.items)
        }),
    // setRequest: (prevState, action) => ({
    //       ...prevState,
    //         request: makeArgs() 
    //     }),
    // setSortByPriceTrains: (prevState) => ({
    //       ...prevState,
    //         printTrainsList: sortByPrice(prevState.trainsList.items)
    //     }),
    // setSortByDurationTrains: (prevState) => ({
    //       ...prevState,
    //         printTrainsList: sortByDuration(prevState.trainsList.items)
    //     })
    }
});

export const { setTrainsResult,
    //setSortByTimeTrains, setSortByPriceTrains, setSortByDurationTrains 
} = trainsParamsSlice.actions;
export default trainsParamsSlice.reducer;