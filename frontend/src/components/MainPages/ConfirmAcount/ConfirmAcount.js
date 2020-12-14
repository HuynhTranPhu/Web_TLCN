import React, { Component} from 'react'
import axios from 'axios'
import VerifyRegisterAccount from '../../VerifyRegisterAccount/VerifyRegisterAccount'
import NotFound from '../../404/404'
class VerifyRegisterAccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isconfirm: true
        }
    }
    async componentWillMount() {
        try {
           await axios.get('/user/verify/' + this.props.match.params.token)
           console.log(this.props.match.params.token);
        }
        catch(err) {
            this.setState({isconfirm: false})
        }
    }
    render() 
    {
        const content="You have verified login successfully";
        if(this.state.isconfirm) {
            return(
                <VerifyRegisterAccount content={content}/>
            )
        } else {
            return (
                <NotFound/>
            )
        }
            
    }
}
export default VerifyRegisterAccountContainer