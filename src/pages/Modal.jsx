import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { Img } from "components";
import "../styles/modal.css";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

// this is pop up component form submit
const Form=() =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button
         className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
         shape="circle"
         size="md"
        onClick={handleOpen}>
        <Img
                              className="h-10"
                              src="./images/img_add.svg"
                              alt="add"
                            />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='popup'>
            <div className='main_popup'>
                <div className='first_section'>
                    <h1>Create new assessment</h1>
                    <img className='cut' src='./images/cut.png' onClick={handleClose} style={{cursor:'pointer'}}/>
                </div>

            </div>
            <hr/>
            <div className='middle_div_section'>
            <div className='middle_section'>
                <h2>Name of assessment</h2>
                <div><input className='input_box' type='text' value='Type Here'/></div>
            </div>
            <div className='dropdown_first_section'>
                <h2>Purpose of the test is</h2>
                <div className='dropdown'>
                <select name="select" id="cars">
                <option value="select">select</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select>
                </div>

            </div>
            <div className='dropdown_first_section'>
                <h2>Description</h2>
                <div className='dropdown'>
                <select name="select" id="cars">
                <option value="select">select</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select>
                </div>

            </div>
            <div className='skill_section'>
                <h2>Description</h2>
                <div className='selection'>
                    <img src='./images/Frame 1000008458.png'/>
                </div>
            </div>
            <div className='middle_section'>
                <h2>Duration of assessment</h2>
                <div><input style={{color:'#8DA4BF'}} className='input_box' type='text' value='HH:MM:SS'/></div>
            </div>
            <div className='footer'>
              <button className='footer_button'>Save</button>

            </div>
            </div>
            </div>
        

          </Box>
        </Modal>
      </div>
    )
}  

export default Form
