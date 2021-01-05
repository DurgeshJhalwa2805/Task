
import information from '../reducers/information'
import {GET_INFO,FILL_TEXT} from './actionType'
const Python = 'Python'
const Information = {
    python:"Information on python:Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    java:"Information on Java :Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    C : "Information on C++:C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language",
    JavaScript:"Information on JavaScript:JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions",
    Swift : "Information on Swift:Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community, first released in 2014"
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