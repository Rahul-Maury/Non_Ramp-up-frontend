

import classes from '../CSS/Modal.module.css';
function RemoveModal(props){

    const submitHandler = async() => {
          props.onSubmit(props.id)
      };
      const closeHandler = () => {
        props.onClose();
      };



    return (
        <>
           <div className={classes.popBox}>
            <div className={classes.box}>
                <div className={classes.head}>
                    <h2>Remove Infromation</h2>
                </div>
                <div className={classes.msg}>
                <h3>
            Are you sure you want to remove the Information  from the list?
          </h3>
                </div>
                <div className={classes.button}>
                <button className={classes.btn1} onClick={submitHandler}>
            Confirm
          </button>
          <button className={classes.btn2} onClick={closeHandler}>
            Cancel
          </button>
                    
                </div> 

            </div>

           </div>
        </>
    )
}
export default RemoveModal;