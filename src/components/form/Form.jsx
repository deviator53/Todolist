import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

}));
const Form = () => {

    return (
        <>
        <div>
            <form>
            <div>
            <label>Add Item</label><br/>
                <input type="text" placeholder="Add an item" /><br/>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default Form;
