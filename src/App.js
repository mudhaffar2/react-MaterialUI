import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import purple from 'material-ui/colors/purple';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '20px',
    padding: '40px',
    justifyContent: 'space-around',
    border: '1px solid black',
    borderRadius: '10px',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
  group: {
    display: 'inline',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <div sm={4}>
        <Avatar
          alt="Ertugrul"
          src="https://dizibilgi.tv/wp-content/uploads/2017/05/Dirili%C5%9F-Ertu%C4%9Frul-3.-sezon-finali-1.jpg"
          style={{width:200, height:200, display:'block'}}
        />
        <h3>Upload Profile Photo</h3>
        
        <TextField
          label="Status Message:"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.textFieldRoot,
              input: classes.textFieldInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.textFieldFormLabel,
          }}
        />
      </div>
      <div sm={8}>
        <TextField
          label="First Name:"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.textFieldRoot,
              input: classes.textFieldInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.textFieldFormLabel,
          }}
        />
        <br/>
        <TextField
          label="Last Name:"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.textFieldRoot,
              input: classes.textFieldInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.textFieldFormLabel,
          }}
        />
        <br/>
        <p>
          Email: <strong>johndoe@example.com</strong> <a href='#'>Change Password</a>
        </p>
        <br/>
        <FormLabel component="legend">Gender:</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          className={classes.group}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        <br/>
        <TextField
          id="date"
          label="Date of Birth:"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br/>
        <br/>
        <br/>
        <Button raised className={classes.button}>
          Save Changes
        </Button>


        
      </div>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);