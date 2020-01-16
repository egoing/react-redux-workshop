import Control from '../components/Control';
import { connect } from 'react-redux';
export default connect(null, 
    function(dispatch){
        return {
            onClick:function(mode){
                if(mode === 'DELETE_PROCESS'){
                    if(!window.confirm('Really?')){
                        return;
                    }
                }
                dispatch({type:mode});
            }
        }
    }    
)(Control);