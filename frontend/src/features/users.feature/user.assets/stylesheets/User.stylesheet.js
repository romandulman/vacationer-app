import '../../../../main/common/assets/stylesheets/fonts.css'
import { green } from '@material-ui/core/colors';

export const Styles = {
    LoginCard: {
        width: '300px',
        position: 'fixed',
        top: '40%',
        left: '40%',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    RegisterCard: {
        width: '300px',
        // height: '150px',
        position: 'fixed',
        top: '40%',
        left: '40%',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    spinnerDiv:{
        margin: 'auto'
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
};
