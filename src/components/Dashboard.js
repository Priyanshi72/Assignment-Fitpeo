import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import CurrencyRupeeTwoToneIcon from "@mui/icons-material/CurrencyRupeeTwoTone";
import HexagonTwoToneIcon from "@mui/icons-material/HexagonTwoTone";
import LiveHelpTwoToneIcon from "@mui/icons-material/LiveHelpTwoTone";
import OverviewCart from "./OverviewCart";
import SearchBar from "./SearchBar";
import {
  CardContent,
  Container,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Typography,
  Avatar,
  Card,
  Stack,
} from "@mui/material";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import OrdersIcon from "@heroicons/react/24/outline/NewspaperIcon";
import BalanceIcon from "@heroicons/react/24/outline/WalletIcon";
import TotalSalesIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import OverviewChart from "./OverviewChart";
import OverviewCustomer from "./OverviewCustomer";
import ChevronDownIcon from "@heroicons/react/24/outline/CubeIcon";
import ProductsTable from "./ProductsTable";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Profile from "@heroicons/react/24/solid/UserCircleIcon";

const drawerWidth = 240;
const iconArray = [
  <DashboardCustomizeRoundedIcon />,
  <Inventory2RoundedIcon />,
  <PeopleAltTwoToneIcon />,
  <CurrencyRupeeTwoToneIcon />,
  <HexagonTwoToneIcon />,
  <LiveHelpTwoToneIcon />,
];

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["Dashboard", "Product", "Customers", "Income", "Promote", "Help"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  alignItems: "center",
                  backgroundColor: "#000000",
                  borderRadius: 4,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                  p: "12px",
                }}
              >
                <ListItemIcon sx={{ color: "white", fontWeight: "bold" }}>
                  {iconArray[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ color: "white", fontWeight: "bold" }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  const profileCard = (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Card variant="contained" {...bindTrigger(popupState)}>
            <CardContent>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="flex-start"
                spacing={2}
              >
                <Avatar
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                >
                  <SvgIcon sx={{ fontSize: 50 }}>
                    <Profile />
                  </SvgIcon>
                </Avatar>

                <Stack spacing={1} direction="column">
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Vikash
                  </Typography>
                  <Typography
                    color="text.secondary"
                    fontStyle="initial"
                    fontSize={11}
                    variant="overline"
                  >
                    Project Manager
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f1f1f1",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ background: "transparent" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              mb: 0,
              p: "12px",
            }}
          >
            <SvgIcon fontSize="large" sx={{ color: "black", ml: 2 }}>
              <ChevronDownIcon />
            </SvgIcon>

            <Typography color="black" variant="h5" marginRight={3}>
              Dashboard
            </Typography>
          </Box>
          {drawer}
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 30,
              mb: 2,
              ml: 1,
              p: "1px",
            }}
          >
            {profileCard}
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              mb: 0,
              p: "12px",
            }}
          >
            <SvgIcon fontSize="large" sx={{ color: "black", ml: 2 }}>
              <ChevronDownIcon />
            </SvgIcon>

            <Typography color="black" variant="h5" marginRight={3}>
              Dashboard
            </Typography>
          </Box>
          {drawer}
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 30,
              mb: 2,
              ml: 1,
              p: "1px",
            }}
          >
            {profileCard}
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        backgroundColor="#ffffff"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
        marginTop={8}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} marginTop={0}>
            <Grid xs={12} sm={6} lg={6}>
              <h3>
                Hello! Vikash <h2>&#128075;</h2>
              </h3>
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <SearchBar />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewCart
                difference={12.1}
                positive
                sx={{ height: "100%", borderRadius: 3 }}
                value="$240k"
                lableName="Earning"
                icon={<CurrencyDollarIcon />}
                backgroundColor="black"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewCart
                difference={89.23}
                positive={false}
                sx={{ height: "100%", borderRadius: 3 }}
                value="$8.9k"
                lableName="Orders"
                icon={<OrdersIcon />}
                backgroundColor="#eb99ff"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewCart
                difference={55.98}
                positive={false}
                sx={{ height: "100%", borderRadius: 3 }}
                value="$90k"
                lableName="Balance"
                icon={<BalanceIcon />}
                backgroundColor="#8080ff"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewCart
                difference={45.7}
                positive
                sx={{ height: "100%", borderRadius: 3 }}
                value="$950k"
                lableName="Total Sales"
                icon={<TotalSalesIcon />}
                backgroundColor="#91eee4"
              />
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewChart />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewCustomer />
            </Grid>
            <Grid xs={12} lg={12}>
              <ProductsTable />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
