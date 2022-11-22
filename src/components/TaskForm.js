import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Grid, Select, FormControl, MenuItem, InputLabel } from '@mui/material'
import { Close } from '@mui/icons-material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY:'auto'
};

export default function TaskForm({ open, setOpen, handleSubmit }) {
  const handleClose = () => setOpen(false);
  const [formDetails, setFormDetails] = useState({
    startDate: '',
    endDate: '',
    asignee: '',
    status: '',
    taskDetails: ''
  })
  const handleChangeStatus = (e) => {
    setFormDetails({ ...formDetails, status: e.target.value })
  }

  const handleChange = (e, name) => {
    setFormDetails({ ...formDetails, [name]: e.target.value })
  }


  const clearForm = () => {
    setFormDetails(
      {
        ...formDetails,
        startDate: '',
        endDate: '',
        asignee: '',
        status: '',
        taskDetails: ''
      }
    )
  }

  useEffect(() => {
    if(open){
      clearForm()
    }
  },[open])


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} position="relative">
          <Box position="absolute" top={5} right={5} cursor="pointer">
            <Close onClick={handleClose} />
          </Box>
          <form>
            <Grid item xs={10} mb={2}>
              <Box textAlign="center">
                <h3>Add Task</h3>
              </Box>
            </Grid>
            <Grid item xs={10} mb={2}>
              <TextField onChange={(e) => handleChange(e, 'startDate')} fullWidth id="outlined-basic" label="Start Date" variant="outlined" type="date" InputLabelProps={{
                shrink: true,
              }} />
            </Grid>
            <Grid item xs={10} mb={2}>
              <TextField onChange={(e) => handleChange(e, 'endDate')} fullWidth id="outlined-basic" label="End Date" variant="outlined" type="date" InputLabelProps={{
                shrink: true,
              }} />
            </Grid>
            <Grid item xs={10} mb={2}>
              <TextField onChange={(e) => handleChange(e, 'taskDetails')} multiline rows={5} fullWidth id="outlined-basic" label="Task Details" variant="outlined" InputLabelProps={{
                shrink: true,
              }} />
            </Grid>
            <Grid item xs={10} mb={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formDetails.status}
                  label="Status"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={10} mb={2}>
              <TextField onChange={(e) => handleChange(e, 'asignee')} fullWidth id="outlined-basic" label="Asignee" variant="outlined" InputLabelProps={{
                shrink: true,
              }} />
            </Grid>
            <Grid item xs={10} mb={2} onClick={() => handleSubmit(formDetails)}>
              <Button fullWidth color="primary" variant='contained'>Add Task</Button>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
