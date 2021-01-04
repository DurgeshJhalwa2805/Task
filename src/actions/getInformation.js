
import information from '../reducers/information'
import {GET_INFO,FILL_TEXT} from './actionType'
const Python = 'Python'
const Information = {
    python:"Information on python",
    java:"information on Java ",
    C : "Information on C++",
    JavaScript:"Information on JavaScript",
    Swift : "Information on Swift"
}

export const getInfo = (infoType) => dispatch => {
    if(infoType == Python){
        dispatch({
            type:FILL_TEXT,
            payload:Information.python
        })
    }
    if(infoType=="Java"){
        dispatch({
            type:FILL_TEXT,
            payload:Information.java
        })
    }
    if(infoType=="C"){
        dispatch({
            type:FILL_TEXT,
            payload:Information.C
        })
    }
    if(infoType=="JavaScript"){
        dispatch({
            type:FILL_TEXT,
            payload:Information.JavaScript
        })
    }
    if(infoType=="Swift"){
        dispatch({
            type:FILL_TEXT,
            payload:Information.Swift
        })
    } 
    if(infoType==0){
        dispatch({
            type:FILL_TEXT,
            payload:"Select Options from DropDown"
        })
    } 
       
}