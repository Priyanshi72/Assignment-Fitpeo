import PropTypes from "prop-types";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";


const OverviewCart = (props) => {
  const { difference, positive = false, sx, value, lableName , icon, backgroundColor} = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="flex-start"
          spacing={2}
        >
          <Avatar
            sx={{
              backgroundColor: {backgroundColor},
              height: 110,
              width: 110,
            }}
          >
            <SvgIcon sx={{ fontSize: 50 }}>
              {icon}
            </SvgIcon>
          </Avatar>

          <Stack spacing={1} direction="column">
            <Typography color="text.secondary" variant="overline">
              {lableName}
            </Typography>
            <Typography
              fontStyle="initial"
              variant="h4"
              style={{ fontWeight: "bold" }}
            >
              {value}
            </Typography>
            {difference && (
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Stack alignItems="center" direction="row" spacing={0.5}>
                  <SvgIcon
                    color={positive ? "success" : "error"}
                    fontSize="small"
                    style={{ fontWeight: "bold" }}
                  >
                    {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </SvgIcon>
                  <Typography
                    color={positive ? "success.main" : "error.main"}
                    variant="body2"
                    style={{ fontWeight: "bold" }}
                  >
                    {difference}%
                  </Typography>
                </Stack>
                <Typography variant="inherit" style={{ fontWeight: "bold" }}>
                  this month
                </Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewCart.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};

export default OverviewCart;
