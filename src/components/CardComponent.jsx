import React, { useState } from "react";
import { 
    Button, 
    ButtonGroup, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Dialog, 
    DialogTitle, 
    Typography 
} from "@mui/material";

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        teste
      </Dialog>
    );
  }  

const CardComponent = (props) => {

    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

    return (

        <Card sx={{ minHeight: 370 }}>
            <SimpleDialog
            open={open}
            onClose={handleClose}
            />
            <CardMedia 
                component="img"
                alt="Imagem"
                height="200"
                image={`${props.data?.thumbnail.path}/standard_xlarge.${props.data?.thumbnail.extension}`}
            />
            <CardContent>
                <Typography noWrap variant="h6" component="div">
                {props.data?.title}
                </Typography>
                <Typography noWrap mt={1} variant="subtitle1">
                {!( props.data?.description === "" || 
                    props.data?.description === "#N/A" ||
                    props.data?.description === null ) ? 
                    props.data?.description : "Não Possui Descrição"}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup size="large" orientation="vertical" fullWidth>
                    <Button variant="outlined" onClick={handleClickOpen}>Saiba Mais</Button>
                    <Button variant="contained"color="secondary">Quero Receber em Casa</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
}

export default CardComponent;