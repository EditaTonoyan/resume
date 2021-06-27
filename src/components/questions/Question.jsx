import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Context from '../../Context';
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: "block",
        marginTop: "1rem",
    },
    button: {
        background: "white",
    },
}));

function Question() {
    const classes = useStyles()
    const value = useContext(Context);
    const { questionAnswer } = value.state;
    const { handleChangeInput, nextQuestion } = value.function;
    return (
        <div>
            <form onSubmit={nextQuestion}>
                <TextField
                    id="standard-basic"
                    label={questionAnswer.question}
                    name={questionAnswer.resumeFieldId}
                    value={questionAnswer.answer ? questionAnswer.answer : ""}
                    onChange={handleChangeInput}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="default"
                        className={classes.button}
                        endIcon={<ArrowRight />}
                    >
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
}
export default Question;
