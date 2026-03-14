import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink} from "react-router-dom";


const StyledCartBadge = styled(Badge)(() => ({
    [`& .${badgeClasses.badge}`]: {
        top: 2,
        right: -8,
        minWidth: "18px",
        height: "18px",
        padding: "0 4px",
        fontSize: "0.7rem",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "999px",
    },
}));

export const CartNavBadge = ({ cartCount }) => {
    return (
        <NavLink to="/cart" className="nav__cart">
        <IconButton sx={{ color: "#fff", p: 0 }}>
            <StyledCartBadge
            badgeContent={cartCount}
            invisible={cartCount === 0}
            >
            <ShoppingCartOutlinedIcon fontSize="medium" />
            </StyledCartBadge>
        </IconButton>
        </NavLink>
    );
};