import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f50b5',
            dark: '#002884',
            LogoColor: "#27aae1",
            MainFont: 'Agdasima',
            MainFont1: "'Lato', sans-serif !important",
            Black: '#231F20',
            White: '#FFFFFF',
            Gray: '#E5E5E5',
            LightGray: '#E6E7E8',
            ParaColor: "#6d6e71",
            ButtonGredient: "linear-gradient(to bottom, rgba(109,110,113,1), rgba(0,0,0,1))",
            BackGredient: "linear-gradient(to bottom, rgba(43,57,144,.8), rgba(39,170,225,1) 65%)",
            SidebarBgGredient: "linear-gradient(to bottom, rgba(39,170,225,.8), rgb(112 174 224 / 80%))",
            Green: "#8dc63f",
            BackGredient2: "linear-gradient(to bottom, rgba(43,57,144,.8), rgba(39,170,225,.8) 65%)",
            deepBlue: "#2b3990",
            BackGredient1: "linear-gradient(to bottom, rgba(43,57,144,100%), rgba(39,170,225,1) 55%)",
            LightGray1: "#939598",
            bgProfile: " linear-gradient(to bottom, rgba(39,170,225,.8), rgba(28,117,188,.8))",
            GrayGredient: "-webkit-radial-gradient(#fff 50%, #EFEFEF 90%)",
            Gray2: "#f8f8f8",
            BoxShadow: "0 12px 12px rgba(39, 170, 225, 0.3)",
            BoxShadow1: "0 12px 12px rgb(31 31 31 / 32%)",
            BoxShadow2: "0px -2px 13px 2px rgba(39, 170, 225, 0.3)",
            BoxShadow3: "0px 3px 3px -2px rgb(39 170 225 / 19%), 0px 3px 4px 0px rgb(39 170 225 / 15%), 0px 1px 8px 0px rgb(39 170 225 / 11%)",

            GalleryBorder: "rgba(39, 170, 225, 0.3)",
            LightBlue: " rgb(41 171 226 / 5%)",
            CoverBgGradient: "linear-gradient(to bottom, rgb(35 31 32 / 50%), rgb(112 174 224 / 80%))",
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
            InputColor: "#c4c4c4",
        },
    },
});

export default theme;