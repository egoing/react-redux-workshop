import Create from '../components/Create'
import { connect } from 'react-redux'
export default connect(
    null, 
    function(dispatch){
        return {
            onSubmit:function(title, desc){
                dispatch({type:'CREATE_PROCESS', title, desc});
            }
        }
    }
)(Create);