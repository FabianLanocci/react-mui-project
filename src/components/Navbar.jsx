import { Mail, Notifications} from '@mui/icons-material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { AppBar, Toolbar, styled, Typography, InputBase, Badge} from "@mui/material";
import React from "react"; 
import AccountMenu from './AccountMenu';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const IconContainer = styled("Box")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled("Box")(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));


const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Feed App</Typography>
                <LocalCafeIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <SearchBar color='gray'><InputBase placeholder='Buscar...'/></SearchBar>
                <IconContainer>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <AccountMenu></AccountMenu>
                </IconContainer>
                <UserBox>
                    <AccountMenu></AccountMenu>
                    <Typography variant='span'>Agus</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar