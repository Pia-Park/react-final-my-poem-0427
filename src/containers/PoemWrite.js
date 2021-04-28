import {connect} from 'react-redux'
import {sendPoemApi} from '../firebase/firebase'
import {
    addNewPoemFailure,
    addNewPoemPending,
    addNewPoemSuccess

} from '../action/action'
import PoemWrite from '../component/PoemWrite'


const mapDispatchToProps = dispatch => ({
    onPoemSubmit: async(id, title, content, time) => {
        try {
            const newPoem = {
                id,
                title,
                content,
                createdAt: time
            }
            dispatch(addNewPoemPending())

            await sendPoemApi(newPoem)
            dispatch(addNewPoemSuccess(newPoem))

        } catch (error) {

            alert("Failure to write a new Poem. Try again please.")
            dispatch(addNewPoemFailure(error))
        }
    }
})

export default connect(null, mapDispatchToProps)(PoemWrite)