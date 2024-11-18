import { handleActions } from "redux-actions";

const initialValue = {
    jobs : {
        developer : {
            name :"이름1",
            skills : ["React.js", "Node.js"]
        },
        planner : {
            name :"이름2",
            skills : ["Excel", "powerpoint"]
        }
    },
}

const route = handleActions({
}, initialValue)

export default route;